import { useNavigate } from "react-router-dom";

function RolePage() {
  const navigate = useNavigate();

  return (
    <div className="role-page">
      <h2>Select your role</h2>
      <button onClick={() => navigate("/user-login")}>User</button>
      <button onClick={() => navigate("/admin-login")}>Admin</button>
    </div>
  );
}

export default RolePage;
