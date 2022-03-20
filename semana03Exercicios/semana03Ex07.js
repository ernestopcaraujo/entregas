//declaração de variáveis
var anoNasc;
var anoAtual;
var qAnoNasc = "Qual o ano do seu nascimento ?";
var qAnoAtual = "Qual o ano atual ?";

//pelo window.prompt são exibidas ao usuário as variáveis qIdadeAtual e qAnoAtual
//as respostas do usuário são aramazenadas nas vairáveis idadeAtual e anoAtual
anoNasc = window.prompt(qAnoNasc);
anoAtual = window.prompt(qAnoAtual);

//declaração de variáveis
var idadeComAniv;
var idadeSemAniv;

//a variável idadeSemAniv tem seu valor atribuído pela subtração das variáveis anoAtual e anoNasc e pela posterior subrtração de 1 do resultado
//a variável idadeComAniv tem seu valor atribuído pela subtração das variáveis anoAtual e anoNasc
idadeSemAniv = ((anoAtual - anoNasc)-1);
idadeComAniv = anoAtual - anoNasc;

//exibição ao usuário dos valores das variáveis pelo window.alert
window.alert("Sua idade é " + idadeSemAniv + " anos, se você não fez aniversário ainda. Se já fez, sua idade atual é " + idadeComAniv +" .");