import { Routes, Route } from "react-router-dom";
import RolePage from "../src/pages/RolePage";
import UserLogin from "../src/pages/UserLogin";
import AdminLogin from "../src/pages/AdminLogin";
import UserRegistration from "../src/pages/UserRegistration";
import ForgotPassword from "./pages/ForgotPasswordPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RolePage />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/user-registration" element={<UserRegistration />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
