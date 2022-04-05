/*
Crie uma classe para um Produto, com as seguintes propriedades: **nome**, **preco**,
 **emEstoque**, **quantidade**.
Todas essas propriedades precisam ser recebidas no construtor da classe.
*/

class Produto {
    constructor (nomeProduto, preco, emEstoque, quantidade){
    this.nomeProduto = nomeProduto;
    this.preco = preco;
    this.emEstoque = emEstoque;
    this.quantidade = quantidade;
    };
};

const mostraProduto = new Produto();
mostraProduto.nomeProduto = "MacBook Pro";
mostraProduto.preco = 10990;
mostraProduto.emEstoque = 5;
mostraProduto.quantidade = 1;

console.log(mostraProduto);