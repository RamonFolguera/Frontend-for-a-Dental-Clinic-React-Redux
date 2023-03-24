import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { bringUsers } from '../../services/apiCalls';
import { userData } from '../userSlice';
import Spinner from 'react-bootstrap/Spinner';
import { addChoosen } from '../detailsSlice';


import './UsersAsAdmin.css'

export const UsersAsAdmin = () => {


  const [users, setUsers] = useState([]);

  const credentialsRdx = useSelector(userData)

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
console.log(users.length)
    if(users.length === 0){
      bringUsers(credentialsRdx.credentials.token)
        .then(
          result => {
            console.log(result)

            setUsers(result.data.data)
          }
        )
        .catch(error => console.log(error))
    }

  },[users])

  const selected = (user) => {
    
    dispatch(addChoosen({ choosenObject: user}))
    console.log(dispatch(addChoosen({ choosenObject: user})));
    
    setTimeout(() => {
      navigate('/user-profile-as-admin');
    }, 500)
  }





  return (
    <div className="usersDesign">
   
      { users.length > 0 ? 
      (<div className="cardsContainer">
        {
          users.map(
            user => {
              return (
          
                  <div
                    className= "userCardDesign"
                    onClick = {() => selected(user)}
                    key={user.id}>
                    {user.name}
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