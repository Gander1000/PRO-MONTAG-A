import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home_Date from "./Home_Date";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home_Date />} />{" "}
      <Route path="/Home_Date/*" element={<Home_Date />} />
    </Routes>
  );
}

export default App;
