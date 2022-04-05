/*
Dentro da classe Pedido, crie outro método, chamado calcularTotal, que deve iterar sobre a listaProdutos 
e retornar o valor total do pedido. Lembre-se de multiplicar a quantidade de cada produto 
pelo seu valor quando realizar a soma (quantidade e valor são propriedades da classe Produto!).
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
    calcularTotal (){
        let somaValor=0;
        let i;
        for (i=0;i<this.listaProdutos.length;i++){
            somaValor = somaValor+(this.listaProdutos[i].preco*this.listaProdutos[i].quantidade);
        }
        return somaValor;
    }
};
const produtoA = new Produto("brinquedo",100,5,10);
const produtoB = new Produto("notebook",2000,5,2);
const produtoC = new Produto("mochila",300,10,20);
const pedido01 = new Pedido();
const arrayProdutosPedido01 = [produtoA,produtoB,produtoC];
let i;
for (i=0;i<arrayProdutosPedido01.length;i++){
    pedido01.adicionaProduto(arrayProdutosPedido01[i]);
    };
pedido01.nomeCliente = "Franklin Ramos";
pedido01.numeroPedido = 234;
console.log(`Cliente: ${pedido01.nomeCliente}`);
console.log(`Numero do Pedido: ${pedido01.numeroPedido}`);
console.log(`Valor Total do Pedido: ${pedido01.calcularTotal().toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
//abaixo é exibido o pedido para mostra o que ele contém
console.log(pedido01);