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
    
    updateUserProfile(credentials, credentialsRdx.credentials.token);
  
    setTimeout(() => {
      navigate("/Profile");
    }, 3000);

  };


  return (

    <div className="d-flex justify-content-center defaultPageHeight">
    <div className="registerContent">
    <div className="w-100 text-center pt-3 pb-3">
            <h1>Update your profile</h1>
          </div>
   
          <div className="registerContainerDesign mb-5">

     
          <Container>
            <Row className="mb-3">
              <Col md={4} id="formGridName">
              <p className="mb-0 mt-3">Name</p>
                <InputText
                  className={
                    credentialsError.nameError === ""
                    ? "inputsDesignCommon inputBasicDesign"
                    : "inputsDesignCommon inputBasicDesign inputErrorDesign"
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
              <p className="mb-0 mt-3">First Surname</p>
                <InputText
                  className={
                    credentialsError.first_surnameError === ""
                    ? "inputsDesignCommon inputBasicDesign"
                    : "inputsDesignCommon inputBasicDesign inputErrorDesign"
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
              <p className="mb-0 mt-3">Second Surname</p>
                <InputText
               className={
                credentialsError.second_surnameError === ""
                  ? "inputsDesignCommon inputBasicDesign"
                  : "inputsDesignCommon inputBasicDesign inputErrorDesign"
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
            <Col sm={12} lg={6} id="formGridEmail">
            <p className="mb-0 mt-3">Email</p>
                <InputText 
                className={
                  credentialsError.emailError === ""
                  ? "inputsDesignCommon inputBasicDesign inputEmailDesign"
                  : "inputsDesignCommon inputBasicDesign inputErrorDesign inputEmailDesign"
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
              <Col sm={12} lg={6} id="formGridPassword">
                  <p className="mb-0 mt-3">Password</p>
                <InputText 
                className={
                  credentialsError.passwordError === ""
                  ? "inputsDesignCommon inputBasicDesign inputPasswordDesign"
                  : "inputsDesignCommon inputBasicDesign inputErrorDesign inputPasswordDesign"
              }
                type={"password"}
                name={"password"}
                required={true}
                placeholder="e.g. 123456789"
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div>{credentialsError.passwordError}</div>
              </Col>

        
            
             
            </Row>
            <Row>
            <Col sm={12} lg={6} id="formGridAddress">
                <p className="mb-0 mt-3">Address</p>
              <InputText
                className={
                  credentialsError.addressError === ""
                  ? "inputsDesignCommon inputBasicDesign inputAddressDesign"
                  : "inputsDesignCommon inputBasicDesign inputErrorDesign inputAddressDesign"
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

            <Col  id="formGridPhone">
                  <p className="mb-0 mt-3">Phone</p>
                <InputText
                  className={
                    credentialsError.phoneError === ""
                    ? "inputsDesignCommon inputBasicDesign"
                    : "inputsDesignCommon inputBasicDesign inputErrorDesign"
                }
                  type={"text"}
                  name={"phone"}
                  required={true}
                  placeholder="e.g. 666666666"
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div>{credentialsError.phoneError}</div>
              </Col>

              </Row>

              <Row className="d-flex justify-content-center">
              <div
                type="submit"
                className={
                  registerAct
                    ? "mt-3 buttonDesign registerSendAct text-center"
                    : "mt-3 buttonDesign text-center"
                }
                onClick={
                  registerAct
                    ? () => {
                      modifyUserProfile();

                      }
                    : () => {}
                }
              >
                Submit
              </div>
              </Row>



    </Container>
    </div>
      </div>
      </div>


  )
};
