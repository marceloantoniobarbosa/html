function Saudacao(props) {
    return <h1>OLá, {props.nome}!</h1>
}

<Saudacao nome="Marcelo"/>

props = {
    nome: "Marcelo"
}


function Produto(props) {
    return (
        <div>
            <h2>{props.nome}</h2>
            <p>R$ {props.preco}</p>
        </div>
    );
}

<Produto nome="Notebook" preco="3500"/>

function botao(props) {
    return (
        <button>
            {props.texto}
        </button>
    );
}

<Botao texto="Salvar"/>


//(DESESTRUTURAÇÃO)
function Saudacao2({nome}) {
    let nome = props.nome
}

function Usuario({nome, idade, cidade}) {
    return (
        <div>
            <h1>{nome}</h1>
            <p>{idade}</p>
            <p>{cidade}</p>
        </div>
    );
}

<Usuario
    nome="Marcelo"
    idade={47}
    cidade="São Caetano do Sul"
/>

//useState
function Contador() {
    let numero = 0;

    function aumentar() {
        numero++

        console.log(numero)
    }
    return (
        <div>
            <h1>{numero}</h1>
            <button onClick={aumentar}>Aumentar</button>
        </div>
    )
}

import { useState } from "react";
    function Contador () {
        const [contador, setContador] = useState(0)
        return (
            <div>
                <p><Voc>Você clicou {contador} vezes</Voc></p>
                <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
            </div>
        )
    }

    function Nome() {
        const [nome, setNome] = useState("");
        return (
            <div>
                <input onChange={(e) => setNome(e.target.value)} />
                <h1>{nome}</h1>
            </div>
        )
    }

    function FormularioLogin() {
        const [email, setEmail] = useState("");
        const [senha, setSenha] = useState("");

        function enviarFormulario(event) {
            event.preventDefaul();
            console.log(`Email`, email)
            console.log(`Senha`, senha)
        }

        return (
            <form onSubmit={enviarFormulario}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email"/>

                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="digite a senha">
                
                </input>

                <button type="submit">

                </button>
            </form>
        )
    }

    // Estado com arrays 
    const [listaItens, setListaItens] = useState([]);

    function adicionarItem(novoItem) {
        setListaItens([...listaItens, novoItem])

        function removerItens(itemParaRemover) {
            setListaItens(listaItens.filter(item => item != itemParaRemover))
        }

    }

    import { useEffect } from "react";

    function MeuComponente() {
        useEffect(() => {
            console.log("Componente carregado")
        }, [])

        return <div>...</div>
    }

    import { useState, useEffect } from "react";
    import api from "../../utild/api";
import { toFormData } from "axios";

    function ListaServicos() {
        const [servicos, setServicos] = useState([]);

        function buscarServicos() {
            api.get("servicos")
            // http://localhost:3000/servicos

            .then((response) => {
                setServicos(response.data);
            })
            .catch((error) => {
                console.log("Erro:", error)
            })
        }

        useEffect(() => {
            buscarServicos();
        }, [])

        return (
            <ul>
                {servicos.map((servico, index) => (
                    <li key={index}>
                        {servico.nome}
                    </li>

                ))}
            </ul>
        )
    }

    function cadastrarUsuario(event) {
        event.preventDefaul();

        const formData = new FormData();

        formData.append("nome", nome);
        formData.append("email", email);
        formData.append("user_img", foto);

        api.post("users", formData)
    }