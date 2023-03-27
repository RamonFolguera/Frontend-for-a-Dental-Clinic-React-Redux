import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { detailsData } from "../detailsSlice";
import { userData } from "../userSlice";



export const UserProfileAsAdmin = () => {



  const userDetailsRdx = useSelector(detailsData);
  const credentialsRdx = useSelector(userData)

  const user = userDetailsRdx.choosenObject
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!credentialsRdx.credentials.token) {
      navigate("/");
    }
  });

  return (
    <Container className="profileMainDesign">
      <Row>
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
        
          </Row>
    </Container>





  );
};
