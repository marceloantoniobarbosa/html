import React from "react";
import ReactDOM from "react-dom/client"

import  Home from "./pages/Home"
import  ListaServicos from "./pages/ListaServicos"
import  ListaDevs from "./pages/ListaDevs"
import  PerfilUsuario from "./pages/PerfilUsuario"
import  VizualizarServico from "./pages/VisualizarServico"
import  CadastroUsuario from "./pages/CadastroUsuario"
import  Login from "./pages/Login"

import  Header from "./components/Header"

import "./index.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <BrowserRouter>

      <Header/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/lista/servicos" element={<ListaServicos/>}/>
        <Route path="/lista/devs" element={<ListaDevs/>}/>
        <Route path="/perfil/:idUsuario" element={<PerfilUsuario/>}/>
        <Route path="/visualizar/:idServico" element={<VizualizarServico/>}/>
        <Route path="/cadastro/usuario" element={<CadastroUsuario/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
)