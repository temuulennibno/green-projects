import { useContext } from "react";
import { ThemeContext } from "../App";

const SocialIcon = ({ icon, link }) => {
  const theme = useContext(ThemeContext);
  return (
    <a
      href={link}
      className={`social-icon ${theme}`}
      target="_blank"
      rel="noreferrer"
    >
      <i className={`fab fa-${icon}`}></i>
    </a>
  );
};
export default function Footer() {
  const socials = [
    { icon: "facebook", link: "https://www.facebook.com" },
    { icon: "twitter", link: "https://www.twitter.com" },
    { icon: "instagram", link: "https://www.instagram.com" },
  ];
  const theme = useContext(ThemeContext);
  return (
    <div className={`footer ${theme}`}>
      <ul>
        {socials.map((social, index) => {
          return (
            <li key={index}>
              <SocialIcon icon={social.icon} link={social.link} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
