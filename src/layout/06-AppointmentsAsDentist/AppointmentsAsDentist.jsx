import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bringAllAppointmentsAsDoctor } from '../../services/apiCalls';
import { userData } from '../userSlice';

export const AppointmentsAsDentist = () => {

    const [allAppointments, setAllAppointments] = useState([]);

  const credentialsRdx = useSelector(userData)
  console.log(credentialsRdx)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    if(allAppointments.length === 0){
      bringAllAppointmentsAsDoctor(credentialsRdx.credentials.token)
        .then(
          result => {
            console.log(result.data.data)
            
  
            setAllAppointments(result.data.data)
          }
        )
        .catch(error => console.log(error))
    }

  },[allAppointments])

  // const appointmentRdx = useSelector(appointmentData)
  console.log(allAppointments);
  // const appointmentSelected = (appointment) => {

  //   dispatch(addChoosenAppointment({ choosenAppointment: appointment }))
  //   console.log({ choosenAppointment: appointment})
  //   setTimeout(() => {
  //     navigate('/modify-appointment');
  //   }, 500)
  
  // }

  return (

    <div>AppointmentsAsClient

      { allAppointments.length > 0 ? 
            (<div className="cardsContainer">
              {
                allAppointments.map(
                  appointment => {
                    return (
                        <div
                          className= "userCardDesign"
                          key={appointment.id}>
                            <div>{appointment.date}</div>
                            <div> {appointment.id}</div>
                            <div> {appointment.Service.name}</div>
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

  

