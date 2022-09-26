import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/Footer";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Gallery from "./components/gallery/Gallery";
import Service from "./components/service/Service";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
