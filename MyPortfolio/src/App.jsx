import Header from "./layout/header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Lab from "./Pages/lab";
import Footer from "./layout/footer";
function App() {
  return (
    <div className="bg-[#11071F] ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lab" element={<Lab />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
