import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bringUsers } from "../../services/apiCalls";
import { userData } from "../userSlice";
import Spinner from "react-bootstrap/Spinner";
import { addChoosen } from "../detailsSlice";

import "./UsersAsAdmin.css";

export const UsersAsAdmin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const credentialsRdx = useSelector(userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(users.length);
    if (users.length === 0) {
      setTimeout(() => {
        bringUsers(credentialsRdx.credentials.token)
          .then((result) => {
            setLoading(false);

            setUsers(result.data.data);
          })
          .catch((error) => console.log(error));
      }, 2000);
    }
  }, [users]);

  const selected = (user) => {
    dispatch(addChoosen({ choosenObject: user }));
  

    setTimeout(() => {
      navigate("/user-profile-as-admin");
    }, 500);
  };

  if (loading) {
    return (
      <div className="spinnerDesign d-flex justify-content-center align-items-center flex-column">
        <div>
          {" "}
          <Spinner animation="border" variant="primary" />
        </div>
        <div>
          {" "}
          <h4>Loading...</h4>
        </div>
      </div>
    );
  } else if (users.length > 0) {
    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h2>Registered users list:</h2>
        <div>
          <p>Click on the user's card to see all details</p>
        </div>

        <div className="cardsContainer">
          {users.map((user) => {
            return (
              <div
                className="userCardDesign"
                onClick={() => selected(user)}
                key={user.id}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="pe-4 nameFieldDesign">User:</p>
                    <p>
                      {user.name} {user.first_surname} {user.second_surname}
                    </p>
                  </div>
                  <div className="seeMoreDesign">
                    <p>Click to see more</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>No registered user</div>;
  }
};
