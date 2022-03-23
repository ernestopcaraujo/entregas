/*
- Crie uma **função **que receba como **parâmetro dois números 
e a operação a ser realizada**;
- Utilizando a estrutura condicional **switch** 
faça a validação e realize a operação desejada 
(soma, subtração, divisão ou multiplicação) com os dois números passados por parâmetro 
e exiba o resultado utilizando console.log.
- Caso seja passada uma operação diferente das 4 à 
cima  deve exibir utilizando console.log que a operação não está disponível.
- Chame essa função 5 vezes passando em cada uma uma operação 
como argumento e na ultima passando uma operação inválida.
*/
let n1 = 10;
let n2 = 5;
let ope ="+"
function calcSwitch(operacao){
    let resultado;
    switch (operacao){
        case "+" :
            resultado = n1+n2;
        break;
        case "-" :
            resultado = n1-n2;
        break;
        case "*" :
            resultado = n1*n2;
        break;
        case "/" :
            resultado = n1/n2;
        break;
        default :
            resultado = "Essa operação não é válida."
    }
    return resultado;
}
console.log("");
console.log("Este é o primeiro número: "+n1);
console.log("Este é o segundo número: "+n2);
console.log("--------------------------------");
console.log("Primeira Chamada: Operação de Soma")
console.log("Resultado: " +  calcSwitch(ope));
console.log("--------------------------------");
ope ="-";
console.log("Segunda Chamada: Operação de Subtração")
console.log("Resultado: " +  calcSwitch(ope));
console.log("--------------------------------");
ope ="*";
console.log("Terceira Chamada: Operação de Multiplicação")
console.log("Resultado: " +  calcSwitch(ope));
console.log("--------------------------------");
ope ="/";
console.log("Quarta Chamada: Operação de Divisão")
console.log("Resultado: " +  calcSwitch(ope));
console.log("--------------------------------");
ope ="qualquer coisa";
console.log("Quinta Chamada: Operação Não Válida")
console.log("Resultado: " +  calcSwitch(ope));
console.log("");
console.log("------------Fim do Exercício--------------------");