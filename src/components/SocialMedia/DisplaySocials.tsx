import React from "react";
import { socialMediaLinks } from './socialMediaLinks'

const DisplaySocials: React.FC = () => {
  return (
    <>
      {socialMediaLinks.map((link, i) => {
        return (
          <a
            key={i}
            href={link.href}
            aria-label={link.aria}
            target="_blank"
            rel="noreferrer"
          >
            <i className={link.tag}></i>
          </a>
        );
      })}
    </>
  );
};

export default DisplaySocials;
