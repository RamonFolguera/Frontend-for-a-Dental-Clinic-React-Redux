import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bringMyUserProfile } from "../../services/apiCalls";
import { userData } from "../userSlice";
import "./UserProfile.css";

export const UserProfile = () => {

  const [user, setUser] = useState([]);

  const credentialsRdx = useSelector(userData)

  useEffect(() => {

    if(user.length === 0){
      bringMyUserProfile(credentialsRdx.credentials.token)
        .then(
          result => {
            setUser(result.data.data)

          }
        )
        .catch(error => console.log(error))
    }

  },[user])







  return (
    <Container className="profileMainDesign">
      
      <div className="text-center">
        <p className="nameDesign">
     
          {user.name}{" "}
          {user.first_surname}{" "}
          {user.second_surname}
        </p>
      </div>
   
        <div className="profileContainerDesign">
        <div className="profileDetailDesign">
            <div className="detailDesign">Email:
            </div>

            <div className="fieldDesign">
              {user.email}
            </div>
          </div>

          <div className="profileDetailDesign">
            <div className="detailDesign">Address:
            </div>

            <div className="fieldDesign">
              {user.address}
            </div>
          </div>


          <div className="profileDetailDesign">
            <div className="detailDesign">Phone:</div>
            <div className="fieldDesign">
              {user.phone}
            </div>
          </div>
        </div>
        <div className="buttonContainerDesign d-flex justify-content-center">
          <Link className="buttonUpdateDesign" to="/update-user-as-client">
            Update your profile
          </Link>
          </div>
      
    </Container>
  );
};
