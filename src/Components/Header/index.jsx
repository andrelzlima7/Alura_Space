import React from "react";
import "./Header.css";
import logo from "./Images/logo.png";
import search from "./Images/search.png";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo Alura Space"></img>
      <div className="container">
        <input
          className="inputHeader"
          type="text"
          placeholder="O que você Procura ?"></input>
        <img className="image" src={search} alt="Glass Icon"></img>
      </div>
    </header>
  );
};
