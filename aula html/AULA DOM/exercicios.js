	// ============================================================
//  EXERCÍCIOS DE FIXAÇÃO — DOM JavaScript
//  StreamFlix
//
//  Instruções:
//  - Preencha cada função abaixo conforme o enunciado
//  - Abra o exercicios.html no navegador para testar
//  - Use o console (F12) para depurar
// ============================================================




// ============================================================
//  EXERCÍCIO 1 — Selecionar e Exibir o Título
//
//  O que fazer:
//  1. Selecione o elemento com id="titulo-ex1"
//  2. Leia o .textContent dele
//  3. Exiba esse texto no elemento id="resultado-ex1"
// ============================================================

function exercicio1() {
  
    const titulo = document.getElementById("titulo-ex1");
    const resultado = document.getElementById("resultado-ex1");
        resultado.textContent = "Titulo encontrado: " + titulo.textContent;
        console.log("Elemento", titulo);
        console.log("Texto", titulo.textContent);
}



// ============================================================
//  EXERCÍCIO 2 — Favoritar o Card (if/else + classList)
//
//  O que fazer:
//  1. Declare uma variável "let favoritado = false" aqui fora
//  2. Dentro da função, inverta o valor: favoritado = !favoritado
//  3. Selecione o card com id="card-ex2"
//  4. Selecione o botão com id="btn-ex2"
//  5. Se favoritado for true:
//     - Adicione a classe "card-favoritado-ex" no card
//     - Mude o textContent do botão para "💔 Desfavoritar"
//     - Atualize resultado-ex2: "❤️ Breaking Bad foi favoritado!"
//  6. Se favoritado for false:
//     - Remova a classe "card-favoritado-ex" do card
//     - Mude o textContent do botão para "❤️ Favoritar"
//     - Atualize resultado-ex2: "Série removida dos favoritos."
// ============================================================

let favoritado = false;

function exercicio2() {

    favoritado = !favoritado

    const titulo = document.getElementById("card-ex2");
    const resultado = document.getElementById("btn-ex2");

}


// ============================================================
//  EXERCÍCIO 3 — Lista Dinâmica
//
//  O que fazer:
//  1. Leia o valor do input id="input-ex3" com .value.trim()
//  2. Se estiver vazio, mostre alert e encerre com return
//  3. Crie um <li> com createElement
//  4. Crie um <span> com o nome da série (pode usar 📺 na frente)
//  5. Crie um <button> com texto "Remover"
//  6. No onclick do botão: this.parentElement.remove()
//  7. Adicione span e button dentro do li com appendChild
//  8. Adicione o li na lista id="lista-ex3" com appendChild
//  9. Limpe o input (input.value = '') e devolva o foco (input.focus())
// ============================================================

function exercicio3() {

    // TODO: ler o input


    // TODO: validar campo vazio


    // TODO: criar o <li>


    // TODO: criar o <span> com o nome


    // TODO: criar o botão remover


    // TODO: montar estrutura e adicionar na lista


    // TODO: limpar input e devolver foco

}




// ============================================================
//  EXERCÍCIO 4 — Favoritar ao Clicar (addEventListener)
//
//  O que fazer:
//  1. Use querySelectorAll para pegar todos os .card-galeria-ex
//     que estão dentro de id="galeria-ex4"
//  2. Para cada card, adicione um addEventListener('click')
//  3. Dentro do evento:
//     a. Use classList.toggle('favoritado') no card clicado
//     b. Leia o data-nome do card clicado (dataset.nome)
//     c. Verifique se o card tem a classe "favoritado" com classList.contains
//     d. Atualize o texto de id="resultado-ex4" informando o nome e o estado
//
//  ATENÇÃO: esse código precisa rodar quando o DOM estiver pronto.
//  Coloque dentro do document.addEventListener('DOMContentLoaded', ...)
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

    // TODO: pegar todos os cards da galeria-ex4


    // TODO: forEach + addEventListener('click')


    // Dentro do evento:
    // TODO: toggle da classe "favoritado"
    // TODO: ler dataset.nome
    // TODO: atualizar resultado-ex4

});




// ============================================================
//  EXERCÍCIO 5 — Filtrar por Tipo (Série / Filme / Todos)
//
//  O que fazer:
//  1. A função recebe um parâmetro "tipo" ('Série', 'Filme' ou 'todos')
//  2. Pegue todos os .card-galeria-ex dentro de id="galeria-ex5"
//  3. Para cada card, compare card.dataset.tipo com o tipo recebido
//     - Se tipo === 'todos' → remova a classe 'oculto' de todos
//     - Se combinar → remova 'oculto'
//     - Se não combinar → adicione 'oculto'
//  4. Atualize o texto de id="resultado-ex5" dizendo qual filtro está ativo
// ============================================================

function filtrarPorTipo(tipo) {

    // TODO: pegar todos os cards de galeria-ex5


    // TODO: forEach + comparar dataset.tipo com o parâmetro tipo


    // TODO: adicionar ou remover a classe 'oculto'


    // TODO: atualizar o resultado-ex5

}