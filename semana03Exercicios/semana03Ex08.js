var escolhaOperText = "SimpleCalc - Caculadora JavaScript\nDigite a operação desejada sendo:\nSoma.................... +\nSubtração........... -\nMultiplicação..... *\nDivisão.................. /";
var operacaoEscolhida;

operacaoEscolhida = window.prompt(escolhaOperText);

var num01;
var num02;

num01 = parseFloat(prompt("Digite o primeiro número:"));
num02 = parseFloat(prompt("Digite o segundo número:"));

var resultado;

if (operacaoEscolhida == "+") {
    resultado = num01 + num02;
}
else 
    if (operacaoEscolhida == "-") {
        resultado = num01 - num02;
    }
else
    if (operacaoEscolhida == "*") {
        resultado = num01 * num02;
    }
else {
    resultado = num01 / num02;
}

window.alert("Este é o resultado de seu cálculo:  " + resultado);