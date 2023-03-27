import Moment from "moment";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputText } from "../../components/InputText/InputText";
import { updateAppointment } from "../../services/apiCalls";
import { appointmentData } from "../appointmentSlice";
import { userData } from "../userSlice";

export const ModifyAppointment = () => {
  const navigate = useNavigate();
  const credentialsRdx = useSelector(userData);
  const appoimentSelectedRdx = useSelector(appointmentData);

  let params = appoimentSelectedRdx.choosenAppointment.id;

  const [dataAppointment, setDataAppointment] = useState({
    id: params,
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
    setDataAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    
  };


  const [UpdateAppointmentAct, setUpdateAppointmentAct] = useState(false);
  const [valiInfoAppointment, setValiInfoAppointment] = useState({
    dateVali: false,
  });
  useEffect(() => {
    for (let empty in dataAppointment) {
      if (dataAppointment[empty] === "") {
        setUpdateAppointmentAct(false);
        return;
      }
    }

    for (let validated in valiInfoAppointment) {
      if (valiInfoAppointment[validated] === false) {
        setValiInfoAppointment(false);
        return;
      }
    }
    setUpdateAppointmentAct(true);
  });
  const checkError = (e) => {};

  const updateApp = () => {
    updateAppointment(
      params,
      dataAppointment,
      credentialsRdx.credentials.token
    );
    setTimeout(() => {
      navigate("/appointments-as-client");
    }, 500);
  };
  
  return (
    <div className="bookAppFormBody">
      <h2>Please, enter details to update</h2>
      <Container className="formBookApp">
        <Row className="mb-3  rowDesign">
          <Col md={12} id="formGridDate">
            <div className="d-flex flex-column">
              <p className="ps-1 nameFieldDesign mb-1">Date:</p>
              <p className="ps-1 nameFieldDesign mb-1">
                {Moment(appoimentSelectedRdx.choosenAppointment.date).format(
                  "DD/MM/YYYY HH:mm:ss"
                )}
              </p>
              <InputText
                type={"datetime-local"}
                name={"date"}
                required={true}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3  rowDesign">
          <Col md={12} id="formGridDate">
            <Form>
             
                <p className="ps-2 nameFieldDesign mb-1">Treatment:</p>
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
              
            </Form>
          </Col>
        </Row>
        <Row className="mb-3 w-100 d-flex justify-content-center">
          <Col md={4} id="formGridDate">
            <div
              type="submit"
              className={
                UpdateAppointmentAct
                  ? "registerSendDeac buttonDesign text-center"
                  : "registerSendDeac buttonDesign text-center"
              }
              onClick={
                UpdateAppointmentAct
                  ? () => {
                      updateApp();
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
