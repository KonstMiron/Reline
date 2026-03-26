import "./AboutSection.scss";
import aboutImg from "@/shared/assets/images/about.jpg";
import { Button } from "@/shared/ui/Button";
import { Link } from "react-router-dom";
 
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
            <p className="about__intro about__intro--desktop">
              Nazywam się <span className="about__name">Anastaszja</span> <br /> i jestem właścicielką studia
              <span className="about__name"> RE LINE</span> <br /> w Lublinie.
            </p>
            <p className="about__intro about__intro--mobile">
              Nazywam się Anastaszja i jestem <br />  właścicielką studia RE LINE w Lublinie.
            </p>
            <p>
              Specjalizuję się w laserowym usuwaniu tatuaży i makijażu permanentnego,
              łącząc zaawansowaną technologię z indywidualnym podejściem do każdego klienta.
            </p>
            <p>
              Moim celem jest przywracanie naturalnego wyglądu skóry i poczucia pewności siebie.
            </p>
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

    <a href="https://booksy.com/pl-pl/303971_reline-studio_tatuaz-i-piercing_6832_lublin?do=invite&_branch_match_id=1469312206242631988&utm_medium=profile_share_from_boost&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVtwgOyDULCzOtiEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAxHHrizwAAAA%3D" target="_blank" rel="noopener noreferrer">
          
        <Button
          onClick={() => console.log("clicked")}
          className="about__button"
        >
          Umów się na WIZYTĘ!
        </Button>
        </a>
      </div>
    </section>
  );
};
export default AboutSection;