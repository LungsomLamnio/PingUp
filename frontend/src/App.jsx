import { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [message, setMessage] = useState("connecting....");

  useEffect(() => {
    API.get("/")
      .then((res) => setMessage(res.data))
      .catch(() => setMessage("Failed to connect with the backend..."));
  }, []);

  return (
    <div className="app">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
