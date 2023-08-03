import React from "react";
import "./Tags.css";
import pictures from '../Galeria/pictures.json'

export const Tags = ({ tags, filterPictures, setItens }) => {
  return (
    <div className="tags">
      <p>Filtre por tags:</p>
      <ul className="lista">
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filterPictures(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItens(pictures)}>Todas</li>
      </ul>
    </div>
  );
};
