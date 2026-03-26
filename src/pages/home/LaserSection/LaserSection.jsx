import "./LaserSection.scss";
import leftImg from "@/shared/assets/images/laser-left.jpg";
import rightImg from "@/shared/assets/images/laser-right.jpg";
import map from "@/shared/assets/images/map.svg";
import { Button2 } from "@/shared/ui/Button2";
import { Link } from "react-router-dom";
export const LaserSection = () => {
  return (
    <section className="laser">
      <div className="container laser__inner">
        <header className="laser__header">
          <h2 className="laser__title">LASEROWE USUWANIE</h2>
          <p className="laser__subtitle">tatuażu i makijażu permanentnego</p>
          <div className="laser__location">
            <img src={map} alt="map" />
            <span className="laser__location-text">LUBLIN</span>
          </div>
        </header> 

        <div className="laser__content">
          <div className="laser__image laser__image--left">
            <img src={leftImg} alt="Zabieg laserowy" />
          </div>
 
          <div className="laser__text">
            <p>
              Precyzyjne i bezpieczne zabiegi wykonywane przy użyciu nowoczesnego lasera. <br />
Podczas procedury wykorzystywany jest system chłodzenia skóry CRYO, który redukuje ból i zwiększa komfort zabiegu. <br />
              <span className="laser__desktop-tail">
                Usuwanie odbywa się bez naruszenia naskórka, bez uszkodzenia otaczających tkanek i bez blizn.
              </span>
            </p>
          </div>

          <div className="laser__text laser__text--bottom">
            <p>
              Usuwanie odbywa się bez naruszenia naskórka, bez uszkodzenia otaczających tkanek i bez blizn.
            </p>
          </div>

          <div className="laser__image laser__image--right">
            <img src={rightImg} alt="Sprzęt laserowy" />
          </div>
        </div>

        <div className="laser__cta">
           <Link to="/cennik">
          <Button2 onClick={() => console.log("clicked")}>
            <span className="laser__cta-text">SPRAWDŹ NASZĄ OFERTĘ !</span> 
          </Button2>
          </Link> 
        </div>
      </div>
    </section>
  );
};
export default LaserSection;