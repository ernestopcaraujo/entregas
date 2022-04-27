
/*const cepSol = document.getElementById("cepSol").value;
console.log(cepSol);
const mensagem = document.getElementById("mostraMensagemErro");
const fetchAPI = async () => {
    const response = await fetch (`https://viacep.com.br/ws/${cepSol}/json/`);
    if(!response.ok){
        const err = await response.json();
        mostraMensagemErro.innerHTML = ("Erro de sistema: " + err.message);
    }
    else{
        const dadosCEP = await response.json();
    };
};
*/



function preencherFormulario(endereco){
    let a = document.getElementById("rua");
    a.innerHTML = endereco.logradouro;
};

const pesquisarCEP = async() => {
    const cep = document.getElementById("cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherFormulario(endereco);    
};

//document.getElementById("cep").addEventListener("focusout",pesquisarCEP);