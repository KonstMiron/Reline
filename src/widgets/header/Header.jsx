import { useEffect, useState, useRef } from "react";
import "./Header.scss";
import logoHeader from "@/shared/assets/images/logo-header.svg";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      const rect = headerRef.current.getBoundingClientRect();

      setIsScrolled(rect.top <= 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClassName = isScrolled ? "header header--scrolled" : "header";

  return (
    <header ref={headerRef} className={headerClassName}>
      <div className="container header__content">
        <nav className="header__nav header__nav--left">
          <a href="#">STRONA GŁÓWNA</a>
          <a href="#">CENNIK</a>
        </nav>

        <div className="header__logo">
          <img src={logoHeader} alt="R'LINE Logo" />
        </div>

        <nav className="header__nav header__nav--right">
          <button className="header__dropdown">
            ZABIEGI <span className="header__caret">˄</span>
          </button>
          <a href="#">KONTAKT</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;