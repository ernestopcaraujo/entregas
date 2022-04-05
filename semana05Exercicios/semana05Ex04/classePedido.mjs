/* Crie uma classe Pedidos, com as propriedades numeroPedido, dataPedido, estaPago, 
listaProdutos e nomeCliente.
Utilize o método construtor para que, a cada instancia dessa classe, um número do pedido 
e o nome do cliente seja informado, a **dataPedido** seja a 
data atual ( *new Date( ).toLocaleDateString( )* ), 
o **estaPago** seja falso e a **listaProdutos** seja um array vazio.
*/

class Pedido {
    constructor(numeroPedido, nomeCliente){
    this.numeroPedido = numeroPedido;
    this.dataPedido = new Date().toLocaleDateString();
    this.estaPago = false;
    this.listaProdutos = [];
    this.nomeCliente = nomeCliente;
    console.log("Numero do Pedido: " + this.numeroPedido);
    console.log("Nome do Cliente: " + this.nomeCliente);
    };
};

let umPedido = new Pedido();
console.log(umPedido);