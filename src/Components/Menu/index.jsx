import React from "react";
import './Menu.css'
import homeAtivo from './Icons/home-ativo.png'
import maisCurtidas from './Icons/mais-curtidas-inativo.png'
import maisVistas from './Icons/mais-vistas-inativo.png'
import novasInativo from './Icons/novas-inativo.png'
import surpreendaMe from './Icons/surpreenda-me-inativo.png'

export const Menu = () => {
    return (
        <nav className="menu">
            <ul className="lista">
                <li>
                    <img src={homeAtivo} alt=""></img>
                    <a href="">Início</a>
                </li>
                <li>
                    <img src={maisCurtidas} alt=""></img>
                    <a href="">Mais Curtidas</a>
                </li>
                <li>
                    <img src={maisVistas} alt=""></img>
                    <a href="">Mais Vistas</a>
                </li>
                <li>
                    <img src={novasInativo} alt=""></img>
                    <a href="">Novas</a>
                </li>
                <li>
                    <img src={surpreendaMe} alt=""></img>
                    <a href="">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}