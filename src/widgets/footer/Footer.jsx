import "./Footer.scss";
import logoHeader from "@/shared/assets/images/logo-header.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__main">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logoHeader} alt="R'LINE Logo" />
            </div>
            <address className="footer__address">
              <p>ul. Diamentowa 27A/U2, 20-471, Lublin</p>
              <p>
                <a href="tel:+48573811521">+48573811521</a>
              </p>
            </address>
            <p className="footer__tagline">
              Skuteczne i bezpieczne usuwanie tatuaży i makijażu permanentnego w
              Lublinie.
            </p>
          </div>

          <div className="footer__nav">
            <div className="footer__nav-column">
              <h3 className="footer__nav-title">MENU</h3>
              <ul className="footer__nav-list">
                <li>
                  <a href="#cennik">Cennik</a>
                </li>
                <li>
                  <a href="#kontakt">Kontakt</a>
                </li>
              </ul>
            </div>

            <div className="footer__nav-column">
              <h3 className="footer__nav-title">ZABIEGI</h3>
              <ul className="footer__nav-list">
                <li>
                  <a href="#laser-tattoo">Laserowe usuwanie tatuażu</a>
                </li>
                <li>
                  <a href="#laser-pmu">Laserowe usuwanie PMU</a>
                </li>
                <li>
                  <a href="#pmu-remover">Usuwanie PMU removerem</a>
                </li>
              </ul>
            </div>

            <div className="footer__nav-column">
              <h3 className="footer__nav-title">INNE</h3>
              <ul className="footer__nav-list">
                <li>
                  <a href="#polityka">Polityka Prywatności</a>
                </li>
                <li>
                  <a href="#regulamin">Regulamin usług</a>
                </li>
                <li>
                  <a href="#regulamin-gabinetu">Regulamin gabinetu</a>
                </li>
                <li>
                  <a href="#platnosci">Zasady płatności</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2025 RELINE Skin & Ink Studio. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
