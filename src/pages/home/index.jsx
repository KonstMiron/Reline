import Hero from "./Hero";
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";
import LaserSection from "./LaserSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import InstagramSection from "./InstagramSection";
import { GallerySection } from "./GalerySection/GallerySection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Header />
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