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