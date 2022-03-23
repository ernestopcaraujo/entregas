/* 
Dado um número verifique se ele é par, caso seja exibe 
a mensagem de que ele é par, caso não exibe a mensagem 
de que ele é impar. Para exibir a mensagem pode ser 
usado console.log

_dica: operador ternário pode ser uma boa_

*/

let n1=2;
let n2=3;
let resposta;

function verificaParImpar (numero){
    return numero%2 == 0 ? "Par" : "Ímpar";
}

console.log("------------------------");
console.log("Este é o primeiro número: "+ n1);
resposta=verificaParImpar(n1);
console.log("Ele é "+ resposta);
console.log("------------------------");
console.log("Este é o segundo número: "+ n2);
resposta=verificaParImpar(n2);
console.log("Ele é "+ resposta);
console.log("---------Fim do Exercício---------------");