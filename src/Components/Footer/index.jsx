import React from "react";
import "./Footer.css";
import facebook from "./Icons/facebook.svg";
import instagram from "./Icons/instagram.svg";
import twitter from "./Icons/twitter.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="https://www.facebook.com/" target="blank">
            <img src={facebook} alt="Ícone Facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="blank">
            <img src={instagram} alt="Ícone Instagram" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="blank">
            <img src={twitter} alt="Ícone Twitter" />
          </a>
        </li>
      </ul>
      <p>Desevolvido pelo aluno Alura: André Luiz de Lima.</p>
    </footer>
  );
};
