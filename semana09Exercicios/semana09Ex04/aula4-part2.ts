export class Calculadora {

    soma(n1:number,n2:number):number{
        return n1+n2;

    }

    subtracao(n1:number,n2:number):number{
        return n1-n2;

    }

    multiplicacao(n1:number,n2:number):number{
        return n1*n2;
    }

    divisao(n1:number,n2:number):number|undefined{
        if (n2!==0){
            return n1/n2;    
        }
        console.log("Você não pode dividir por zero !");
         
    }
}