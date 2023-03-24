import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bringAppointments, deleteMyAppointment } from '../../services/apiCalls';
import { addChoosenAppointment, appointmentData } from '../appointmentSlice';
import { userData } from '../userSlice';
import "./AppointmentsAsClient.css"

export const AppointmentsAsClient = () => {

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const credentialsRdx = useSelector(userData)
  console.log(credentialsRdx)

  const appoimentSelectedRdx = useSelector(appointmentData)

  let params = appoimentSelectedRdx.choosenAppointment.id 

  console.log(params);
  
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    if(appointments.length === 0){
      setTimeout(() => {
      
  
      bringAppointments(credentialsRdx.credentials.token)
        .then(
          result => {
            console.log(result.data.data)
            
            if(result.data.data.length === 0){
              return
            }

            setAppointments(result.data.data);
            setLoading(false);
          }

        )
        .catch(error => console.log(error))
      }, 500)
    }

  },[appointments])

  // const appointmentRdx = useSelector(appointmentData)
  console.log(appointments);
  const appointmentSelected = (appointment) => {
    dispatch(addChoosenAppointment({ choosenAppointment: appointment }))
    console.log(addChoosenAppointment({ choosenAppointment: appointment }))
    setTimeout(() => {
      navigate('/modify-appointment');
    }, 1000)
  }
  // console.log( appointments[0].id)



  const deleteApp =  async (appointment) =>{ 
    
    // if(appointments.length > 0) { 
    await deleteMyAppointment(  appointment.id,credentialsRdx.credentials.token)
    setAppointments(prevAppointments => prevAppointments.filter(a => a.id !== appointment.id));
    // setAppointments([])
    // }
    
}

  

if (loading) {
return <Spinner animation="border" variant="primary" />;
  
} else if (appointments.length > 0) {
  return(
    <div>AppointmentsAsClient
      
      <div className="cardsContainer">
        {
          appointments.map(
            appointment => {
              return (
                <div key={appointment.id}>
                  <div
                    onClick = {() => appointmentSelected(appointment)}
                    className= "userCardDesign"
                    >
                      <div>{appointment.date}</div>
                      <div> {appointment.id}</div>
                      <div> {appointment.Service.name}</div>
                    </div>
                    <div
                      onClick = {() => deleteApp(appointment)}
                      className= "deleteDesign"
                      >
                      Delete
                    </div>
                  </div>
              )
            }
          )
        }  
        </div>
        </div>
        )
} else {
return (
  <div>AppointmentsAsClient
    <div>No hay citas</div>
     
      </div>
)

}
        
   
  
}
