import { css } from "@linaria/core";

import FooterLinks from "./FooterLinks";

const footerStyles = css`
  margin: 4rem 0;
  text-align: center;
`;

const copyStyles = css`
  font-family: var(--font-secondary);
`;

const navigationLinks = [
  {
    id: "github",
    href: "https://github.com/stephin-gasper",
    label: "Github",
  },
  {
    id: "mail",
    href: "mailto:stephingasper21@gmail.com",
    label: "Email",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/stephin-gasper-a568b8102",
    label: "LinkedIn",
  },
];

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={footerStyles}>
      <FooterLinks navigationLinks={navigationLinks} />
      <small className={copyStyles}>
        &copy; {year} Stephin Gasper. All Rights Reserved.
      </small>
    </footer>
  );
};

export default Footer;
