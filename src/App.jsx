import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import News from "./pages/News.jsx";
import Workshop from "./pages/Workshop.jsx";
import Qna from "./pages/Qna.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f9f9ff]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/news" element={<News />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/qna" element={<Qna />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
