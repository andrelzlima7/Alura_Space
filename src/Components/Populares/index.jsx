import React from "react";
import "./Populares.css";
import pictures from "./pictures.json";

export const Populares = () => {
  return (
    <aside className="populares">
      <h2>Populares</h2>
      <ul className="imagens">
        {pictures.map((picture) => {
          return (
            <li key={picture.id}>
              <img src={picture.path} alt={picture.alt} />
            </li>
          );
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  );
};
