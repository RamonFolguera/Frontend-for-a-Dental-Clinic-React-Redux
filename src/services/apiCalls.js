import axios from "axios"

const root = 'https://rfc-jaoa-gh-fsd-val-project4-production.up.railway.app/'

export const bringUsers = async (token) => {
    let config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };
    return await axios.get(`${root}users/admin`, config);
}

export const bringAppointments = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
  return await axios.get(`${root}appointments/user`, config);
}

export const registerUser = async (body) => {

  return await axios.post(`${root}auth/register`, body)

}

export const logMe = async (body) => {

    return await axios.post(`${root}auth/login`, body)

}

export const bookAppointment = async (body, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
  return await axios.post(`${root}appointments`, body, config )
}

export const updateAppointment = async (id, body, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
  return await axios.put(`${root}appointments/${id}`, body, config )
}