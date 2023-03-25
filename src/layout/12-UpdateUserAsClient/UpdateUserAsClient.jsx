import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { InputText } from "../../components/InputText/InputText";
import { validate } from "../../helpers/useful";
import { updateUserProfile } from "../../services/apiCalls";
import { userData } from "../userSlice";

export const UpdateUserAsClient = () => {
  const [credentials, setCredentias] = useState({
    name: "",
    first_surname: "",
    second_surname: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setCredentias((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const credentialsRdx = useSelector(userData);
  const [valiCredentials, setValiCredentials] = useState({
    nameVali: false,
    first_surnameVali: false,
    second_surnameVali: false,
    phoneVali: false,
    addressVali: false,
    emailVali: false,
    passwordVali: false,
    
  })

  const [credentialsError, setCredentialsError] = useState({
    nameError: "",
    first_surnameError: "",
    second_surnameError: "",
    phoneError: "",
    addressError: "",
    emailError: "",
    passwordError: "",
  });

  const [registerAct, setRegisterAct] = useState(false);

  const [welcome, setWelcome] = useState("");
 

useEffect(() => {
  for(let error in credentialsError) {
    if(credentialsError[error] != "") {
      setRegisterAct(false);
      return;
    }
  }

  for(let empty in credentials){
    if(credentials[empty] === ""){
      setRegisterAct(false);
      return;
    }
  }

  for(let validated in valiCredentials) {
    if(valiCredentials[validated] === false) {
      setRegisterAct(false);
      return;
    }
  }
  setRegisterAct(true);
});

const checkError = (e) => {
  let error = "";

  let checked = validate(
    e.target.name,
    e.target.value,
    e.target.required
  );

  error = checked.message;
  console.log(error)

  console.log("aqui seteamos el hook de las validaciones", valiCredentials);

  setValiCredentials((prevState) => ({
    ...prevState,
    [e.target.name + "Vali"]: checked.validated,
  }));

  setCredentialsError((prevState) => ({
    ...prevState,
    [e.target.name + "Error"]: error,
  }));
};

  const modifyUserProfile = () => {
    console.log("entro en submit");  
    updateUserProfile(credentials, credentialsRdx.credentials.token);
    console.log(credentials);

  };


  return (

    <>

    <div className="registerBody">
      <div className="registerTitle w-100 text-center bg-dark text-white pt-3 pb-3">
      <h1>Register with Happy Teeth</h1>
      </div>
       {/* {welcome === "" ? ( */}
      <div className="registerContent">

        <div className="registerFormBox">
          <Container>
            <Row className="mb-3">
              <Col md={4} id="formGridName">
                <p>Name</p>
                <InputText
                  className={
                    credentialsError.nameError === ""
                      ? "inputBasicDesign"
                      
                      : "inputBasicDesign inputErrorDesign"
                  }
                  type={"text"}
                  name={"name"}
                  placeholder="Name"
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div>{credentialsError.nameError}</div>

              </Col>

              <Col md={4} id="formGridFirstSurname">
                <p>First Surname</p>
                <InputText
                  className={
                    credentialsError.first_surnameError === ""
                      ? "inputBasicDesign"
                      : "inputBasicDesign inputErrorDesign"
                  }
                  type={"text"}
                  name={"first_surname"}
                  required={true}
                  placeholder="First Surname"
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div>{credentialsError.first_surnameError}</div>
              </Col>

              <Col md={4} id="formGridSecondSurname">
                <p>Second Surname</p>
                <InputText
                  className={
                    credentialsError.second_surnameError === ""
                      ? "inputBasicDesign"
                      : "inputBasicDesign inputErrorDesign"
                  }
                  type={"text"}
                  name={"second_surname"}
                  required={true}
                  placeholder="Second Surname"
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div>{credentialsError.second_surnameError}</div>
              </Col>

              
            </Row>
            <Row className="mb-3">
            <Col md={4} id="formGridPhone">
                <p>Phone number</p>
                <InputText
                  className={
                    credentialsError.phoneError === ""
                      ? "inputBasicDesign"
                      : "inputBasicDesign inputErrorDesign"
                  }
                  type={"text"}
                  name={"phone"}
                  required={true}
                  placeholder="Phone number"
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div>{credentialsError.phoneError}</div>
              </Col>
              <Col md={4} id="formGridEmail">
                <p>Email address</p>
                <InputText 
                className={
                  credentialsError.emailError === ""
                    ? "inputBasicDesign inputEmailDesign"
                    : "inputBasicDesign inputErrorDesign inputEmailDesign"
                }
                type={"email"}
                name={"email"}
                required={true}
                placeholder="Email"
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div>{credentialsError.emailError}</div>
              </Col>

              <Col md={4} id="formGridPassword">
                <p>Password</p>
                <InputText 
                className={
                  credentialsError.passwordError === ""
                    ? "inputBasicDesign inputPasswordDesign"
                    : "inputBasicDesign inputErrorDesign inputPasswordDesign"
                }
                type={"password"}
                name={"password"}
                required={true}
                placeholder="Password"
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div>{credentialsError.passwordError}</div>
              </Col>
            </Row>

            <Col md={3} id="formGridAddress">
              <p>Address</p>
              <InputText
                className={
                credentialsError.addressError === ""
                  ? "inputBasicDesign inputAddressDesign"
                  : "inputBasicDesign inputErrorDesign inputAddressDesign"
              }
              type={"text"}
              name={"address"}
              required={true}
              placeholder="Address"
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => checkError(e)}
            />
            <div>{credentialsError.addressError}</div>
            </Col>





   


    <div
    // type="submit"
    // className={
    //   updateAppointmentAct
    //     ? "registerSendDeac registerSendAct text-center"
    //     : "registerSendDeac text-center"
    // }
    onClick={
      // updateAppointmentAct
        () => { 
            modifyUserProfile();
          
        //   }
        // : () => {}
    }}
  >
    Submit
  </div>
    </Container>
    </div>
      </div>
      </div>
</>

  )
};
