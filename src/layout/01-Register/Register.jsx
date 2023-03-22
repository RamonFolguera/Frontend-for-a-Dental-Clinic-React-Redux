import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { InputText } from "../../components/InputText/InputText";
import { validate } from "../../helpers/useful";
import { registerUser } from "../../services/apiCalls";
import "./Register.css";

export const Register = () => {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    first_surname: "",
    second_surname: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {

    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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

const userRegister = () => {

  registerUser(credentials)

  setWelcome(`Hi. Thank you for trusting in us!`);
  setTimeout(() => {
    navigate("/");
  }, 3000);

}

  return (
    <div className="registerBody">
      <div className="registerTitle w-100 text-center bg-dark text-white pt-3 pb-3">
      <h1>Register with Happy Teeth</h1>
      </div>
       {welcome === "" ? (
      <div className="registerContent">
        
        {/* <div className="registerInfo">
          HAPPY TEETH. DENTAL CLINIC
          <p>Plaza América, 5 . 46006 València america@idim.es</p>
          <p>How to get there by public transport</p>
          <p>Bus lines</p>
          <p>
            Pl. América – Conde Salvatierra: lines 1 – 4 – 10 América – Marqués
            del Turia: lines 25 – 47 – 95
          </p>
          <p>Underground</p>
          <p>Alameda or Colón stations</p>
          <p>Parking</p>
          <p>Paseo Alameda area (between 3pm and 4pm)</p>
          <p>Mercado de Colón parking lot</p>
        </div> */}
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

            {/* <Col md={3}
              className="formsRegulations"
              controlId="formGridRegulations"
            >
              <p className="regulationsLabel">
                To comply with data protection regulations (2018), we are unable
                to store and use your information unless you give us your
                permission. Please select Yes to allow this. View our data
                protection policy for details.*
              </p>
              <Form.Select
                className="regulationsInput"
                defaultValue="Please select"
              >
                <option>Please select</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Col> */}


            <div 
              type="submit"
              className={
                registerAct ? "registerSendDeac registerSendAct text-center" : "registerSendDeac text-center"
              }
              onClick={
                registerAct
                  ? () => {
                    userRegister();
                    <div>{welcome}</div>
                  }
                  : () => {}
              }
              >
              Submit
            </div>
          </Container>
        </div>
      </div>
         ) : (
          <div>{welcome}</div>
        )}
    </div>
  );
};
