import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Body from "./Component/Body";
import Mee from "./Component/Mee";
import "./App.css";
import SignIn from "./Component/SignIn/SignIn";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="about" element={<Mee />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
