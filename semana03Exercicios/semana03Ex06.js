//declaracão de variáveis
var usuarioSNome;
var usuarioSNomeMaiusculas;
var numLetrasSNome;

//declaração de variável e atribuição direta de valor
var questaoSNome = "Qual seu último sobrenome ?";

//A variável questaoSNome exibe seu valor para o usuário window.prompt()
//O valor de usuarioSNome é atribuído a usuarioSNome pelo usuário via window.prompt()
usuarioSNome = window.prompt(questaoSNome);

//O valor string da variável usuarioSNome é colocado em letras maiúsculas pelo método .toUpperCase()
//O resultado gerado é atribuído à variável usuarioSNomeMaiusculas  
usuarioSNomeMaiusculas = usuarioSNome.toUpperCase();

//A variavel usuarioSNome tem o seu número de caracteres contados pelo método .lenght
//O resultado gerado é atribuído à variável numLetrasSNome
numLetrasSNome = usuarioSNome.length;

//É exibido ao usuário pelo window.alert o valor das vairiáveis usuarioSNomeMaiusculas e numLetrasSNome
window.alert("Olá, " +  usuarioSNomeMaiusculas + ". " + "Seu sobrenome contém " + numLetrasSNome + " letras.");