import { Container, Card, Form, Button } from "react-bootstrap";

function UserLogin() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4">
        <Card.Body>
          <Card.Title className="text-center mb-3">User Login</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter username"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Enter password"
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserLogin;
