/*
====================================================================
Basico

// 1. Contagem de 1 a 10:

console.log ("Contando de 1 a 10:\n");
for (let i = 1; i <=10; i++) {
    console.log (`Número: ${i}`);
}

// 2. Tabuada de um número:

const numero = Number(prompt("Tabuada de qual número?"));

if (Number.isNaN(numero)) {
    console.log("Número inválido!");
} else {
    console.log(`\nTabuada do ${numero}\n`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}


//3. Soma dos primeiros N números naturais:

const n = Number(prompt("Digite um número:"));
let soma = 0;

for (let i = 1; i <= n; i++) {
  soma += i;
}

console.log(`A soma de 1 até ${n} = ${soma}`);

=====================================================================
Intermediário

// 1. Exibir os números pares de 1 a 50:

console.log("Numeros pares de 0 a 50\n")
;
for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
     console.log(i);
    }
}

// 2. Jogo de adivinhação:

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let palpite = 0;

while (palpite !== numeroSecreto) {
    palpite = Number(prompt("Adivinhe o número (1 a 100):"));

    if (palpite > numeroSecreto) {
        console.log("O número é menor!");
    } else if(palpite < numeroSecreto) {
        console.log("O número é maior!"); 
    }else {
        console.log("Acertou!!!");
    }
}

// 3. Contagem regressiva:

let numero = Number(prompt("Digite um númeroÇ"));

while (numero >= 0) {
    console.log(numero);

    numero--;
}

========================================================================================================
Nível Avançado

// 01. Soma de 2 digitos

let numero = Number(prompt("Digite um número interiro:"));

let soma = 0;

while (numero > 0) {
    let digito = numero % 10;
    soma += digito

    numero = Math.floor(numero/10);
}

console.log("Soma dos dígitos:", soma);

*/

// 02. Fatorial de um número: