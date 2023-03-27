import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputText } from "../../components/InputText/InputText";
import { bookAppointment } from "../../services/apiCalls";
import { userData } from "../userSlice";
import "./CreateAppointment.css";

export const CreateAppoinment = () => {
  const navigate = useNavigate();

  const credentialsRdx = useSelector(userData);
  const [infoAppointment, setInfoAppointment] = useState({
    date: "",
    service_id: "",
    doctor_id: "",
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

  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Ramón Folguera Carbonell",
    },
    {
      id: 2,
      name: "Amparo Martínez López",
    },
  ]);

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

  const bookApp = () => {
    bookAppointment(infoAppointment, credentialsRdx.credentials.token);
    setTimeout(() => {
      navigate("/appointments-as-client");
    }, 500);
  };

  return (
    <Container className="formBookApp defaultPageHeight mt-5 mb-5">
      <Row className="mb-3 rowDesign">
        <Col id="formGridDate">
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

      <Row className="mb-3">
        <Col id="formGridDate">
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
            <Form.Group className="mb-3">
              <p className="pe-4 nameFieldDesign">Doctor:</p>
              <Form.Select
                name={"doctor_id"}
                onChange={(e) => inputHandler(e)}
                aria-label="Default select example"
              >
                <option>Choose your doctor:</option>

                {doctors.map((doctor) => {
                  return (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="mb-3  d-flex justify-content-center">
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
                }
              : () => {}
          }
        >
          Submit
        </div>
      </Row>
    </Container>
  );
};
