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

*/

//Filter

const people = [
    {nome: "Lucas", age: 35},
    {nome: "Maria", age: 17},
    {nome: "João", age: 18},
    {nome: "Ana", age: 22},
];
/*
const novoArray = array.filter((element) => {
    return condicao;
});

const maiores = people.filter((person) => {
    return person.age >= 18;
});

console.log(maiores);
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const pares = numeros.filter((numero) => {
    return numero % 2 === 0;
})

console.log(pares);

