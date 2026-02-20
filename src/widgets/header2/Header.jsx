import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logoHeader from "@/shared/assets/images/logo-header.svg";
import arrowZabiegi from "@/shared/assets/images/arrow-zabiegi.svg";

export const Header2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <header className="header2">
      <div className="container header2__content">
        <nav className="header2__nav header2__nav--left">
          <Link to="/">STRONA GŁÓWNA</Link>
          <a href="#">CENNIK</a>
        </nav>

        <Link to="/" className="header2__logo">
          <img src={logoHeader} alt="R'LINE Logo" />
        </Link>

        <nav className="header2__nav header2__nav--right">
          <div className="header2__dropdown-wrapper" ref={dropdownRef}>
            <button className="header2__dropdown" onClick={toggleDropdown}>
              ZABIEGI 
              <span className={`header2__caret header2__caret--default ${isDropdownOpen ? 'header2__caret--rotated' : ''}`}>
                <img src={arrowZabiegi} alt="Arrow" />
              </span>
            </button>
            {isDropdownOpen && (
              <div className="header2__dropdown-menu header2__dropdown-menu--down">
                <a href="#" className="header2__dropdown-item">
                  USUWANIE MAKIJAŻU PERMANENTNEGO REMOVEREM
                </a>
                <a href="#" className="header2__dropdown-item">
                  LASEROWE USUWANIE MAKIJAŻU PERMANENTNEGO
                </a>
                <Link to="/laser-tattoo-removal" className="header2__dropdown-item">
                  LASEROWE USUWANIE TATUAŻU
                </Link>
              </div>
            )}
          </div>
          <a href="#">KONTAKT</a>
          <a href="#">BOOKSY</a>
        </nav>
      </div>
    </header>
  );
};
export default Header2;