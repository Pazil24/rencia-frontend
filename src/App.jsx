import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PropertyListings from "./pages/PropertyListings";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import ContactUs from "./pages/ContactUs";




const App = () => {
  return <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutUs /> } />
    <Route path="/property-listings" element={<PropertyListings /> } />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/contact-us" element={<ContactUs />} />
  </Routes>
  </BrowserRouter>
}

export default App