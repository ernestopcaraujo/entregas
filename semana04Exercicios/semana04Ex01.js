/*
Utilizando estrutura condicional exiba (console.log) a descrição 
da classificação da idade (variável) da pessoa de acordo com os dados abaixo:

Jovens - Indivíduos de até 15 anos;
Adultos - Indivíduos com idade entre 16 até 64 anos;
Idosos - Indivíduos de 65 anos em diante.
*/
//
var idade = 65;
var faixaEtaria;
var jovem = 15;
var adulto = 65;

if (idade <= jovem) {
    faixaEtaria = "Jovem"
}
if (idade > jovem && idade < adulto){
    faixaEtaria = "Adulto"
}
if (idade >= adulto){
    faixaEtaria = "3a Idade"
}
console.log(faixaEtaria);