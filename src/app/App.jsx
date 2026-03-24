import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "@/pages/home";
import LaserTattooRemoval from "@/pages/laser-tattoo-removal";
import LaserMakiPerm from "@/pages/laser-makijaz-permanent";
import LaserMakiRemover from "@/pages/laser-makijaz-remover";
import Contact from "@/pages/contact";
import Cennik from "@/pages/cennik";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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