import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";



const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutUs /> } />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/sign-in" element={<Signin />} />
  </Routes>
  </BrowserRouter>
}

export default App