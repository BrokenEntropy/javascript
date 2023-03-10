/*
 * javascript é case-sensitive e usa o conjunto de caracteres unicode, por exemplo a palavra café pode ser usada como nome de variável, mas
 * não é o ideal usar nome de variáveis com acento.
 * 
 * como javascript é case-sensitive a variável café com letra minúscula e Café com letra maiúscula são duas variáveis diferentes.
 */

var café = "muito bom";
var Café = "gostoso pra krl";


console.log(café);
console.log(Café);

/*
 * em javascript existem três tipos de declaração: 
 * 
 * var: declara uma variável, opcionalmente, inicializando-a com um valor.
 * let: declara uma variável local de escopo de bloco, opcionalmente, inicializando-a com um valor. 
 * const: declara uma constante de escopo de bloco, apenas de leitura. 
 * 
 * usamos variáveis com nomes simbólicos para os valores em nossas aplicações.
 * 
 * declaração de variáveis:
 * |-> com a palavra chave var. por exemplo: var x = 42;
 * |-> por simples adição de valor. por exemplo: y = 49; esse tipo de declaração declara uma variável global, essa declaração gera uma
 * |   warning no javascript e não deve ser usada.
 * |-> com a palavra chave let. por exemplo: let z = 32; essa sintaxe pode ser usada para declarar uma variável local de escopo de bloco.
 * 
 * uma variável declarada usando a palavra reservada var ou let sem um valor inicial atribuido tem como valor undefined.
 * tentar utilizar uma variável que não foi declarado gera um ReferenceError
 */


// console.log("o valor de z é: " + z); gera um ReferenceError

var a = 3;
let b = 4;

console.log("o valor de a é: " + a);
console.log("o valor de b é: " + b);

// variáveis declaradas com let não podem ser redeclaradas, mas variáveis criadas com var sim.

var a = 30;
// let b = 40; SyntaxError
b = 40;

console.log(a, b);

// uma vez declarada, podemos manipular uma variável livremente por meio dos identificadores
a = 300;
b = 400;

console.log(a, b);

// constantes como o próprio nome indica tem seus valores constantes, ou seja não podem ser alterados.
const c = 500;
// c = 5000; TypeError

console.log(a, b, c);