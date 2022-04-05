/*

Estas classes criadas durante os exercícios estão prontas para serem utilizadas
em uma aplicação real. Por exemplo: podemos criar um sistema de pedidos, e, 
através da propriedade **listaProdutos**, podemos realizar uma iteração nos produtos de 
determinado pedido e imprimir cada um deles em tela.

Podemos chamar o método **calcularTotal** para exibir em tela 
o valor total de um determinado pedido.
A princípio, vamos apenas exibir essas informações no console. 
Usando o método de array **forEach**, faça um console.log em cada um dos produtos 
de cada um dos pedidos. O texto de saída pode ser qualquer um, à seu critério. Por exemplo:

` Produto: ${produto.nome} | Valor un: ${produto.preco} | Total: ${produto.preco * produto.quantidade} `  

Faça também um console.log para exibir o valor total de cada pedido. Exemplo:

`Preço total do pedido: R$ ${pedido.calcularTotal( )}`

Dica: você pode utilizar o **toLocaleString** em um número para formata-lo como moeda. 
[Dê uma olhadinha neste link...](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)
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

const pedido01 = new Pedido (20220001,"Roberto Miller - CPF 123.456.789-00");
const pedido02 = new Pedido (20220002,"Ana Cláudia Rudders - CPF 246.802.468-02");

let i;
const arrayProdutosPedido01 = [produtoA,produtoB,produtoC];
for (i=0;i<arrayProdutosPedido01.length;i++){
    pedido01.adicionaProduto(arrayProdutosPedido01[i]);
    };
const arrayProdutosPedido02 = [produtoD,produtoE];
for (i=0;i<arrayProdutosPedido02.length;i++){
    pedido02.adicionaProduto(arrayProdutosPedido02[i]);
    };
console.log("=========================================================================");

function exibeLista (item, index, arr){
    let subTotal = (arr[index].preco * arr[index].quantidade).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    console.log(`   Produto: ${arr[index].nomeProduto} | Valor un: ${arr[index].preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} | Total: ${subTotal} `);
};

console.log("Cliente: " + pedido01.nomeCliente);
console.log("Número do Pedido: " + pedido01.numeroPedido);
pedido01.listaProdutos.forEach(exibeLista);
console.log("   Valor Total do Pedido: " + pedido01.calcularTotal().toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
console.log("=========================================================================");

console.log("Cliente: " + pedido02.nomeCliente);
console.log("Número do Pedido: " + pedido02.numeroPedido);
pedido02.listaProdutos.forEach(exibeLista);
console.log("   Valor Total do Pedido: " + pedido02.calcularTotal().toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
console.log("=========================================================================");
//abaixo são mostrados os conteúdos dos pedidos
console.log(pedido01);
console.log(pedido02);