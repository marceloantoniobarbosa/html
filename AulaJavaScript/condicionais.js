//JavaScript: Condicionais (if, else, operadores lógicos)
const idade = 15;
if (idade >=18)  {
    console.log("Maior de idade!");
}

if (idade >=18) {
    console.log("Maior de idade!");
} else {
    console.log("Menor de idade!");
}


//Operadores de comparação
const a = 10;
const b = 5;

console.log("10 > 5:", a > b);
console.log("5 > 10:", b > a);

console.log("5 < 10:", a > b);
console.log("10 < 5:", b > a);

console.log("10 >= 5:", a >= b);
console.log("5 >= 10:", b >= a);

//Operador && (E / AND)
const idade1 = 20;
const temDocumento = true;
const estaNaLista = true;

if (idade1 >= 18 && temDocumento && estaNaLista) {
    console.log("Pode entrar!")
} else {
    console.log("Se lascou!!!")
}

//Operador || (OU / OR)

const temDinheiro = false;
const temCartao = true;
const temPix = false;

if (temDinheiro || temCartao || temPix) {
    console.log("Pode pagar!!")
} else {
    console.log("Não tem como pagar!!")
}

const usuario = "admin";
const senha = "1234";

const senhaCorreta = (senha === "1234");
const ehAdmin = (usuario === "admin");
const ehGerente = (usuario === "gerente");

if ((ehAdmin && senhaCorreta) || (ehGerente&&senhaCorreta)) {
    console.log("Acesso liberado!")
} else {
    console.log("Acesso negado!")
}

if ((ehAdmin || ehGerente ) && senhaCorreta){
    console.log("Acesso liberado!")
} else {
    console.log("Acesso negado!")
}

const usuario2 = prompt("Usuário");
const senha2 = prompt("Senha");

const acessoAdmin = (usuario2 === "admin" && senha2 === "1234");
const acessoUser = (usuario2 === "user" && senha2 === "senha123");

if (acessoAdmin || acessoUser ) {
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado");
}

const nota = 75 

if (nota >= 80) {
    console.log("Aprovado!");
} else if (nota >= 60){
    console.log("Recuperação!");
}else{
    console.log("Reprovado");
}

const temp = Number(prompt("Temperatura atual C"));

if (Number.isNaN(temp)) {
    console.log("Temperatura inválida!");
} else if (temp < 0){
    console.log("Abaixo de 0 C!");
}else if (temp <= 15){
    console.log("Está frio!");
}else if (temp <=25) {
    console.log("Agradável!");
}else if (temp <= 35) {
    console.log("Quente!");
} else {
    console.log("Morte");
}

if (Number.isNaN(temp)) {
    
} else if (temp <0) {
    
} else if(temp >= 0 && temp <= 15) {
    console.log("Está frio!");
} else if(temp > 15 && temp <= 25) {
    console.log("Agradável!");
} else if (temp > 25 && temp <= 35) {
     console.log("Quente!");
} else {
    console.log("Morte");
}

//Semáforo

const cor = prompt("Cor do Semáforo (verde/amarelo/vermelho)")
.toLowerCase()
.trim();

if (cor ==="verde") {
    console.log("Siga!");
} else if (cor === "amarelo"){
    console.log("Atenção!");
} else if (cor === "Vermelho") {
    console.log("Pare!");
} else {
    console.log("Cor inválida!");
}

//Calculadora de IMC Validada
/*

Atividade: Cálculo de IMC
Crie um programa que solicite ao usuário seu peso (kg) e altura (m).
O programa deve:
Validar se os valores são números e positivos
Verificar se a altura não é maior que 3 metros
Caso haja erro, exibir uma mensagem apropriada
Se os dados forem válidos:
IMC= altura2 / peso
Exibir o resultado com 2 casas decimais
Informar a classificação:
Abaixo de 18.5 -> Abaixo do peso
Menor que 25 -> Peso normal
Menor que 30 -> Sobrepeso
Caso contrário -> Obesidade
*/

const peso = Number(prompt("Peso (Kg)"));
const altura = Number(prompt("Altura (m)"));

if (Number.isNaN(peso) || Number.isNaN(altura)) {
    console.log ("Digite apenas números!");
} else if (peso <= 0 || altura <= 0) {
     console.log ("Peso e altura devem ser positivos!");
} else if (altura > 3) {
    console.log("altura parece estar errada. Digitem em metros (1.76)");
} else {
    const imc = peso / (altura ** 2);
    console.log(`seu IMC: ${imc.to fixed(2)}`);

    if (imc < 18.5) {
        console.log("Abaixo do peso!")
    } else if (imc < 25){
        console.log("Peso normal!")
    } else if (imc <30) {
        console.log("Sobrepeso!")
    } else {
        console.log("Obesidade")
    }
}