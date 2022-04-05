/*
Dentro da classe Pedido, adicione um método adicionarProduto, que recebe como argumento 
um objeto do tipo Produto ( caso deseje, você pode realizar 
uma validação utilizando o operador instanceof).
Este método deve adicionar (push) à propriedade listaProdutos o produto passado como argumento.
*/

class Produto {
    constructor (nomeProduto, preco, emEstoque, quantidade){
    this.nomeProduto = nomeProduto;
    this.preco = preco;
    this.emEstoque = emEstoque;
    this.quantidade = quantidade;
    };
};

class Pedido {
    constructor(numeroPedido, dataPedido, estaPago, listaProdutos, nomeCliente){
    this.numeroPedido = numeroPedido;
    this.dataPedido = new Date().toLocaleDateString();
    this.estaPago = false;
    this.listaProdutos = [];
    this.nomeCliente = nomeCliente;
    };
    adicionaProduto(itemLista){
        this.listaProdutos.push(itemLista);
    };
};
const produtoA = new Produto("celular",1780,5,1);
console.log(produtoA);
console.log("");
const pedidoA = new Pedido();
pedidoA.adicionaProduto(produtoA);
pedidoA.nomeCliente = "Franklin Ramos";
pedidoA.numeroPedido = 234;
console.log(pedidoA);