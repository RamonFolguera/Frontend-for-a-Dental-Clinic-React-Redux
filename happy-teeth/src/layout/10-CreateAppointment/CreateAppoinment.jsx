import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { InputText } from "../../components/InputText/InputText";
import { bookAppointment } from "../../services/apiCalls";
import { userData } from "../userSlice";

export const CreateAppoinment = () => {

    const credentialsRdx = useSelector(userData);
console.log(credentialsRdx)
  const [infoAppointment, setInfoAppointment] = useState({
    date: "",
    // user_id: credentialsRdx.credentials.user.userId
    // service_id: 1,
    // doctor_id: 1

  });

  const inputHandler = (e) => {
    setInfoAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [valiInfoAppointment, setValiInfoAppointment] = useState({
    dateVali: false,
  });

  const [BookAppointmentAct, setBookAppointmentAct] = useState(false);

  useEffect(() => {
    for (let empty in infoAppointment) {
      if (infoAppointment[empty] === "") {
        setBookAppointmentAct(false);
        return;
      }
    }

    for (let validated in valiInfoAppointment) {
      if (valiInfoAppointment[validated] === false) {
        setValiInfoAppointment(false);
        return;
      }
    }
    setBookAppointmentAct(true);
  });
  const checkError = (e) => {};



    // if (credentialsRdx.credentials.token) {


  const bookApp = () => {
    
    bookAppointment(infoAppointment, credentialsRdx.credentials.token);
    console.log(infoAppointment);
  };

  return (
    <div className="registerFormBox">
      create appointment
      <Container>
        <Row className="mb-3">
          <Col md={6} id="formGridDate">
            <p>Date</p>
            <InputText
              //   className={
              //     credentialsError.nameError === ""
              //       ? "inputBasicDesign"

              //       : "inputBasicDesign inputErrorDesign"
              //   }
              type={"datetime-local"}
              name={"date"}
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => checkError(e)}
            />
            {/* <div>{credentialsError.nameError}</div> */}
          </Col>
        </Row>
        <div
          type="submit"
          className={
            BookAppointmentAct
              ? "registerSendDeac registerSendAct text-center"
              : "registerSendDeac text-center"
          }
          onClick={
            BookAppointmentAct
              ? () => {
                  bookApp();
                  <div>hola</div>;
                }
              : () => {}
          }
        >
          Submit
        </div>
      </Container>
    </div>
  );
};
