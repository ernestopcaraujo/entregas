/*

Crie um arquivo typescript com o nome exercicio01.ts e no corpo do arquivo crie 3 variáveis, 
cada um delas com a seguinte instrução:

1- exampleLet - sendo uma variável não constante e de escopo local do tipo numérico
 com a sua idade como valor.
2- exampleConst - sendo uma variável constante e de escopo local do 
tipo string com o seu nome como valor.
3- exampleVar - sendo uma variável não constante e de escopo global do tipo string 
com a concatenação da seguinte frase: “Olá meu nome é ”+exampleConst +” e tenho ”+exampleLet+” anos.”;

*/

let exampleLet:number = 14;
const exampleConst:string = "Ernesto Procópio Campos de Araújo - DEVin[NDD]"
var exampleVar:string;
exampleVar = "Olá, meu nome é "+exampleConst+" e tenho "+exampleLet+" anos.";


console.log('Meu nome: '+exampleConst);
console.log('Minha Idade: '+exampleLet+' anos');
console.log(exampleVar);