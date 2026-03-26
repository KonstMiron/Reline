import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logoHeader from "@/shared/assets/images/logo-header.svg";
import arrowZabiegi from "@/shared/assets/images/arrow-zabiegi.svg";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Вважаємо хедер прокрученим, якщо проскролили більше ніж висоту Hero (90vh)
      const heroHeight = window.innerHeight * 0.9;
      setIsScrolled(scrollPosition > heroHeight - 100);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const headerClassName = isScrolled ? "header header--scrolled" : "header";

  return (
    <header className={headerClassName}>
      <div className="container header__content">
        <nav className="header__nav header__nav--left">
          <Link to="/">STRONA GŁÓWNA</Link>
          <Link to="/cennik">CENNIK</Link>
        </nav>

        <Link to="/" className="header__logo">
          <img src={logoHeader} alt="R'LINE Logo" />
        </Link>

        <nav className="header__nav header__nav--right">
          <div className="header__dropdown-wrapper" ref={dropdownRef}>
            <button className="header__dropdown" onClick={toggleDropdown}>
              ZABIEGI 
              <span className={`header__caret ${(isScrolled && !isDropdownOpen) || (!isScrolled && isDropdownOpen) ? 'header__caret--rotated' : ''}`}>
                <img src={arrowZabiegi} alt="Arrow" />
              </span>
            </button> 
            {isDropdownOpen && (
              <div className={`header__dropdown-menu ${isScrolled ? 'header__dropdown-menu--down' : 'header__dropdown-menu--up'}`}>
                <Link to="/laser-tattoo-removal" className="header__dropdown-item">
                  LASEROWE USUWANIE TATUAŻU
                </Link>
                <Link to="/laser-makijaz-permanent" className="header__dropdown-item">
                  LASEROWE USUWANIE MAKIJAŻU PERMANENTNEGO
                </Link>
                <Link to="/laser-makijaz-remover" className="header__dropdown-item">
                  USUWANIE MAKIJAŻU PERMANENTNEGO REMOVEREM
                </Link>
              </div>
            )}
          </div>
          <Link to="/contact">KONTAKT</Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;