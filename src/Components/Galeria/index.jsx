import React, { useState } from "react";
import "./Galeria.css";
import pictures from './pictures.json'
import { Tags } from "../Tags";
import { Cards } from "./Cards";

export const Galeria = () => {
  const [itens, setItens] = useState(pictures);
  const tags = [...new Set(pictures.map((valor) => valor.tag))];

  const filterPictures = (tag) => {
    const novasFotos = pictures.filter((foto) => {
      return foto.tag === tag;
    });

    setItens(novasFotos);
  };

  return (
    <section className="galeria">
      <h2>Navegue pela galeria</h2>
      <Tags 
        tags={tags}
        filterPictures={filterPictures}
        setItens={setItens}/>
      <Cards pictures={itens}/>
    </section>
  );
};
