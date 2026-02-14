import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import BecomeADriver from "./Pages/BecomeADriver";
import AboutUs from "./Pages/AboutUs";
import Cabs from "./Pages/Cabs";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="App">
      
    <Header />
<Routes>
  <Route path="/" element={<Home/>} />
              <Route path="/about" element={<AboutUs/>} />

    <Route path="/login" element={<Login/>} />
     <Route path="/register" element={<Register/>} />
     <Route path="/terms" element={<TermsAndConditions/>} />
      <Route path="/privacy" element={<PrivacyPolicy/>} />
            <Route path="/becomeadriver" element={<BecomeADriver/>} />
      <Route path="/cabs" element={<Cabs/>} />
      <Route path="/services" element={<Services />} />




</Routes>
<Footer />
   
      
    </div>
  );
}

export default App;
