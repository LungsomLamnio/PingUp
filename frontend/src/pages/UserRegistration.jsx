import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UserRegistrationPage() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4">
        <Card.Body>
          <Card.Title className="text-center mb-3">
            User Registration
          </Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Create a password" />
            </Form.Group>
            <Button variant="success" className="w-100 mb-2">
              Register
            </Button>
          </Form>
          <div className="text-center mt-2">
            <Button variant="link" onClick={() => navigate("/user-login")}>
              Already have an account? Login
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserRegistrationPage;
