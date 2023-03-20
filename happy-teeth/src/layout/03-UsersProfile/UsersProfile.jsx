import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { detailsData } from "../detailsSlice";
import { userData } from "../userSlice";




export const UsersProfile = () => {

  // const [user, setUser] = useState([]);

  const userDetailsRdx = useSelector(detailsData);
console.log(userDetailsRdx)
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!credentialsRdx.credentials.token) {
  //     navigate("/");
  //   }
  // });

 



  return (
    <div className="userDesign">
      {/* {user.length > 0 ? (
        <div className="cardContainer">
            return (
              <div
                className="userCardDesign"
                key={user.id}
              >
                {user}
                
              </div>
            );
          
        </div>
      ) : (
        <Spinner animation="border" variant="primary" />
      )} */}
    </div>
  );
};
