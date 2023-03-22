import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bringAppointments } from '../../services/apiCalls';
import { addChoosenAppointment } from '../appointmentSlice';
import { userData } from '../userSlice';

export const AppointmentsAsClient = () => {

  const [appointments, setAppointments] = useState([]);

  const credentialsRdx = useSelector(userData)
  console.log(credentialsRdx)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    if(appointments.length === 0){
      bringAppointments(credentialsRdx.credentials.token)
        .then(
          result => {
            console.log(result.data.data)
            
  
            setAppointments(result.data.data)
          }
        )
        .catch(error => console.log(error))
    }

  },[appointments])

  // const appointmentRdx = useSelector(appointmentData)
  console.log(appointments);
  const appointmentSelected = (appointment) => {

    dispatch(addChoosenAppointment({ choosenAppointment: appointment }))
    console.log({ choosenAppointment: appointment})
    setTimeout(() => {
      navigate('/modify-appointment');
    }, 500)
  
  }

  return (
    <div>AppointmentsAsClient

{ appointments.length > 0 ? 
      (<div className="cardsContainer">
        {
          appointments.map(
            appointment => {
              return (
                  <div
                    onClick = {() => appointmentSelected(appointment)}
                    className= "userCardDesign"
                    key={appointment.id}>
                      <div>{appointment.date}</div>
                      <div> {appointment.id}</div>
                      <div> {appointment.Service.name}</div>
                    
                   
                
                    {/* {appointment.Doctor} */}
                  </div>
              )
            }
          )

        }  
        </div>)
        
        :

        ( <Spinner animation="border" variant="primary" />)
      
      }
    </div>
  )
}
