import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { detailsData } from "../detailsSlice";
import "./UserProfile.css";

export const UserProfile = () => {
  const userDetailsRdx = useSelector(detailsData);

  console.log(userDetailsRdx.choosenOject.name);

  return (
    <Container className="profileMainDesign">
      <Row></Row>
      <Row></Row>
      <div className="text-center">
        <p className="nameDesign">
     
          {userDetailsRdx.choosenOject.name}{" "}
          {userDetailsRdx.choosenOject.first_surname}{" "}
          {userDetailsRdx.choosenOject.second_surname}
        </p>
      </div>
   
        <div className="profileContainerDesign">
          <div className="fieldDesign">
            <div className="detailDesign">Email:</div>
            <div className="detailDesign">
              {userDetailsRdx.choosenOject.email}
            </div>
          </div>

          <div className="fieldDesign">
            <div className="detailDesign">Address:
            </div>

            <div className="detailDesign">
              {userDetailsRdx.choosenOject.address}
            </div>
          </div>


          <div className="fieldDesign">
            <div className="detailDesign">Phone:</div>
            <div className="detailDesign">
              {userDetailsRdx.choosenOject.phone}
            </div>
          </div>
        </div>
      
    </Container>
  );
};
