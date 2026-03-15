import { useEffect, useState } from "react";
import Hero from "./Hero";
import HeaderSwitcher from "@/widgets/header-switcher";
import HeaderMobile from "@/widgets/header-mobile";
import Footer from "@/widgets/footer";
import LaserSection from "./LaserSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import InstagramSection from "./InstagramSection";
import { GallerySection } from "./GalerySection/GallerySection";

const TABLET_BREAKPOINT = 1024;

const HomePage = () => {
  const [isTabletOrBelow, setIsTabletOrBelow] = useState(() =>
    window.innerWidth <= TABLET_BREAKPOINT
  );

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${TABLET_BREAKPOINT}px)`);
    const handleChange = (event) => setIsTabletOrBelow(event.matches);

    handleChange(media);
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <>
      {isTabletOrBelow && <HeaderMobile showBooksy={false} />}
      <Hero hideTop={isTabletOrBelow} />
      {!isTabletOrBelow && <HeaderSwitcher variant="home" />}
      <LaserSection />
      <AboutSection />
      <ServicesSection />
      <InstagramSection />
      <GallerySection />
      <Footer />
    </>
  );
};

export default HomePage;