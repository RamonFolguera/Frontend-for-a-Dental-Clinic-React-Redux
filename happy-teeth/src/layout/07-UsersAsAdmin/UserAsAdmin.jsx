import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { bringUsers } from '../../services/apiCalls';
import { userData } from '../userSlice';


export const UserAsAdmin = () => {


  const [users, setUsers] = useState([]);

  const credentialsRdx = useSelector(userData)

  console.log(credentialsRdx)

  const dispatch = useDispatch();
  const navigate = useNavigate();

console.log(credentialsRdx.credentials.token)
console.log(credentialsRdx.credentials.user)



  useEffect(() => {

    if(users.length === 0){
      bringUsers(credentialsRdx.credentials.token)
        .then(
          result => {
            setUsers(result.data.data)
          }
        )
        .catch(error => console.log(error))
    }

  },[users])





  return (
    <div className="usersDesign">
hola
      { users.length > 0 ? 
      (<div>
        {
          users.map(
            user => {
              return (
                <div
                  key={user.id}>
                  {user.name}
                </div>
              )
            }
          )

        }  
        </div>)
        
        :

        (<div>ESTÁN VINIENDO</div>)
      
      }

    </div>
  )
}
