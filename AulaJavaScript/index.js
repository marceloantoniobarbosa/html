let minhaVariavel = 10;
console.log(minhaVariavel);

minhaVariavel = "Olá Mundo!!"
console.log(minhaVariavel);

minhaVariavel = true
console.log(minhaVariavel)

let numero = 10;
let texto = "20";

let resultado = numero + texto;
console.log(resultado);

// Isso é um comentário de linha única
/*
    Isso é um comentário
    de múltiplas linhas
*/
console.log("Isso vai executar"); // mais isso aqui é ignorado

let nome = "Lucas";
let Nome = "Maria";
let NOME = "João";
console.log(nome);
console.log(Nome);
console.log(NOME);

//Palavras Reservadas
//let, const, var, if, else, for, while, fuction, return, class, new, switc, case

//Regras de nomencratura
//Pode começar com letra, _ ou $
//Pode conter letras, números, _ ou $
//Não pode: começar com número
//Não ter espaços
//Não pode: usar acentos

let nome2;
let nomeCompleto;
let _contador;
let idade2;
let NomeCompleto;

//Nomes de funções começam com verbos:
function calcularMedida() {

}

function buscarUsuario() {

}

//Tipos Primitivos
//NUMBER - Número
const preco = 19.9;
console.log(typeof preco);

//STRING - texto
const nome3 = "Lucas";
console.log(typeof nome3);

//BOOLEAN - verdadeiro ou falso
const ativo = true;
console.log(typeof ativo);

//NULL - ausencia intencional de valor
const vazio = null;
console.log(typeof vazio);

//UNDEFINED -> variável sem valor
let indefinido;
console.log(typeof indefinido);

//BIGINT -> números muito grandes
const grande = 9999999999999999999999n;
console.log(typeof grande);

//Valores Especiais: NaN e Infinity
////INFINITY -> divisão por zero
console.log (5 / 0);
console.log (-5 / 0);

// NaN (Not a Number) -> operação inválida
console.log("abc" * 3);
console.log(Math.sqrt(-1));
console.log(0 / 0);

//Checar se é NaN
console.log(Number.isNaN("abc" * 3));

function calcularTotal(preco, quantidade) {
    const total = preco * quantidade;

    if (Number.isNaN(total)) {
        console.log("Erro: preço ou quantidade inválidos");
        return 0;
    }
    return total;
}

console.log(calcularTotal("abc", 2));
console.log(calcularTotal(10,5));

//Strings e Template Literals
// // Aspas simples, duplas ou case
const nome4 = 'Lucas';
const nome5 = "maria";
const nome6 = `João`;

// Propriedades e métodos
const nomeCompleto2 = "Marcelo Antonio Barbosa";
console.log(nomeCompleto2.length);
console.log(nomeCompleto2.toUpperCase());
console.log(nomeCompleto2.toLowerCase());

// TEMPLATE STRING (crase) -> permite inserir variáveis
const nome7 = "Marcelo";
const idade = 47;

console.log(`Olá, meu nome é ${nome7} e tenho ${idade} anos!`);

//Conversão de Tipo
console.log(Number("123"));
console.log(parseInt("10.9"));
console.log(parseFloat("10.9"));
console.log(String(123));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("oi"));

//const texto2 = prompt("Digite um número:");
//console.log(texto2 + 5);
//alert(texto2 + 5);

const numero2 = Number(prompt("Digite um número:"));
console.log(numero2 + 5);
alert(numero2 + 5);

//Operadores Aritiméticos:
console.log(2 + 3) //Soma;
console.log(5 - 2) //Subtração;
console.log(4 *2) // Multiplicação;
console.log(10 / 2) // Divisão;
console.log(10 % 3) // Resto da divisão;
console.log(2 ** 3) // Potëncia

console.log(2 + 3 * 4);
console.log((2 + 3) * 4);


//Operadores de comparação:
console.log(5 == "5"); //true -> valores são iguais (após conversão)
console.log(5 == 5); // true -> valores são iguais

console.log(5 === "5"); // false -> tipos diferentes (number vs string)
console.log(5 === 5); // true -> valor E tipos iguais

console.log(5 != "5"); // false -> valores Não são diferentes (após converção)
console.log(5 != 7); // true -> valores SÃO diferentes
 
console.log(5 !== "5"); //true -> SÃO diferentes (tipos diferentes)
console.log(5 !== 5); // false -> NÃO são diferentes (idënticos)

console.log(!true);
console.log(!false);

const idade3 = 15;
console.log(idade3 >= 18);
console.log(!(idade3 >= 18));

const nome8 = "";
const nomeVazio = nome8 === "";
console.log(nomeVazio);

const nomeNaoVazio = nome8 !== "";

console.log(!!true);

// Estrutura Sequencial (Entrada -> Processamento -> Saída)

//Entrada
const nome9 = prompt("Digite o seu nome:");
// Processamento
//Saída
console.log("Olá," + nome9 + "!");

//Entrada Soma de dois números
const n1 = Number(prompt("Digite o prímeiro número:"))
const n2 = Number(prompt("Digite o segundo número:"))
//Processamento
const soma = n1 + n2;
//Saída
alert("Resultado:" + soma);

//Dobro de um número
const numero3 = Number(prompt("Digite um número:"));
const dobro = numero3 * 2;
alert(`O dobro de ${numero3} é ${dobro}`);

//Média de duas notas
const nota1 = Number(prompt("Digite a primeira nota"));
const nota2 = Number(prompt("Digite a segunda nota"));
const media = (nota1 + nota2) / 2;
alert(`Média: ${media.toFixed(1)}`);


//Idade detalhada
//Converter anos em meses, dias, horas e minutos.

//faça um programa que leia a **idade de uma pessoa em anos** e mostre a mesma idade aproximada em:

// - Meses
// - Dias
// - Horas
// - Minutos
//Use **365 dias por ano** como simplificação.

const anos = Number(prompt("Digite a sua idade em anos:"));
alert(`Idade informada: ${anos} anos`);
const meses = anos * 12;
alert(`${meses} meses`);
const dias = anos * 365;
alert(`${dias} dias`);
const horas = dias * 24;
alert(`${horas} horas`);
const minutos = horas * 60;
alert(`${minutos} minutos`);


const anos1 = Number(prompt("Digite a sua idade em anos:"));
console.log(`Idade informada: ${anos} anos`);
const meses1 = anos * 12;
console.log(`${meses} meses`);
const dias1 = anos * 365;
console.log(`${dias} dias`);
const horas1 = dias * 24;
console.log(`${horas} horas`);
const minutos1 = horas * 60;
console.log(`${minutos} minutos`);

// Celsius -> Fahrenheit
//Converter temperatura de Celsius para Fahrenheit.

//Fórmula: F = (C x 9/5) + 32.

const celsius = Number(prompt("Temperatura em C:"));
const fahrenheit = celsius * (9 / 5) + 32;
console.log (`${celsius} C = ${fahrenheit.toFixed(1)}F`);











