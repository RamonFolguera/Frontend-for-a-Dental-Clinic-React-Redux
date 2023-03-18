import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  })

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
          console.log(credentials.password.length);
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
          console.log(decoded)
          let dataBackend = {
          token: userData.data.data,
          user: decoded
        }
        console.log(dataBackend)
      
        dispatch(login({credentials: dataBackend}));
        console.log( dispatch(login({credentials: dataBackend})))
      
      setWelcome(`Welcome back ${userData.name}`);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    })
    .catch((error) => console.log(error))


  }

  return (
    <div className="loginFormContainer">
      {welcome === "" ? (
        <>
          <InputTemplate
            type="email"
            name="email"
            placeholder="escribe un email"
            changeFunction={(e) => inputHandler(e)}
            validateFunction={(e) => inputValidate(e)}
          />
          <div>{credentialsError.emailError}</div>

          <InputTemplate
            type="password"
            name="password"
            placeholder="escribe un password"
            changeFunction={(e) => inputHandler(e)}
            validateFunction={(e) => inputValidate(e)}
          />
          <div>{credentialsError.passwordError}</div>
          <div className="buttonLoginDesign" onClick={() => loginFunction()}>
            Log me
          </div>
        </>
      ) : (
        <div>{welcome}</div>
      )}
    </div>
  );
};
