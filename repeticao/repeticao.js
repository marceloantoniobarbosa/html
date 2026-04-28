/*//while
while (condition) {
    //código se repete enquanto a condição for true
}

//Contagem de 1 a 5

let contador = 1;
while (contador <= 5) {
    console.log("Contagem:", contador);

    contador++
}

//contagem regressiva de 10 até 1

let tempo = 10;
console.log("Iniciando contagem regressiva...")

while (tempo > 0) {
    console.log(`${tempo}...`)

    tempo--
}

console.log ("Feliz ano novo!!")

//Validação de senha
const senhaCorreta = "123456";
let tentativa = "";
while (tentativa !== senhaCorreta) {
    tentativa = prompt("Digite a senha:");
    if (tentativa === senhaCorreta) {
        console.log("Senha correta!");
    } else {
        console.log("Senha incorreta!");
    }
}

// Somar números ate ultrapassar 100

let soma = 0;
let numero = 1;

console.log("Somando núneros até passar de 100...");

while (soma <100) {
    soma += numero

    console.log(`${numero} Soma partial: ${soma}`);

    numero++
}

console.log('\n Precisou de ${numero - 1} números para ultrapassar 100');
console.log ("Soma final: + soma");

//Tabuada

const numero1 = Number(prompt("Qual número: "));
if (Number.isNaN (numero1)) {
    console.log("Digite um número válido!");
} else {
    let multiplicador = 1;
    console.log(`Tabuada do ${numero1}\n`);

    while (multiplicador <= 10) {
        const resultado = numero1 * multiplicador;
        console.log (`${numero1} x ${multiplicador} = $ {resultado}`);
        multiplicador++;
    }
}*/

/*let x = 10;
while (x < 5) {
    console.log("Isso não vai aparecer");
}

let y = 10;
do {
    console.log("Isso vai aparecer uma vez");
} while (y < 5);
 */

//Menu interativo
/*
let opcao;

do {
    console.log ("\n======Menu======");
    console.log ("1 - ver saldo");
    console.log ("2 - fazer depósito");
    console.log ("3 - fazer saque");
    console.log ("0 - sair");
    console.log ("==================");

    opcao = prompt("Escolha uma opção:");

    if (opcao === "1") {
        console.log("Seu saldo é de 1000,00");
    } else if (opcao === "2") {
        console.log("Deposito realizado!");
    } else if (opcao === "3"){ 
        console.log("Saque realizado!");
    } else if (opcao === "0"){
        console.log("Até logo!");
    } else {
        console.log("Opção inválida!");
    }
} while (opcao !== "0");

//jogo: adivinhe o número
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
// Math.random 0.0 0.9999999999999.........
// * 10 0.0 9.999999999...
// Math. floor 0 - 9
// +1 0- = 0 - 10
/*
let palpite;
let tentativas = 0;
console.log("Adivinhe o número entre 1 e 10");

do {
    palpite = Number(prompt("Seu palpite:"));
    tentativas++

    if (Number.isNaN(palpite)) {
        console.log("digite um número válido!");
    } else if (palpite < numeroSecreto){
        console.log("Muito baixo! Tente Novamente!");
    } else if (palpite > numeroSecreto) {
        console.log("Muito alto! Tente Novamente!");
    } else {
        console.log(`Acertou!!!!! o número era ${numeroSecreto}`);
        console.log(`Precisou de ${tentativas} tentativas!`)
    }
} while (palpite !== numeroSecreto);

//FOR
console.log ("Contando de 1 a 10:\n");
for (let i = 1; <=10; i++) {
    console.log (`Número: %{i}`);
}


//Tabuada
const numero = Number(prompt("Tabuada de qual número"));
if (Number.isNaN) {
    console.log("Número inválido!")
} else {
    console.log (`\n Tabuada do ${numero}\n`);

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * 1;
        console.log (`${numero} x ${i} = ${resultado}`);
    }
}



//Números pares (0 a 20)
console.log("Numeros pares de 0 a 20\n")
;
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
     console.log(i);
    }
}



for (let i2 = 2; i2 <=20; i2 *= 2) {
    console.log(i2);
}



console.log("Contagem regressiva");
for (let i =10; i>= 1; i--) {
    console.log(`${i}...`);
}

//Piramide

const altura =5;
 for (let linha = 1; linha <= altura; linha++) {
    let asteriscos = "";

    for (let i = 1; i <= linha; i++) {
        asteriscos += "*"
    } 
    console.log(asteriscos);
 }



 //Array (lista)
 const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

 console.log(frutas[0]);
 console.log(frutas[1]);
 console.log(frutas[2]);
 console.log(frutas[3]);

 console.log(frutas.length);

 //for of
 for (const fruta of frutas) {
    console.log(`- ${fruta}`);
 }


const numeros = [10, 25, 8, 42, 15, 7];

let soma = 0;

for (const num of numeros) {
    soma += num;
    
}

console.log(soma);


//Objetos

const pessoa = {
    nome: "Lucas",
    idade: 35,
    cidade: "Santo André",
    profissao: "Professor"
}

console.log(pessoa.nome);
console.log(pessoa["idade"]);

// for in

for(const chave in objeto) {

}

const aluno = {
    nome: "Maria Silva",
    matricula: "20223401",
    curso: "Desenvolvedor Web",
    nota: 9.5
}

console.log("Dados do Aluno:\n");
for (const chave in aluno) {
    const valor = aluno [chave]
    console.log(`${chave}: ${valor}`)
}

*/

//Estoque de produtos
const estoque = {
    "Notebook": 15,
    "Mouse": 50,
    "Teclado": 30,
    "Monitor": 8,
    "Webcam": 22
}

console.log("estoque:\n");
for (const produto in estoque) {
    const quantidade = estoque[produto];

    if (quantidade < 10) {
        console.log(`${produto}: ${quantidade} unidades (estoque baixo)`);
    } else {
        console.log(`${produto}: ${quantidade} unidades`);
    }
}