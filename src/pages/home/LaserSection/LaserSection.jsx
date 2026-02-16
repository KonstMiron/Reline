import "./LaserSection.scss";
import leftImg from "@/shared/assets/images/laser-left.jpg";
import rightImg from "@/shared/assets/images/laser-right.jpg";
import map from "@/shared/assets/images/map.svg";
import { Button } from "@/shared/ui/Button";
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
              Precyzyjne i bezpieczne zabiegi wykonywane przy użyciu
              nowoczesnego lasera. Podczas procedury wykorzystywany jest
              system chłodzenia skóry CRYO, który redukuje ból i zwiększa
              komfort zabiegu.
            </p>
            <p>
              Usuwanie odbywa się bez naruszenia naskórka, bez uszkodzenia
              otaczających tkanek i bez blizn.
            </p>
          </div>

          <div className="laser__image laser__image--right">
            <img src={rightImg} alt="Sprzęt laserowy" />
          </div>
        </div>

        <div className="laser__cta">
          <Button onClick={() => console.log("clicked")}>
            SPRAWDŹ NASZĄ OFERTĘ !
          </Button>
        </div>
      </div>
    </section>
  );
};
export default LaserSection;