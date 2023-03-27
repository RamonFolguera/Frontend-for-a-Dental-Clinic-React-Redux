import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputTemplate } from "../../components/InputTemplate/InputTemplate";
import { logMe } from "../../services/apiCalls";
import "./Login.css";

import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../userSlice";

import { decodeToken } from "react-jwt";


export const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();  //Instanciamos modo escritura Redux
  const credentialsRdx = useSelector(userData); //Instanciamos modo lecutura Redux
  
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [credentialsError, setCredentialsError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    if (credentialsRdx.credentials.token) {
      navigate("/");
    }
  },[]);

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const inputValidate = (e) => {
    switch (e.target.name) {
      case "email":
        break;

      case "password": 
        if (credentials.password.length < 6) {


          setCredentialsError((prevState) => ({
            ...prevState,
            passwordError:
              "You must enter a password with minimum 6 characters",
          }));
        } else {
          setCredentialsError((prevState) => ({
            ...prevState,
            passwordError: "",
          }));
        }
        break;

      default:
        console.log("default");
    }
  };
  

  const loginFunction = () => {
   
    logMe(credentials)
    .then((userData) => {
          let decoded = decodeToken(userData.data.data)
          let dataBackend = {
          token: userData.data.data,
          user: decoded
        }
      
      dispatch(login({credentials: dataBackend}));      
      
      setWelcome(`Welcome back ${dataBackend.user.name}`);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  )
    .catch((error) => console.log(error))
  }

  return (
    <>
    {welcome === "" ? (
      <>
    <div className="loginFormBody">
      <h1 className="greetingMsgDesign">Good to see you again</h1>
      <h2 className="loginMsgDesign">Sign in to continue</h2>
      
<div className="loginFormContainer">
      
       
        <div>Your email</div>
          <InputTemplate
            type="email"
            name="email"
            placeholder="e.g. elon@tesla.com"
            changeFunction={(e) => inputHandler(e)}
            validateFunction={(e) => inputValidate(e)}
          />
          <div>{credentialsError.emailError}</div>
          <div>Your password</div>

          <InputTemplate
            type="password"
            name="password"
            placeholder="e.g. 123456"
            changeFunction={(e) => inputHandler(e)}
            validateFunction={(e) => inputValidate(e)}
          />
          <div>{credentialsError.passwordError}</div>
          <div className=" d-flex justify-content-center">
          <div className="buttonDesign" onClick={() => loginFunction()}>
            Log me
          </div>
          </div>
          <Link to='/register'>Don't have an account?</Link>
          </div>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center welcomeMsgContainerDesign">
        <h1 className="welcomeMsgDesign">{welcome}</h1>
        </div>
      )}
  
    <img className="toothImgDesign" src="../../img/Diseño sin título.png" alt=""></img>
   
    </>
  );
};
