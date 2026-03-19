import "./GallerySection.scss";
import galleryImg1 from "@/shared/assets/images/gallery/1.png";
import galleryImg2 from "@/shared/assets/images/gallery/2.png";
import galleryImg3 from "@/shared/assets/images/gallery/3.png";
import galleryImg4 from "@/shared/assets/images/gallery/4.png";
import galleryImg5 from "@/shared/assets/images/gallery/5.png";
import galleryImg6 from "@/shared/assets/images/gallery/6.png";
import galleryImg7 from "@/shared/assets/images/gallery/7.png";
import galleryImg8 from "@/shared/assets/images/gallery/8.png";
import galleryImg9 from "@/shared/assets/images/gallery/9.png";
import galleryImg10 from "@/shared/assets/images/gallery/10.png";
import galleryImg11 from "@/shared/assets/images/gallery/11.png";
import galleryImg12 from "@/shared/assets/images/gallery/12.png";
import { Button2 } from "@/shared/ui/Button2";

export const GallerySection = () => {
  const images = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
    galleryImg7,
    galleryImg8,
    galleryImg9,
    galleryImg10,
    galleryImg11,
    galleryImg12,
  ];

  const links = [
    "https://www.instagram.com/reline.studio.lbn/",
    "https://www.instagram.com/reline.studio.lbn/",
    "https://www.instagram.com/reline.studio.lbn/",
    "https://www.instagram.com/reline.studio.lbn/",
    "https://www.instagram.com/reline.studio.lbn/",
    "https://www.instagram.com/reline.studio.lbn/",
    "https://www.instagram.com/reline.studio.lbn/",
    "https://www.instagram.com/reline.studio.lbn/",
    "https://www.instagram.com/reline.studio.lbn/",
    "https://www.instagram.com/reline.studio.lbn/",
    "https://www.instagram.com/reline.studio.lbn/",
    "https://www.instagram.com/reline.studio.lbn/",
    "https://www.instagram.com/reline.studio.lbn/",
  ];

  return (
    <section className="gallery">
      <div className="container gallery__inner">
        <div className="gallery__grid">
          {images.map((img, index) => (
            <div key={index} className="gallery__item">
              <a href={links[index]} target="_blank" rel="noopener noreferrer">
                <img src={img} alt={`Gallery ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
        <div className="gallery__content">
            <h6 className="gallery__title">SPRAWDŹ DOSTĘPNE TERMINY</h6>
            <Button2 onClick={() => console.log("clicked")}
                className="gallery__button"
            >
                Zapisać się!
            </Button2>
        </div>
      </div>
    </section>
  );
};
 