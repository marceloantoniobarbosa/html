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










