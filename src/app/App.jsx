import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home";
import LaserTattooRemoval from "@/pages/laser-tattoo-removal";
import LaserMakiPerm from "@/pages/laser-makijaz-permanent";
import LaserMakiRemover from "@/pages/laser-makijaz-remover";
import Contact from "@/pages/contact";
import Cennik from "@/pages/cennik";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/laser-tattoo-removal" element={<LaserTattooRemoval />} />
        <Route path="/laser-makijaz-permanent" element={<LaserMakiPerm />} />
        <Route path="/laser-makijaz-remover" element={<LaserMakiRemover />} />
        <Route path="/cennik" element={<Cennik />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};