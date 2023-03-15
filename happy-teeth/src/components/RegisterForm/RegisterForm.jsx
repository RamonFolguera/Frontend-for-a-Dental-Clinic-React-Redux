import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './RegisterForm.css'

export const RegisterForm = () => {
  return (
    <Form>
          <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridMobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control placeholder="Mobile" />
      </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Abbey Road, London, UK" />
      </Form.Group>

      

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Row>

      <Form.Group as={Col} className="formsRegulations" controlId="formGridRegulations">
          <Form.Label className='regulationsLabel'>To comply with data protection regulations (2018), we are unable to store and use your information unless you give us your permission. Please select Yes to allow this. View our data protection policy for details.*</Form.Label>
          <Form.Select className='regulationsInput' defaultValue="Please select">
            <option>Please select</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Select>
        </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

