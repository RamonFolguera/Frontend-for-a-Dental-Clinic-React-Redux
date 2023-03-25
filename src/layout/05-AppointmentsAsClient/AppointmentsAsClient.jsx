import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
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
            console.log(result.data.data);
            setLoading(false);

            if (result.data.data.length === 0) {
              return;
            }
            setAppointments(result.data.data);
          })
          .catch((error) => console.log(error));
      }, 1000);
    }
  }, [appointments]);

  // const appointmentRdx = useSelector(appointmentData)
  console.log(appointments);
  const appointmentSelected = (appointment) => {
    dispatch(addChoosenAppointment({ choosenAppointment: appointment }));
    console.log(addChoosenAppointment({ choosenAppointment: appointment }));
    setTimeout(() => {
      navigate("/modify-appointment");
    }, 1000);
  };

  const deleteApp = async (appointment) => {
    await deleteMyAppointment(appointment.id, credentialsRdx.credentials.token);
    setAppointments((prevAppointments) =>
      prevAppointments.filter((app) => app.id !== appointment.id)
    );
    // setAppointments([])
  };

  if (loading) {
    return (
      <div className="spinnerDesign d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="primary" />
        <h4>Loading...</h4>
      </div>
    );
  } else if (appointments.length > 0) {
    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h2>Your appointments:</h2>

        <div className="cardsContainer">
          {appointments.map((appointment) => {
            return (
              <div key={appointment.id}>
                <div
                  onClick={() => appointmentSelected(appointment)}
                  className="userCardDesign"
                >
                  <div>{appointment.date}</div>
                  <div className="d-flex">
                    <p className="pe-4 nameFieldDesign">Treatment:</p>
                    <p>{appointment.Service.name}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-end ms-5 me-3 buttonsContainerDesign">
                  <div className="me-4">
                    <div
                      onClick={() => deleteApp(appointment)}
                      className="buttonDesign"
                    >
                      Delete
                    </div>
                  </div>
                  <div>
                    <Link to="/modify-appointment" className="buttonDesign">
                      Update
                    </Link>
                  </div>
                </div>
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
