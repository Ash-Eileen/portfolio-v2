import React from "react";
import {socialMediaLinks } from '../socialMedia'

const Home = () => {
  return (
    <div>
      <section>
        <h1 className="mobile-home home-title">
          Hi,
          <br />
          I'm Ash!
          <br />A web dev!
        </h1>
        <h1 className="tablet-home home-title">
          Hi,
          <br />
          I'm Ashley!
          <br />A web dev!
        </h1>
        <h1 className="desktop-home home-title">
          Hi,
          <br />
          I'm Ashley Smith!
          <br />A web developer!
        </h1>
        <div className="social-logos">
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
        </div>
        <button>Get to know me!</button>
      </section>
    </div>
  );
};

export default Home;
