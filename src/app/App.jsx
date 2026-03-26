import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "@/pages/home";
import LaserTattooRemoval from "@/pages/laser-tattoo-removal";
import LaserMakiPerm from "@/pages/laser-makijaz-permanent";
import LaserMakiRemover from "@/pages/laser-makijaz-remover";
import Contact from "@/pages/contact";
import Cennik from "@/pages/cennik";
import PolitykaPrywatnosci from "@/pages/polityka-prywatnosci";
import RegulaminnUslug from "@/pages/regulamin-uslug";
import RegulaminnGabinetu from "@/pages/regulamin-gabinetu";
import ZasadyPlatnosci from "@/pages/zasady-platnosci";

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
        <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
        <Route path="/regulamin-uslug" element={<RegulaminnUslug />} />
        <Route path="/regulamin-gabinetu" element={<RegulaminnGabinetu />} />
        <Route path="/zasady-platnosci" element={<ZasadyPlatnosci />} />
      </Routes>
    </BrowserRouter>
  );
};