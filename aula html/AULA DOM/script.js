function hl(seletor, classe, duracao = 2500, atraso = 0) {
    const lista = typeof seletor === 'string'
        ? Array.from(document.querySelectorAll(seletor))
        : [seletor];
    lista.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => {
            el.classList.add(classe);
            setTimeout(() => el.classList.remove(classe), duracao);
        }, atraso + i * 200);
    });
}

// FUNÇÃO 1 — getElementById()
function selecionarPorId() {
    const elemento = document.getElementById("titulo-filme");

    console.log(elemento);
    console.log(elemento.tagName);
    console.log(elemento.textContent);
    console.log(elemento.id);

    hl("#titulo-filme", "elemento-selecionado");
    hl("#filme-principal", "elemento-selecionado");
}

//FUNÇÃO 2 — getElementsByClassName()
function selecionarPorClasse() {
    const elementos = document.getElementsByClassName("genero-acao");
    console.log("Quantidade:", elementos.length);

    for (let i = 0; i < elementos.length; i++) {
        console.log(i, elementos[i].textContent.trim());
    }

     hl(".genero-acao", "highlight-acao", 2500);
    hl(".genero-drama", "highlight-acao", 2500);
}

//FUNÇÃO 3 — querySelector()
function selecionarPorQuery() {
    const elemento = document.querySelector(".filme-mini");

    console.log(elemento);

    hl(elemento, "elemento-selecionado");
}

//FUNÇÃO 4 — querySelectorAll()
function selecionarTodos() {
    const elementos = document.querySelectorAll(".filme-mini");

    console.log("Quantidade:", elementos.length);

    elementos.forEach((el, indice) => {
        console.log(indice, el.textContent.trim());
    });

    elementos.forEach((el, i) => hl(el, "elemento-selecionado", 2500, i * 300))
}

//FUNÇÃO 1 — textContent
function mudarTexto() {
    const titulo = document.getElementById("titulo-destaque");

    titulo.textContent = "Lucas Breaking Bad";
    console.log("Novo texto:", titulo.textContent);

    titulo.classList.add("texto-animado");
    setTimeout(() => titulo.classList.remove("texto-animado"), 1500);
    hl("#titulo-destaque", "elemento-selecionado", 2000)
}

//FUNÇÃO 2 — createElement

function adicionarBadge() {
    const badge = document.createElement("span");

    badge.className = "badge";

    badge.textContent = "⭐️ Em alta";

    const container = document.getElementById("badge-container");

    container.innerHTML = "";

    container.appendChild(badge);

    console.log("Badge criado:", badge);

    hl("#badge-container", "elemento-selecionado", 2000);
}

function mudarPoster(){

    const poster =document.getElementById("poster-destaque");

    const titulo = document.getElementById("titulo-destaque");

     const opcoes = [

        {
            url: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            nome: 'The Last of Us'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
            nome: 'Wednesday'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            nome: 'Breaking Bad'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
            nome: 'Round 6'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg',
            nome: 'Stranger Things'
        },
    ];

    const sorteado = opcoes[Math.floor(Math.random()* opcoes.length)];

    poster.src = sorteado.url;

    poster.alt = sorteado.nome;

    titulo.textContent = sorteado.nome;

    console.log("Poster trocado para: ", sorteado.nome);

    poster.style.opacity = "0";

    poster.style.transition = "opacity 0.3s";

    setTimeout (() => {

        poster.style.opacity = "1";

        poster.classList.add("poster-fade-in");

        setTimeout(() => {
            poster.classList.remove("poster-fade-in");
        }, 600);

    }, 300);

}

function adicionarDestaque() {
    const card = document.getElementById("filme-destaque");

    card.classList.add("destaque");

    console.log("Classes atuais:", card.className);

    setTimeout(() => {
        card.classList.remove("destaque");
    }, 3000);

}

function lerInput(){

    const input = document.getElementById("input-busca");

    console.log( input);

    const texto = input.value.trim();

    if (texto === "") { 
        alert("Digite algo no campo primeiro!");
        return;
    }

    const titulo = document.getElementById("titulo-destaque");

    titulo.textContent = texto;

    console.log("Valor lido:", texto);

    titulo.classList.add("texto-animado");

    setTimeout(() => {
        titulo.classList.remove("texto-animado")
    }, 1500);

    
}

function resetarDemo2() { 

        document.getElementById("titulo-destaque").textContent = "The Witcher";

        document.getElementById("poster-destaque").src = "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"

        document.getElementById("poster-destaque").alt = "The Witcher";

        document.getElementById("poster-destaque").style.opacity = "1";

        document.getElementById("badge-container").innerHTML = "";

        document.getElementById("input-busca").value = "";

        document.getElementById("filme-destaque").classList.remove("destaque");

    }

function adicionarFilme() {

    const input = document.getElementById("input-fime");

    const nomeFilme = input.value.trim();

    if (nomeFilme === "") {
        alert("Digite o nome do filme!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");

    span.textContent = "🎬  " + nomeFilme;

    const btnRemover = document.getElementById("button");

    btnRemover.textContent = "🗑️ Remover"

    btnRemover.onclick = function (){
        this.parentElement.remove();
    }

}


