/*
// 1 - Dado o array const notas = [4, 7, 9, 3, 10, 5];, filtre apenas as notas maiores ou iguais a 7.


const notas = [4, 7, 9, 3, 10, 5];
const notasBoas = notas.filter(function(nota) {
    return nota >= 7;
});

console.log("Notas maiores ou iguais a 7:", notasBoas);

//Dado o array const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];, encontre o primeiro filme que começa com a letra "B".

const filmes = [
    {nome:"Vingadores", nota: 9},
    {nome:"Batman", nota: 7},
    {nome:"Dragon Ball", nota: 10},
    {nome:"Matrix", nota: 8}
];

const batman = filmes.find ((filme) => {
    return filme.nome === "Batman";
});

console.log(batman);

//Dado o array const temperaturas = [20, 25, 30, 15];, crie um novo array convertendo para Fahrenheit (C * 1.8 + 32).

const temperaturas = [20, 25, 30, 15];

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const temperaturasFahrenheit = temperaturas.map(celsiusParaFahrenheit);

console.log("Temperaturas em Celsius:", temperaturas);
console.log("Temperaturas em Fahrenheit:", temperaturasFahrenheit);


// Dado o array const valores = [100, 200, 50, 150];, calcule o total (como se fosse uma soma de compras).

const valores = [100, 200, 50, 150];
const total = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log("O total é:", total);


*/
