import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Body from "./Component/Body";
import Mee from "./Component/Mee";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="about" element={<Mee />} />
      </Routes>
    </div>
  );
};

export default App;
