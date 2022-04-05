/*Crie 5 instâncias de produtos, com as características que desejar.

Crie 2 instâncias de pedidos. O primeiro pedido deve ter o número '20220001' 
e o nome do cliente à sua escolha. O segundo pedido deve ser o '20220002'.

Utilizando o método adicionarProduto, adicione 3 dos 5 produtos ao pedido '20220001' e, 
o restante, ao pedido '20220002'.
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
    constructor(numeroPedido, nomeCliente){
    this.numeroPedido = numeroPedido;
    this.dataPedido = new Date().toLocaleDateString();
    this.estaPago = false;
    this.listaProdutos = [];
    this.nomeCliente = nomeCliente;
    };
    adicionaProduto(itemLista1){
        this.listaProdutos.push(itemLista1);
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

const produtoA = new Produto("Monitor LG", 770, 5, 20);
const produtoB = new Produto ("Mouse Óptico", 150, 8, 3);
const produtoC = new Produto ("Mouse Gamer", 250, 15, 40);
const produtoD = new Produto ("Mochila Notebook", 190, 20, 50);
const produtoE = new Produto ("Notebook Dell", 2500, 10, 4);

const pedido01 = new Pedido (20220001,"Roberto");
const pedido02 = new Pedido (20220002,"Ana Cláudia");

let i;
const arrayProdutosPedido01 = [produtoA,produtoB,produtoC];
for (i=0;i<arrayProdutosPedido01.length;i++){
    pedido01.adicionaProduto(arrayProdutosPedido01[i]);
    };
const arrayProdutosPedido02 = [produtoD,produtoE];
for (i=0;i<arrayProdutosPedido02.length;i++){
    pedido02.adicionaProduto(arrayProdutosPedido02[i]);
    };

console.log(pedido01);
console.log(pedido02);