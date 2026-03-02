import Home from "./Pages/home";
import Navbar from "./Section/Navbar/Navbar";

import Footer from "./Section/Footer/Footer";
import Privacy from "./Pages/privacy/Privacy";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {FloatingWhatsApp} from "react-floating-whatsapp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
      <Footer />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://api.whatsapp.com/send?phone=6285714257425&text=Halo%20Edo,%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20Grand%20Residence%20City%20https://Inforumahgrc.id/%20&fbclid=PAAaa7g9IJ-tB3RyMunLD6w_5ysqP4oI6PA2d9Ml7Isc1_OXjeOiGuAqu7Ap0">
        <FloatingWhatsApp />
      </a>
    </Router>
  );
}

export default App;
