import "./style.css";

import imgLogo from "../../assets/image/logo.svg";
import imgFace from "../../assets/image/facebook.svg";
import imgInsta from "../../assets/image/instagram.svg";
import imgLink from "../../assets/image/linkedin.svg";

import { Link } from "react-router-dom";

function FooterComponent() {
    return (

        <div className="rodape_conteudo">

            <div className="rodape_conteudo_paginas">

                <h2>Páginas</h2>

                <ul>
                    <li>
                        <Link to={"/login"}>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/cadastrar/servico"}>
                            Listar Serviços
                        </Link>
                    </li>
                    <li>
                        <Link to={"/cadastrar/usuario"}>
                            Cadastrar Desenvolvedor
                        </Link>
                    </li>
                    <li>
                         <Link to={"/Lista/devs"}>
                            Cadastrar Desenvolvedores
                        </Link>
                    </li>

                </ul>

            </div>

            <img src="{imgLogo}" alt="" />

            <div className="rodape_conteudo_contatos">

                <h2>Contatos</h2>

                <div>
                    <Link to={"#"}>
                        <img src="{imgFace}" alt="" />
                    </Link>
                </div>
                <div>
                    <Link to={"#"}>
                        <img src="{imgInsta}" alt="" />
                    </Link>
                </div>
                <div>
                    <Link to={"#"}>
                        <img src="{imgLink}" alt="" />
                    </Link>
                </div>

                <Link to={"mailto:contato@vsconnect.com"}>
                        contato@vsconnect.com
                </Link>

            </div>

        </div>
    )
}


export default FooterComponent;