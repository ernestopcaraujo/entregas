using System;

namespace GeraEstoque;

class Operacoes {

    public static void Opcoes (short operacao){
        switch (operacao){
            case 1:  CadastrarProduto(); break;
            case 2:  Console.Clear(); Environment.Exit(0); break;
            case 3:  Console.Clear(); Environment.Exit(0); break;
            case 4:  Console.Clear(); Environment.Exit(0); break;
            case 0:  Console.Clear(); Environment.Exit(0); break;
        default: break;
        }
    }

    public static void CadastrarProduto(){

        Console.Clear();
        Console.WriteLine("Seja Bem-Vindo ao GERA-ESTOQUE 1.0 - © DEVinHouse NDD Team");
        Menu.DrawLine();
        // DrawLeftLine();
        Console.SetCursorPosition(2,3);
        Console.WriteLine("Cadastre o produto com as informações abaixo:");
        Console.WriteLine();
        Console.SetCursorPosition(2,6);
        Console.Write("Nome do Produto: ");
        string nomeProduto = Console.ReadLine();
        Console.SetCursorPosition(2,7);
        Console.Write("Quantidade em Estoque: ");
        ushort quantidadeProduto = ushort.Parse(Console.ReadLine());
        Console.SetCursorPosition(2,8);
        Console.Write("Preço de Compra: ");
        decimal precoCompra = decimal.Parse(Console.ReadLine());
        Console.SetCursorPosition(2,9);
        Console.Write("Preço de Venda: ");
        decimal precoVenda = decimal.Parse(Console.ReadLine());
        var codigoId = Guid.NewGuid().ToString().Substring(0,8);
        Console.SetCursorPosition(2,10);
        Console.Write("Código ID do Produto: ");
        Console.Write(codigoId);
        Console.WriteLine();
        Console.WriteLine();
        Console.WriteLine();
        Console.Write("-----Produto Casdastrado Com Sucesso !!-----");
        Console.WriteLine();
        Console.WriteLine();
        Console.WriteLine("Pressione qualquer tecla para retornar ao menu.");
        Console.WriteLine();
        Menu.DrawLine();
        Console.ReadKey();
        Menu.Opcoes();
        
        
    }
}