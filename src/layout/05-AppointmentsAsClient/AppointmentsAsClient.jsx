import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bringAppointments } from '../../services/apiCalls';
import { userData } from '../userSlice';

export const AppointmentsAsClient = () => {

  const [appointment, setAppointment] = useState([]);

  const credentialsRdx = useSelector(userData)

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {

    if(appointment.length === 0){
      bringAppointments(credentialsRdx.credentials.token)
        .then(
          result => {
            console.log(result)
  
            setAppointment(result.data.data)
          }
        )
        .catch(error => console.log(error))
    }

  },[appointment])

  // const selected = (user) => {
    
  //   dispatch(addChoosen({ choosenOject: user}))
  //   console.log({ choosenOject: user})
  //   setTimeout(() => {
  //     navigate('/profile');
  //   }, 500)
  // }



  return (
    <div>AppointmentsAsClient


{ appointment.length > 0 ? 
      (<div className="cardsContainer">
        {
          appointment.map(
            info => {
              return (
          
                  <div
                    className= "userCardDesign"
                    key={info.id}>
                    {info.date}
                    Doctor: {info.Doctor.User.name}
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
