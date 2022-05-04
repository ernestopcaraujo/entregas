import {Calculadora} from './aula4-part2'
let calculadora = new Calculadora();

class Calculos {

    numero1:number;
    numero2:number;

    constructor(nn1:number,nn2:number){
        this.numero1 = nn1;
        this.numero2 = nn2;
    }

}

let calculos = new Calculos (5,0);
console.log("Numero 01 = "+calculos.numero1);
console.log("Numero 02 = "+calculos.numero2);
let soma = calculadora.soma(calculos.numero1,calculos.numero2);
let subt = calculadora.subtracao(calculos.numero1,calculos.numero2);
let mult = calculadora.multiplicacao(calculos.numero1,calculos.numero2);
let divi = calculadora.divisao(calculos.numero1,calculos.numero2);

console.log("Eis o valor da operação SOMA: "+soma);
console.log("Eis o valor da operação SUBTRAÇÃO: "+subt);
console.log("Eis o valor da operação MULTIPLICAÇÃO: "+mult);
if(divi!==undefined){
    console.log("Eis o valor da operação DIVISÃO: "+divi);
}
