import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { detailsData } from "../detailsSlice";
import { userData } from "../userSlice";

import './UsersProfile.css'

export const UsersProfile = () => {

  // const [user, setUser] = useState([]);

  const userDetailsRdx = useSelector(detailsData);
  const credentialsRdx = useSelector(userData)
  console.log(userDetailsRdx)
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!credentialsRdx.credentials.token) {
  //     navigate("/");
  //   }
  // });

  return (
    <div className="userDesign">
      
      <div className="userDetailsBox">




      </div>






        {/* <Spinner animation="border" variant="primary" /> */}
     
    </div>
  );
};
