import { Container, Card, Form, Button } from "react-bootstrap";

function AdminLogin() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title className="text-center mb-3">Admin Login</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="dark" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AdminLogin;
