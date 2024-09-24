import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Navbar from "./components/Navbar/Navbar";
// import CarouselBootstrap from "./components/CarouselBootstrap/CarouselBootstrap"
import NavbarBootstrap from "./components/NavbarBootstrap/NavbarBootstrap";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";

function App() {
  return (
    <div className="Apps">
      <BrowserRouter>
      {/* <Navbar /> */}
      <NavbarBootstrap />
      <Routes>
        {/* <Route path="/" element={<CarouselBootstrap />} /> */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
