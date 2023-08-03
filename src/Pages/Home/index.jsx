import React, { Fragment } from "react";
import "./Home.css";
import banner from "./Images/banner.png";
import { Header } from "../../Components/Header";
import { Menu } from "../../Components/Menu";
import { Galeria } from "../../Components/Galeria";
import { Footer } from "../../Components/Footer";
import { Populares } from "../../Components/Populares";

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <section className="principal">
          <Menu />
          <div className="imagem">
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="Imagem da terra vista do espaço"></img>
          </div>
        </section>
        <div>
          <Galeria />
          <Populares />
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};
