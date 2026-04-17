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



