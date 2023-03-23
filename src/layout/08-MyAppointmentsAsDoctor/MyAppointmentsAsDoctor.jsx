import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { bringMyAppointmentsAsDoctor } from '../../services/apiCalls';
import { userData } from '../userSlice';

export const MyAppointmentsAsDoctor = () => {
  
  const [appointments, setAppointments] = useState([]);

  const credentialsRdx = useSelector(userData)
  
  useEffect(() => {
  if(appointments.length === 0){
    bringMyAppointmentsAsDoctor(credentialsRdx.credentials.token)
      .then(
        result => {
          console.log(result.data.data)
          
          setAppointments(result.data.data)
        }
      )
      .catch(error => console.log(error))
  }

},[appointments])
  
  
  
  
  
  return (
    <div>My appointments as doctor

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
