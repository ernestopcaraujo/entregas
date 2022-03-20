//executar no console do navegador

// declaração de variáveis
var usuarioNome;
var usuarioSNome;
var etiquetaResultado;

//declaração de variáveis e atribuição direta de valor
var questaoNome = "Qual seu nome ?";
var questaoSNome = "Qual seu sobrenome ?";
var etiquetaResultado = "Este é seu nome completo: ";

//exibição de valores de variáveis e atribuição de valores das variáveis pelo usário via window.prompt()
usuarioSNome = window.prompt (questaoSNome);
usuarioNome = window.prompt (questaoNome);

//exibição de valores de variáveis e atribuição de valores das variáveis pelo usário via window.alert()
window.alert(etiquetaResultado + usuarioNome + " " + usuarioSNome);