import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { InputText } from "../../components/InputText/InputText";
import { bookAppointment } from "../../services/apiCalls";
import { userData } from "../userSlice";
import "./CreateAppointment.css";

export const CreateAppoinment = () => {
  const credentialsRdx = useSelector(userData);
  console.log(credentialsRdx);
  const [infoAppointment, setInfoAppointment] = useState({
    date: "",
    // user_id: credentialsRdx.credentials.user.userId
    service_id: "",
    // doctor_id: 1
  });

  const [services, setServices] = useState([
    {
      id: 1,
      name: "Scale and polish",
    },
    {
      id: 2,
      name: "White fillings",
    },
    {
      id: 3,
      name: "Root canal treatment (endodontics)",
    },
  ]);

  const inputHandler = (e) => {
    setInfoAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(infoAppointment);
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
    <div className="bookAppFormBody">
      <h2>Please, enter your appointment details</h2>
      <Container className="formBookApp">
        <Row className="mb-3 rowDesign">
          <Col md={12} id="formGridDate">
            <div className="d-flex flex-column">
              <p className="pe-4 nameFieldDesign">Date:</p>
              <InputText
                className="dateInputDesign"
                type={"datetime-local"}
                name={"date"}
                required={true}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
            </div>
          </Col>
        </Row>

        <Row className="mb-3 w-100">
          <Col md={12} id="formGridDate">
            <Form>
              <Form.Group className="mb-3">
                <p className="pe-4 nameFieldDesign">Treatment:</p>
                <Form.Select
                  name={"service_id"}
                  onChange={(e) => inputHandler(e)}
                  aria-label="Default select example"
                >
                  
                  <option>Choose your treatment:</option>

                  {services.map((service) => {
                    return (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="mb-3 w-100 d-flex justify-content-center">
        <Col md={4} id="formGridDate">
        <div
          type="submit"
          className={
            BookAppointmentAct
              ? "registerSendDeac buttonDesign text-center"
              : "registerSendDeac buttonDesign text-center"
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
        </Col>
        </Row>
      </Container>
    </div>
  );
};
