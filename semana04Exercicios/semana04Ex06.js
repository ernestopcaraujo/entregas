/*
- Cria uma variável impares que inicia com 0;
- Crie uma variável contador que inicia com 0;
- Utilizando a estrutura de repetição **while** executa o 
código enquanto a variável impares for menor que 10;
- A variável contador deve ser incrementado dentro do while 
toda vez que ele for iterado;
- A variável impares só deve ser incrementada dentro do while 
quando o contador for um número ímpar;
- A cada iteração do while imprima o valor de contador e de impares usando console.log.
*/

let impares = 0;
let contador = 0;

console.log("");
console.log("LISTAGEM DE 10 ÍMPARES EM UMA SEQÜÊNCIA")

function contaImpares (imp,conta){
        while (imp < 10){
            let verifica = conta%2 == 0 ? "Par" : "Ímpar";
            if (verifica == "Ímpar"){
                imp = imp + 1;
            }
            conta = conta + 1;
            console.log("......................");
            console.log("Contador:  " + conta + " / " + "Quantida de Ímpares:  " + imp);
        }
}
contaImpares(impares,contador);
console.log("");
console.log("............Fim do Exercício...........");