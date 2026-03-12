import "./AboutSection.scss";
import aboutImg from "@/shared/assets/images/about.jpg";
import { Button } from "@/shared/ui/Button";

export const AboutSection = () => {
  return (
    <section className="about">
       <div className="container about__title">
            <div className=" title-layered">
                <span className="layer layer--shadow">SKIN & INK</span>
                <span className="layer layer--main">SKIN & INK</span>
            </div>
 
        </div>
      <div className="about__top-arc" />

      <div className="container about__inner">
       <div className="about__studio title-layered">
        <span className="layer layer--shadow layer--studio">STUDIO</span>
        <span className="layer layer--main layer--studio">STUDIO</span>
      </div> 

        <div className="about__content">
          <div className="about__text about__text--left">
            <p >
              Nazywam się <span className="about__name">ANASTASZJA</span> <br /> i jestem właścicielką studia
              <span className="about__name"> RE LINE</span> <br /> w Lublinie.
            </p>
            <p>
              Specjalizuję się w laserowym usuwaniu tatuaży i makijażu permanentnego,
              łącząc zaawansowaną technologię z indywidualnym podejściem do każdego klienta.
            </p>
            <p>
              Moim celem jest przywracanie naturalnego wyglądu skóry i poczucia pewności siebie.
            </p>
            <Button onClick={() => console.log("clicked")}
              className="about__button"
              >
              Umów się na WIZYTĘ!
            </Button>
          </div>

          <div className="about__photo">
            <img src={aboutImg} alt="Anastazja - właścicielka studia" />
          </div>

          <div className="about__text about__text--right">
            <p>
              Korzystam z nowoczesnego lasera stacjonarnego i systemu chłodzenia CRYO,
              dzięki którym zabiegi są bezpieczne, precyzyjne i komfortowe dla skóry.
            </p>
            <p>
              W RE LINE wierzę, że estetyka zaczyna się od harmonii. Tworzę miejsce, w którym
              nowoczesna technologia spotyka się z empatią i spokojem, a każda osoba może
              rozpocząć nowy etap – bez bólu, bez blizn, z pełnym zaufaniem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;