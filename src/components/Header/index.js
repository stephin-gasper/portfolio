import { useState } from "react";
import { css } from "@linaria/core";

import { media } from "@/styles/breakpoints";

import Logo from "./Logo";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

const navStyles = css`
  align-items: center;
  display: grid;
  gap: 0.625rem 1.25rem;
  grid-template-columns: repeat(3, min-content);
  grid-template-rows: auto auto;
  justify-content: center;
  margin-top: 1.25rem;
  ${media.sm} {
    grid-template-columns: 1fr repeat(2, min-content);
    grid-template-rows: 1fr;
    justify-content: start;
  }
`;

const navigationLinks = [
  {
    id: "1",
    href: "/works",
    label: "Works",
  },
  {
    id: "2",
    href: "/resume",
    label: "Resume",
  },
  {
    id: "3",
    href: "https://github.com/stephin-gasper",
    label: "Github",
    isExternal: true,
  },
];

const Header = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");

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
