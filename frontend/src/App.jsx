import { useEffect, useState } from "react";
import Nav from "./components/Home/Nav";
import Login from "./components/login-sistema/LoginSistema.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.text())
      .then((text) => setData(text));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    /* <h1>{data || "Loading..."}</h1> */
  );
}

export default App;
