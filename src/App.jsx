import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import News from "./pages/News.jsx";
import Workshop from "./pages/Workshop.jsx";
import Qna from "./pages/Qna.jsx";

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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
