import { useNavigate } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";

function RolePage() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="p-4 shadow-lg"
        style={{ width: "22rem", textAlign: "center" }}
      >
        <Card.Body>
          <Card.Title className="mb-3">Select Your Role</Card.Title>
          <div className="d-flex flex-column gap-3">
            <Button variant="primary" onClick={() => navigate("/user-login")}>
              User
            </Button>
            <Button variant="dark" onClick={() => navigate("/admin-login")}>
              Admin
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RolePage;
