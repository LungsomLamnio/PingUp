import { Routes, Route } from "react-router-dom";
import RolePage from "../src/pages/RolePage";
import UserLogin from "../src/pages/UserLogin";
import AdminLogin from "../src/pages/AdminLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RolePage />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/admin-login" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
