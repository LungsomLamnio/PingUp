import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4">
        <Card.Body>
          <Card.Title className="text-center mb-3">User Login</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="primary" className="w-100 mb-2">
              Login
            </Button>
          </Form>
          <div className="text-center mt-2">
            <Button variant="link" onClick={() => navigate("/forgot-password")}>
              Forgot Password?
            </Button>
          </div>
          <div className="text-center mt-2">
            <Button
              variant="link"
              onClick={() => navigate("/user-registration")}
            >
              Don't have an account?
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserLogin;
