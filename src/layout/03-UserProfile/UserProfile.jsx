import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { detailsData } from "../detailsSlice";
import "./UserProfile.css";

export const UserProfile = () => {
  const userDetailsRdx = useSelector(detailsData);

  console.log(userDetailsRdx.choosenObject.name);

  return (
    <Container className="profileMainDesign">
      
      <div className="text-center">
        <p className="nameDesign">
     
          {userDetailsRdx.choosenObject.name}{" "}
          {userDetailsRdx.choosenObject.first_surname}{" "}
          {userDetailsRdx.choosenObject.second_surname}
        </p>
      </div>
   
        <div className="profileContainerDesign">
          <div className="fieldDesign">
            <div className="detailDesign">Email:</div>
            <div className="detailDesign">
              {userDetailsRdx.choosenObject.email}
            </div>
          </div>

          <div className="fieldDesign">
            <div className="detailDesign">Address:
            </div>

            <div className="detailDesign">
              {userDetailsRdx.choosenObject.address}
            </div>
          </div>


          <div className="fieldDesign">
            <div className="detailDesign">Phone:</div>
            <div className="detailDesign">
              {userDetailsRdx.choosenObject.phone}
            </div>
          </div>
        </div>
      
    </Container>
  );
};
