/*
    tipagem diz respeito como a linguagem de programação lida com os tipos de dados.

    tipagem estática: linguagens com tipagem estática não permitem ao desenvolvedor alterar o tipo do valor da variável depois de declarada
    geralmente a verificação de tipo é feita em tempo de compilação. exemplo de linguagem: java. 
    
    tipagem dinâmica: linguagens com tipagem dinâmica escolhem o tipo de dado de acordo com o valor atribuido à variável em tempo de execuçãi
    exemplo de linguagem: php.

    algumas linguagens estáticas podem fazer inferência de tipo na declaração de variáveis, mas não permite que o tipo seja alterado após a
    declaração. exemplo de linguagem: c#;

    tipagem forte: linguagens fortemente tipadas não conseguem realizar conversões automáticas de tipo. exemplo de linguagem: python.

    tipagem fraca: linguagens fracamente tipadas podem realizar conversões automáticas entre diferentes tipos de dados. exemplo de 
    linguagem: javascript.

    javascript é uma linguagem fracamente tipada e dinâmicamente tipada.
*/

// como javascript é dinâmicamente tipado, não precisei dizer que tipo de dado a variável qualquer iria receber.
let qualquer = "legal";

console.log(qualquer);
// operador typeof retorna uma string informando o tipo do valor operado
console.log(typeof qualquer);

qualquer = 3.1516;

console.log(qualquer);
console.log(typeof qualquer);

// como javascript é uma linguagem fracamente tipada operações desse tipo são possiveis 
console.log("3" - 2);
console.log(typeof("3" - 2));
