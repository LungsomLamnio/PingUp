import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4">
        <Card.Body>
          <Card.Title className="text-center mb-3">Forgot Password</Card.Title>
          <p className="text-center text-muted">
            Enter your email to receive a password reset link.
          </p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Button variant="primary" className="w-100 mb-2">
              Send Reset Link
            </Button>
          </Form>
          <div className="text-center mt-2">
            <Button variant="link" onClick={() => navigate("/user-login")}>
              Back to Login
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ForgotPasswordPage;
