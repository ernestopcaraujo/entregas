/*
Utilizando estrutura de repetição realize a tabuada do número 2 
e exibe ela no console.log da seguinte forma:
2 x 0 = 0
2 x 1 = 2
....
2 x 10 = 20

_dica: de uma olhadinha no for._
*/
const n = 2;
console.log("");
console.log("Tabuada do 2");
console.log("");
function tab2 (constante){
    for(i=0;i<11;i++){
        console.log("----------------");
        let res = constante*i;
        console.log(constante + " X " + i + " = " + res )
    }
}
tab2(n);
console.log("");
console.log("------Fim do Exercício----------");