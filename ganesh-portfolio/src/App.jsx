import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import LayOut from "./components/home/layout";
import Home from "./pages/home/home";
import About from "./pages/home/about";
import Skills from "./pages/home/skils";
import Portfolio from "./pages/home/portfolio";
import Resume from "./pages/home/resume";

import Contact from "./pages/home/contact";
import Certificates from "./pages/home/certificate";


function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<LayOut />}>
        <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        
      </Routes>
    </div>
  );
}

export default App;
