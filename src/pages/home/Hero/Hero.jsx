import "./Hero.scss";
import logo from "@/shared/assets/images/logo.svg";
import arrow from "@/shared/assets/images/arrow-hero.svg";
export const Hero = () => {
  return (
    <section className="hero">

      <div className="hero__content container">
        <div className="hero__top">
          <div >
            <img src={logo} className="hero__logo" alt="R'LINE Logo" />
          </div>

          <div className="hero__book">
            <p>Umów się na wizytę!</p>
            <a href="#" className="hero__book-link">
              BOOKSY <img src={arrow} className="hero__arrow" alt="R'LINE arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;