import Moment from "moment";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  bringAppointments,
  deleteMyAppointment,
} from "../../services/apiCalls";
import { addChoosenAppointment, appointmentData } from "../appointmentSlice";
import { userData } from "../userSlice";
import "./AppointmentsAsClient.css";

export const AppointmentsAsClient = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const credentialsRdx = useSelector(userData);

  const appoimentSelectedRdx = useSelector(appointmentData);

  let params = appoimentSelectedRdx.choosenAppointment.id;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (appointments.length === 0) {
      setTimeout(() => {
        bringAppointments(credentialsRdx.credentials.token)
          .then((result) => {
            setLoading(false);
            if (result.data.data.length === 0) {
              return;
            }
            setAppointments(result.data.data);
          })
          .catch((error) => console.log(error));
      }, 2000);
    }
  }, [appointments]);

  const appointmentSelected = (appointment) => {
    dispatch(addChoosenAppointment({ choosenAppointment: appointment }));
    setTimeout(() => {
      navigate("/modify-appointment");
    }, 1000);
  };

  const deleteApp = async (appointment) => {
    await deleteMyAppointment(appointment.id, credentialsRdx.credentials.token);
    setAppointments((prevAppointments) =>
      prevAppointments.filter((app) => app.id !== appointment.id)
    );
  };

  if (loading) {
    return (
      <div className="spinnerDesign d-flex justify-content-center align-items-center flex-column">
        <div>
          {" "}
          <Spinner animation="border" variant="primary" />
        </div>
        <div>
          {" "}
          <h4>Loading...</h4>
        </div>
      </div>
    );
  } else if (appointments.length > 0) {
    return (

       <div className="defaultPageHeight d-flex justify-content-center flex-column align-items-center flex-wrap">
        <h2 className="mt-4">Your appointments:</h2>

       
        <div className="cardsContainer  mb-4">
            {appointments.map((appointment) => {
              return (
              
                  <div key={appointment.id}
                  className="cardAppointmentsDesign">
                 
               <div className="d-flex justify-content-between flex-column align-items-start flex-wrap">
                  <div className="d-flex">
                        <p className="pe-4 nameFieldDesign">Date/time:</p>
                        <p>
                          {Moment(appointment.date).format(
                            "DD/MM/YYYY HH:mm:ss"
                          )}
                        </p>
                      </div >
                        {/* Treatment field */}
                      <div className="d-flex ">
                        <p className="pe-4 nameFieldDesign">Treatment:</p>
                        <p>{appointment.Service.name}</p>
                      </div>

                      <div className="d-flex ">
                        <p className="pe-4 nameFieldDesign">Doctor:</p>
                        <p>{appointment.Doctor.User.name} {appointment.Doctor.User.first_surname}</p>
                      </div>
                  </div>

                    {/* Buttons delete and update */}
                    <div className="d-flex justify-content-center ms-lg-5 me-lg-3 buttonsContainerDesign">
                      <div className="me-2 me-lg-4">
                        <div
                          onClick={() => deleteApp(appointment)}
                          className="buttonDesign"
                        >
                          Delete
                        </div>
                      </div>
                      <div>
                        <Link to="/modify-appointment" 
                        onClick={() => appointmentSelected(appointment)}
                        className="buttonDesign">
                          Update
                        </Link>
                      </div>
                    </div>
                    {/* Buttons delete and update */}
                    
              </div>
              );
            })}
            </div>
                  </div>
               
    );
  } else {
    return (
      <div className="noAppoDesign d-flex justify-content-center flex-column align-items-center">
        <h2 className="mb-4">Your appointments:</h2>
        <h4>You don't have any appointments.</h4>
        <div className="mt-5">
          <Link className="btnNoAppBookDesign me-4" to="/create-appointment">
            <p className="text-white buttonLogoutTextDesign">
              Book Appointment
            </p>
          </Link>
        </div>
      </div>
    );
  }
};
