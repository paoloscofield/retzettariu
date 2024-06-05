import React from "react";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <img src={logo} alt="logo footer" />
      </div>
      <div className="footer__info">
        <p>
          <span>
            Design and development:{" "}
            <a href="https://www.paoloscofield.it" target="_blank" className="link">
              Paolo Scofield Design
            </a>
          </span>{" "}
          -{" "}
          <span>
            Contatti:{" "}
            <a href="mailto:info@paoloscofield.it" target="_blank" className="link">
              info@paoloscofield.it
            </a>
          </span>
          <br />{" "}
          <span>
            Tutte le ricette sono prese da:{" "}
            <a href="https://www.asloristano.it/documenti/5_91_20180212123530.pdf" target="_blank" className="link">
              Ricettario - Archivio della memoria della Sardegna
            </a>
            - Le immagini e i testi sono di proprietà dei rispettivi autori.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
