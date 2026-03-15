import { useEffect, useState } from "react";
import Header from "@/widgets/header";
import Header2 from "@/widgets/header2";
import HeaderMobile from "@/widgets/header-mobile";

const TABLET_BREAKPOINT = 1024;

const HeaderSwitcher = ({ variant = "inner" }) => {
  const [isTabletOrBelow, setIsTabletOrBelow] = useState(() =>
    window.innerWidth <= TABLET_BREAKPOINT
  );

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${TABLET_BREAKPOINT}px)`);
    const handleChange = (event) => setIsTabletOrBelow(event.matches);

    handleChange(media);
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  if (isTabletOrBelow) {
    return <HeaderMobile showBooksy={variant !== "home"} />;
  }

  if (variant === "home") {
    return <Header />;
  }

  return <Header2 />;
};

export default HeaderSwitcher;
