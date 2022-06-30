using GeraEstoque.Repositories;
namespace GeraEstoque.Screens;
public static class MenuScreen
{

    public static void Iniciar(ProdutoRepository repository)
    {
        OpcoesMenu(repository);
    }



    public static void BgColor()
    {
        // Console.BackgroundColor = ConsoleColor.DarkCyan;
    }

    public static void DrawLine()
    {
        for (int i = 0; i < 58; i++)
        {
            Console.Write("-");
        }
        Console.WriteLine();
    }

    public static void OpcoesMenu(ProdutoRepository repository)
    {
        Console.Clear();
        Console.WriteLine();
        Console.WriteLine("Seja Bem-Vindo ao GERA-ESTOQUE 1.0 - © DEVinHouse NDD Team");
        DrawLine();
        // DrawLeftLine();
        Console.SetCursorPosition(2, 3);
        Console.WriteLine("Digite o número da operação desejada:");
        Console.WriteLine();
        Console.SetCursorPosition(2, 5);
        Console.WriteLine("1  Cadastrar produto");
        Console.SetCursorPosition(2, 6);
        Console.WriteLine("2  Consultar produto");
        Console.SetCursorPosition(2, 7);
        Console.WriteLine("3  Modificar produto");
        Console.SetCursorPosition(2, 8);
        Console.WriteLine("4  Excluir produto");
        Console.SetCursorPosition(2, 9);
         Console.WriteLine("5  Listar produto");
        Console.SetCursorPosition(2, 10);
        Console.WriteLine("0  Sair");
        Console.SetCursorPosition(2, 11);
        Console.WriteLine("Operação Digitada: ");
        DrawLine();
        Console.SetCursorPosition(21, 11);
        var operacao = short.Parse(Console.ReadLine());
        OpLista.OpcoesLista(repository, operacao);
    }
}