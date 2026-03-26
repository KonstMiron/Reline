import "./Hero.scss";
import logo from "@/shared/assets/images/logo.svg";
import logoHeader from "@/shared/assets/images/logo-header.svg";
import arrow from "@/shared/assets/images/arrow-hero.svg";
export const Hero = ({ hideTop = false }) => {
  return (
    <section className="hero">

      <div className="hero__content container">
        {!hideTop && (
          <div className="hero__top">
            <div >
              <img src={logo} className="hero__logo" alt="R'LINE Logo" />
            </div>

            <div className="hero__book">
              <p>Umów się na wizytę!</p>
              <a href="https://booksy.com/pl-pl/303971_reline-studio_tatuaz-i-piercing_6832_lublin?do=invite&_branch_match_id=1469312206242631988&utm_medium=profile_share_from_boost&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVtwgOyDULCzOtiEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAxHHrizwAAAA%3D" target="_blank" rel="noopener noreferrer" className="hero__book-link">
                BOOKSY <img src={arrow} className="hero__arrow" alt="R'LINE arrow" />
              </a>
            </div>
          </div>
        )} 

        {hideTop && (
          <div className="hero__tablet-brand" aria-hidden="true">
            <img src={logoHeader} alt="R'LINE" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;