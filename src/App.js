import { Route, Routes } from "react-router-dom";
import BloodSignup from "./Components/BloodSignup/BloodSignup";
import BloodLogin from "./Components/BloodLogin/BloodLogin";
import Home from "./Components/Home/Home.jsx";
import Question from "./Components/Question/Question";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/wateen" element={<Home />}/>
        <Route path="/blood-signup" element={<BloodSignup />}/>
        <Route path="/blood-login" element={<BloodLogin />}/>
        <Route path="/questions" element={<Question />}/>
        <Route path="*" element={<Question />}/>
      </Routes>
    </div>
  );
}

export default App;
