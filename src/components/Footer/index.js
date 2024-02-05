import { css } from "@linaria/core";

import GithubIcon from "./GithubIcon";
import MailIcon from "./MailIcon";
import LinkedinIcon from "./LinkedinIcon";
import FooterLinks from "./FooterLinks";

const footerStyles = css`
  margin: 4rem 0;
  text-align: center;
`;

const navigationLinks = [
  {
    id: "github",
    href: "https://github.com/stephin-gasper",
    label: "Github",
    icon: GithubIcon,
  },
  {
    id: "mail",
    href: "mailto:stephingasper21@gmail.com",
    label: "Email",
    icon: MailIcon,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/stephin-gasper-a568b8102",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
];

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={footerStyles}>
      <FooterLinks navigationLinks={navigationLinks} />
      <small>&copy; {year} Stephin Gasper. All Rights Reserved.</small>
    </footer>
  );
};

export default Footer;
