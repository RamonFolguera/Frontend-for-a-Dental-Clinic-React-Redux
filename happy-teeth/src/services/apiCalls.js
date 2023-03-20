import axios from "axios"

const root = 'http://localhost:3000/'



export const bringUsers = async (token) => {
    let config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };

    return await axios.get(`${root}users/admin`, config);
}

export const registerUser = async (body) => {

  return await axios.post(`${root}auth/register`, body)

}

export const logMe = async (body) => {

    return await axios.post(`${root}auth/login`, body)

}