using GeraEstoque;
namespace GeraEstoque.Screens;

public static class CriarProdutosScreen {

    public static void Iniciar()
    {
        Console.WriteLine();
        Console.Clear();
        Console.WriteLine("Seja Bem-Vindo ao GERA-ESTOQUE 1.0 - © DEVinHouse NDD Team");
        MenuScreen.DrawLine();
        // DrawLeftLine();
        Console.SetCursorPosition(2, 3);
        Console.WriteLine("Cadastre o produto com as informações abaixo:");
        Console.WriteLine();
        Console.SetCursorPosition(2, 6);
        Console.Write("Nome do Produto: ");
        string nomeProduto = Console.ReadLine();
        Console.SetCursorPosition(2, 7);
        Console.Write("Quantidade em Estoque: ");
        ushort quantidadeProduto = ushort.Parse(Console.ReadLine());
        Console.SetCursorPosition(2, 8);
        Console.Write("Preço de Compra: ");
        decimal precoCompra = decimal.Parse(Console.ReadLine());
        Console.SetCursorPosition(2, 9);
        Console.Write("Preço de Venda: ");
        decimal precoVenda = decimal.Parse(Console.ReadLine());
        var codigoId = Guid.NewGuid().ToString().Substring(0, 8);
        Console.SetCursorPosition(2, 10);
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
        MenuScreen.DrawLine();
        Console.ReadKey();
        MenuScreen.OpcoesMenu();
    }
    
}