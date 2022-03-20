//executar no console do navegador

//declaração de variáveis
var usuarioNome;
var usuarioIdade;
var usuarioEsporte;

//declaração de variáveis e atribuição de valores
var questaoNome = "Qual seu nome ?";
var questaoIdade = "Qual sua idade ?";
var questaoEsporte = "Você pratica algum esporte ?";

//atribuição de valores das variáveis pelo usário via window.prompt() e window.confirm()
usuarioNome = window.prompt (questaoNome);
usuarioIdade = window.prompt (questaoIdade);
usuarioEsporte = window.confirm (questaoEsporte);

//exibição dos valores das variáveis via console.log()
console.log(usuarioNome);
console.log(usuarioIdade);
console.log(usuarioEsporte);