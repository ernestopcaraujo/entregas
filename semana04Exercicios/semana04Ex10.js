const contasClientes = [{id: 1,saldo: 500},{id: 2,saldo: 30000},{id: 3,saldo: 50}];

function saqueConta (numeroConta,valorSaque){
    const dadosContaCliente = contasClientes.find( (itemContasClientes)=>itemContasClientes.id == numeroConta );
    let saldoInicial = dadosContaCliente.saldo;
    if (valorSaque<=0){
            console.log("---------------------------------------------------------------");
            console.log("Função SAQUE. Você quis sacar R$ " + valorSaque)
            console.log("Valor inválido. Você digitou um valor negativo ou igual a zero !");
            console.log("Digte um valor positivo."); };
    if (valorSaque > saldoInicial){
        console.log("---------------------------------------------------------------");
        console.log("Função SAQUE")
        console.log("Saldo insuficiente. Você digitou um valor maior que seu saldo em conta !");
        console.log("Seu saldo atual é: " + saldoInicial);
        console.log("Digte um valor menor ou igual a seu saldo !");
        console.log("---------------------------------------------------------------");};
    if ((valorSaque != 0) && (valorSaque>0) && (valorSaque<=saldoInicial)){
        let saldoAtual = saldoInicial - valorSaque;
        for(pArray=0;pArray<contasClientes.length;pArray++){
                if (contasClientes[pArray].id==numeroConta){
                    contasClientes[pArray].saldo = saldoAtual;};};
        console.log("---------------------------------------------------------------");
        console.log("Função SAQUE")
        console.log("Saque concluído. Você sacou R$ " + valorSaque);
        console.log("Seu saldo anterior era R$ " + saldoInicial)
        console.log("Seu saldo atual é R$ " + saldoAtual);
        console.log(contasClientes);
        console.log("---------------------------------------------------------------");};
}

function depositoConta (numeroConta,valorDeposito){
    const dadosContaCliente = contasClientes.find( (itemContasClientes)=>itemContasClientes.id == numeroConta );
    let saldoInicial = dadosContaCliente.saldo;
    if (valorDeposito<=0){
            console.log("---------------------------------------------------------------");
            console.log("Função DEPÓSITO. Você quis depositar R$ " + valorDeposito)
            console.log("Valor inválido. Você digitou um valor negativo ou igual a zero !");
            console.log("Digte um valor positivo."); };

    if (valorDeposito > 0){
        let saldoAtual = saldoInicial + valorDeposito;
        for(pArray=0;pArray<contasClientes.length;pArray++){
                if (contasClientes[pArray].id==numeroConta){
                    contasClientes[pArray].saldo = saldoAtual;};};
        console.log("---------------------------------------------------------------");
        console.log("Função DEPÓSITO")
        console.log("Depósito concluído. Você depositou R$ " + valorDeposito);
        console.log("Seu saldo anterior era R$ " + saldoInicial)
        console.log("Seu saldo atual é R$ " + saldoAtual);
        console.log(contasClientes);
        console.log("---------------------------------------------------------------");};
}

saqueConta(1,-1);
depositoConta(1,100);