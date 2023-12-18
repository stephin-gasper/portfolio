import { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

import { navStyles } from "./Header.style";

const navigationLinks = [
  {
    id: "1",
    href: "/",
    label: "Works",
  },
  {
    id: "2",
    href: "https://github.com/stephin-gasper",
    label: "Github",
    isExternal: true,
  },
];

const Header = () => {
  const [currentTheme, setCurrentTheme] = useState("");

  return (
    <header>
      <nav className={navStyles}>
        <Logo currentTheme={currentTheme} />
        <Navigation navigationLinks={navigationLinks} />
        <ThemeToggle setCurrentTheme={setCurrentTheme} />
      </nav>
    </header>
  );
};

export default Header;
