import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home";
import LaserTattooRemoval from "@/pages/laser-tattoo-removal";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/laser-tattoo-removal" element={<LaserTattooRemoval />} />
      </Routes>
    </BrowserRouter>
  );
};