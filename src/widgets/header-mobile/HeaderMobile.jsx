import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderMobile.scss";
import logoBlack from "@/shared/assets/images/logo.svg";
import logoWhite from "@/shared/assets/images/logo-header.svg";

const HeaderMobile = ({ showBooksy = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsTreatmentsOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleTreatments = () => setIsTreatmentsOpen((prev) => !prev);

  return (
    <header className="header-mobile">
      <div className="container header-mobile__bar">
        <Link to="/" className="header-mobile__logo" onClick={closeMenu}>
          <img src={logoBlack} alt="R'LINE Logo" />
        </Link>

        <button
          className={`header-mobile__toggle ${isMenuOpen ? "header-mobile__toggle--open" : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`header-mobile__panel ${isMenuOpen ? "header-mobile__panel--open" : ""}`}>
        <div className="container header-mobile__panel-inner">
          <div className="header-mobile__panel-head">
            <Link to="/" className="header-mobile__logo" onClick={closeMenu}>
              <img src={logoWhite} alt="R'LINE Logo" />
            </Link>

            <button className="header-mobile__close" onClick={closeMenu} aria-label="Close menu">
              <span />
              <span />
            </button>
          </div>

          <nav className="header-mobile__nav">
            <Link to="/" onClick={closeMenu}>STRONA GLOWNA</Link>
            <a href="#" onClick={closeMenu}>CENNIK</a>

            <button className="header-mobile__accordion" onClick={toggleTreatments}>
              ZABIEGI
              <span className={`header-mobile__arrow ${isTreatmentsOpen ? "header-mobile__arrow--open" : ""}`}>
                ^
              </span>
            </button>

            {isTreatmentsOpen && (
              <div className="header-mobile__submenu">
                <Link to="/laser-makijaz-remover" onClick={closeMenu}>
                  USUWANIE MAKIJAZU PERMANENTNEGO REMOVEREM
                </Link>
                <Link to="/laser-makijaz-permanent" onClick={closeMenu}>
                  LASEROWE USUWANIE MAKIJAZU PERMANENTNEGO
                </Link>
                <Link to="/laser-tattoo-removal" onClick={closeMenu}>
                  LASEROWE USUWANIE TATUAZU
                </Link>
              </div>
            )}

            <Link to="/contact" onClick={closeMenu}>KONTAKT</Link>
            {showBooksy && <a href="#" onClick={closeMenu}>BOOKSY</a>}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
