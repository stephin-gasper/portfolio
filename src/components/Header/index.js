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
  return (
    <header>
      <nav className={navStyles}>
        <Logo />
        <Navigation navigationLinks={navigationLinks} />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
