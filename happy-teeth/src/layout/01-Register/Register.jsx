import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FormControl } from "../../components/Form.Control/FormControl";
import "./Register.css";

export const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    address: "",
    message: "",
  });

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const inputValidate = () => {};

  return (
    <div className="registerBody">
      <div className="registerContent">
        <div className="registerInfo">
          IDIM. DENTAL CLINIC
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
        </div>
        <div className="registerFormBox">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <FormControl
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  changeFunction={(e) => inputHandler(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <FormControl
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  changeFunction={(e) => inputHandler(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridMobile">
                <Form.Label>Mobile</Form.Label>
                <FormControl
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  changeFunction={(e) => inputHandler(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email address</Form.Label>
                <FormControl 
                type="email" 
                name="email" 
                placeholder="Email"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)} 
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <FormControl 
                type="password"
                name="password"  
                placeholder="Password" 
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)} 
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <FormControl 
              type="text"
              name="address"  
              placeholder="Abbey Road, London, UK" 
              changeFunction={(e) => inputHandler(e)}
              validateFunction={(e) => inputValidate(e)}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGridMessage">
                <Form.Label>Message</Form.Label>
                <FormControl 
                as="textarea" 
                rows={3} 
                type="text"
                name="message"  
                placeholder="Message" 
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
                />
              </Form.Group>
            </Row>

            <Form.Group
              as={Col}
              className="formsRegulations"
              controlId="formGridRegulations"
            >
              <Form.Label className="regulationsLabel">
                To comply with data protection regulations (2018), we are unable
                to store and use your information unless you give us your
                permission. Please select Yes to allow this. View our data
                protection policy for details.*
              </Form.Label>
              <Form.Select
                className="regulationsInput"
                defaultValue="Please select"
              >
                <option>Please select</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
