/*
//callback
array.metodo((element, index, array) => {

});

//forEach

const frutas = ["Maçã", "Banana", "Uva"];

frutas.forEach((element, index) => {
    console.log(index, element);
});

for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i]);
}

const alunos = ["Lucas", "Maria", "João", "Marcelo"];

alunos.forEach((nome, index) => {
    console.log(`${index + 1}aluno: ${nome}`)
});



//Filter

const people = [
    {nome: "Lucas", age: 35},
    {nome: "Maria", age: 17},
    {nome: "João", age: 18},
    {nome: "Ana", age: 22},
];


const novoArray = array.filter((element) => {
    return condicao;
});

const maiores = people.filter((person) => {
    return person.age >= 18;
});

console.log(maiores);


const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const pares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

console.log(pares);

//Crie um array com vários números.
//Use filter para mostrar apenas os números maiores que 50.

const nums = [10,55,80,20,100];

const maiores = nums.filter((numero) => {
    return numero > 50;
});

console.log(maiores);



//Map 
const novoArray = array.map((element) => {
    return novoValor;
});


const people = [
    {nome: "Lucas", age: 35},
    {nome: "Maria", age: 17},
    {nome: "João", age: 18},
    {nome: "Ana", age: 22},
];

const nomes = people.map((person) => {
    return person.nome.toUpperCase();
})

console.log(nomes);

const numeros = [1, 2, 3, 4, 5];

const dobro = numeros.map((numero) => {
    return numero *2;
})


console.log(dobro);

const produtos = ["Mouse", "Teclado", "Monitor"];

const frases = produtos.map((produto) => {
    return `Produtos: ${produto}`
})
console.log(frases);



const pessoas = [
    {nome: "Luca", idade: 17},
    {nome: "Marcelo", idade: 47},
];

const resultado = pessoas.map((pessoa) => {
    return {
        nome: pessoa.nome,
        maiorIdade: pessoa.idade >=18
    };
});


console.log(resultado);



//Use map para transformar um array de preços com desconto de 10%.

const precos = [100, 200, 300];

const desconto = precos.map((preco) => {
    return preco * 0.9;
});

console.log(desconto);

//Use map para transformar:[1,2,3,4] em ["Número 1", "Numero 2", ...]


const numeros = [1,2,3,4];

const resultado = numeros.map((numero) => {
    return `Número: ${numero}`
})
console.log(resultado);

//Find

const item = array.find((element) => {
    return condição;
});

const people = [
    {nome: "Luca", idade: 17},
    {nome: "Marcelo", idade: 47},
];

const luca = people.find((person) => {
    return person.name === "Luca";
});

console.log(luca);

//Encontrar número
const numeros = [5,10,15,20,25];
const encontrado = numeros.find((numero) =>{
    return numero > 18;
})

console.log(encontrado);


const usuarios = [
    {id:1, nome: "Lucas"},
    {id:2, nome: "Maria"},
    {id:3, nome: "João"}
];

const usuario = usuarios.find((u) => {
    return u.id === 2;
});

console.log(usuario);

//Encontre o primeiro número negativo do array.

const numeros = [5,8,-2,10,-7];

const negativo = numeros.find((numero) => {
    return numero < 0;
});

console.log(negativo);

//Reduce
array.reduce((acc, element) =>{
    return novoACC;
}, valorInicial);


const numeros = [10, 20, 30];

const soma = numeros. reduce((acc, numero) => {
    console.log("ACC:", acc);
    console.log("Número atual:", numero);
    return acc + numero;
}, 0);
console.log(soma);

const people = [
    {nome: "Lucas", age: 35},
    {nome: "Maria", age: 17},
    {nome: "João", age: 18},
    {nome: "Ana", age: 22},
];
const totalIdade = people.reduce((acc, person) => {
    return acc + person.age;
}, 0);

console.log(totalIdade);

const nomes = people.reduce((acc, person) => {
    return acc + " " + person.nome;

}, "");

console.log(nomes);

const numeros = [2,3,4];
const multiplicador = numeros.reduce((acc, numero) => {
    return acc * numero;
}, 1);

console.log(multiplicador);


//Somar preços de produtos

const carrinho = [
    { produto: "Mouse", preco:50},
    { produto: "Teclado", preco:100},
    { produto: "Monitor", preco:900}
];

const total = carrinho.reduce ((acc, item) => {
    return acc + item.preco;

}, 0);

console.log(total);

//Contar quantidade de letras
const palavras = ["oi", "javascript", "html"];

const totalLetras = palavras.reduce((acc, palavra) => {
    return acc + palavra.length;
}, 0);

console.log(totalLetras);

//Use reduce para descobrir: qual o maior número do array.
const numeros = [10, 45, 7, 99, 32];

const maior = numeros.reduce((acc,numero) => {
    if (numero > acc) {
        return numero
    }
    return acc;

}, numeros[0]);

console.log(maior);

const produtos = [
    {nome: "Mouse", preco: 50},
    {nome: "Teclado", preco: 200},
    {nome: "Momitor", preco: 900},
    {nome: "Notebook", preco: 3000},
];

const resultado = produtos.filter((produto) => {
    return produto.preco > 100;
})
.map((produto) => {
    return produto.nome;
});

console.log(resultado);

const filmes = [
    {nome:"Vingadores", nota: 9},
    {nome:"Batman", nota: 7},
    {nome:"Dragon Ball", nota: 10},
    {nome:"Matrix", nota: 8}
];

//Use filter para pegar notas >= 8
//Use map para pegar apenas nomes
//Use find para encontrar "Batman"
//Use reduce para somar todas as notas

const filmesBons = filmes.filter((filme) => {
    return filme.nota >= 8
});

console.log(filmesBons);

const nomes = filmes.map ((filme) => {
    return filme.nome
});

console.log(nomes);

const batman = filmes.find ((filme) => {
    return filme.nome === "Batman";
});

console.log(batman);

const somaNotas = filmes.reduce((acc, filme) => {
    return acc + filme.nota;
});

console.log(somaNotas);



//Switch

const dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;        
    default:
         console.log("Dia inválido!");
        break;
}

const n1 = 10;
const n2 = 5;

const operacao = "+";

switch (operacao) {
    case "+":
        console.log(n1 + n2);
        break;
    case "-":
        console.log(n1 - n2);
        break;
    case "*":
        console.log(n1 * n2);
        break;
    case "/":
        console.log(n1 / n2);
        break;
    default:
        console.log("Operação inválida!");
}

//Faça um sistema de notas:
//A -> Excelente
//B -> Bom
//C -> Regular
//D -> Ruim


const nota = prompt("Digite uma nota: A, B, C ou D");

switch (nota) {
    case "A":
        console.log("Excelente!");
        break;
    case "B":
        console.log("Bom!");
        break;
    case "C":
        console.log("Regular!");
        break;
    default:
        console.log("Ruim");
};

*/

//Crie um sistema de menu de videogame:

//1 -> Jogar
//2 -> Configurações
//3 -> Créditos
//4 -> Sair

let opcao;
do {
    opcao = Number(prompt(`
        === Menu ===
        1 - Jogar
        2 - Configurações
        3 - Créditos
        4 - Sair
        `));

        switch (opcao) {
            case 1:
                console.log("Iniciando jogo...")
                break;
            case 2:
                console.log("Abrindo configurações...")
                break;
            case 3:
                console.log("Criado por Marcelo Antonio...")
                break;
            case 4:
                console.log("Criado por Marcelo Antonio...")
                break;                
            default:
                break;
        }

} while (opcao !== 4);