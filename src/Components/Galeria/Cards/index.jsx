import React from "react";
import favorito from '../Icons/favorito.png'
import open from '../Icons/open.png'

export const Cards = ({ pictures }) => {
  return (
    <ul className="cards">
      {pictures.map((picture) => {
        return (
          <li key={picture.id} className="card">
            <img
              className="imagem"
              src={picture.imagem}
              alt={picture.titulo}></img>
            <p className="descricao">{picture.titulo}</p>
            <div>
              <p>{picture.creditos}</p>
              <span>
                <img src={favorito} alt="Ícone de coração para curtir" />
                <img src={open} alt="Ícone de abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
