//declarcao de variaveis e obtencao de valores do usuario
var quantosTermos = parseInt(window.prompt("Quantos termos você quer na sua P.A.\n(incluindo o valor inicial) ?"));
var qualValorIncial = parseInt(window.prompt("Qual o valor inicial de sua P.A. ?"));
var qualRazao = parseInt(window.prompt("Qual a razão que você deseja na sua P.A. ?"));


//declaracao do array e da variavel
//array já tem valor predfinido pelo valor de qualValorIncial
const PA = [qualValorIncial];
var a;

//o loop for inicia com valor 0 e itera o valor de quantosTermos -1 para garantir
//que será gerado o numero de termos totais na PA que o usuário deseja.
for(i=0;i<(quantosTermos-1);i++){
    a = PA[i] + qualRazao;
PA.push(a);
}
window.alert(PA);