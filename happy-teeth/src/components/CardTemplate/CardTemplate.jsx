import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const CardTemplate = () => {
  return (
    <>
      <Card border="primary" style={{ width: '18rem', margin: '1em' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>name</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

