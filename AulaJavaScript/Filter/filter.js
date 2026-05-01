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

*/

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