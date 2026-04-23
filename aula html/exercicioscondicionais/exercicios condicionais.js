/*

Nível Básico

// 1. Verificar maioridade:

const idade = Number (prompt("Digite a sua idade"));
if (idade >=18 ) {
    alert("Maior de idade!");
} else {
    alert("Maior de idade!");
}

// 2. Verificar se um número é positivo ou negativo:

const num = Number(prompt("Digite um número:"));
if (Number.isNaN(num)) {
    alert("Digite apenas números!");
} else if (num <= 0){
     alert("Número Negativo!");
} else {
    alert("Número positivo!");
}

// 3. Aprovação em uma prova:

const nota = Number(prompt("Digite a nota do aluno:"));
if (Number.isNaN(nota)) {
    alert("Digite apenas números!");
} else if (nota >= 60){
     alert("Aprovado!");
} else {
    alert("Reprovado!");
}


// 4. Verificar se um número é positivo, negativo ou zero:

const num1 = Number(prompt("Digite um número:"));
if (Number.isNaN(num1)) {
    alert("Digite apenas números!");
} else if (num1 > 0){
    alert ("O número é positivo!");
} else if (num1 < 0){
    alert ("O número é negativo!");
} else {
    alert ("O número é zero!");
}


// 5. Classificação de idade:

const idade1 = Number(prompt("Digite a sua idade!"));
if (Number.isNaN(idade1)) {
    alert("Digite apenas números!");
} else if (idade1 > 0 && idade1 <= 12){ 
    alert("Você é uma criança!");
} else if (idade1 >= 13 && idade1 <=17){
    alert("Você é um adolescente!");
} else if (idade1 >= 18) {
    alert("Você é um adulto!");
} else {
    alert("Idade inválida, insira um número positivo!");
}



// 6. Verificar se um número é par ou ímpar:

const num2 = Number(prompt("Digite um número!"));
if (Number.isNaN(num2)) {
    alert("Digite apenas números!");
} else if (num2 % 2 == 0){
    alert("O número é par!");
} else {
    alert("O número é impar!");
}



//Nível Intermediário

// 1. Calculadora simples:


const n1 = Number(prompt("Número 1:"));
const operacao = prompt ("Operação (+, -, *, /):");
const n2 = Number (prompt("Número 2:"));

let resultado;

if (operacao === "+") {
    resultado = n1 + n2;
} else if (operacao === "-") {
    resultado = n1 - n2;
} else if (operacao === "*") {
    resultado = n1 * n2;
} else if (operacao === "/") {
    resultado = n1 / n2;
} else {

alert("Operação inválida!");

}

alert("Resultado:" + resultado);

*/

//2. Maior entre três números:

const n1 = Number(prompt("Número 1:"));
const n2 = Number(prompt("Número 2:"));
const n3 = Number(prompt("Número 3:"));

if (condition) {
    
} else {
    
}