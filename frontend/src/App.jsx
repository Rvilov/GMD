import { useEffect, useState } from "react";
import Nav from "./components/Home/Nav";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.text())
      .then((text) => setData(text));
  }, []);

  return (
    <div>
      <Nav />
      {/* <h1>{data || "Loading..."}</h1> */}
    </div>
  );
}

export default App;
