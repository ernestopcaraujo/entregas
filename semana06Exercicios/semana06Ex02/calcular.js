function calcular(){
let num01 = Number(document.getElementById("num01").value);
let num02 = Number(document.getElementById("num02").value);
let operacao = document.getElementById("operacao");
let sinal = operacao.options[operacao.selectedIndex].value;
let resultado = document.getElementById("resultado");
let valor;
    function soma (a,b){
        return (a+b);        
    };
    function sub (a,b){
        return (a-b);        
    };
    function multi (a,b){
        return (a*b);        
    };
    function divi (a,b){
        return (a/b);        
    };
    function power (a,b){
        return (a**b);        
    };
    switch (sinal){
        case "+" :
            valor = soma(num01,num02);
        break;
        case "-" :
            valor = sub(num01,num02);
        break;
        case "*" :
            valor = multi(num01,num02);
        break;
        case "/" :
            valor = divi(num01,num02);
        break;
        case "**" :
            valor = power(num01,num02);
        break;
    }
resultado.innerHTML = valor;
};