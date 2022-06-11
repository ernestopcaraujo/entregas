// Iremos implementar apenas o cadastramento do produto nesta semana. Imprima no console a mensagem “Seja bem vindo” e, em seguida, imprima um menu com as seguintes opções:

// ```bash
// Seja bem vindo ao GeraEstoque 1.0
// ----------------------------------------
// 1  Cadastrar produto
// 2  Consultar produto
// 3  Modificar produto
// 4  Excluir produto
// 0  Sair

// Digite a opção: 
// ```



namespace GeraEstoque;

public static class Menu {

    public static void BgColor() {
        // Console.BackgroundColor = ConsoleColor.DarkCyan;
    }

    public static void DrawLine(){
        for(int i=0;i<58;i++){
            Console.Write("-");
        }
        Console.WriteLine();
    }

    public static void Opcoes() {
        Console.Clear();
        Console.WriteLine("Seja Bem-Vindo ao GERA-ESTOQUE 1.0 - © DEVinHouse NDD Team");
        DrawLine();
        // DrawLeftLine();
        Console.SetCursorPosition(2,3);
        Console.WriteLine("Digite o número da opçao desejada:");
        Console.WriteLine();
        Console.SetCursorPosition(2,5);
        Console.WriteLine("1  Cadastrar produto");
        Console.SetCursorPosition(2,6);
        Console.WriteLine("2  Consultar produto");
        Console.SetCursorPosition(2,7);
        Console.WriteLine("3  Modificar produto");
        Console.SetCursorPosition(2,8);
        Console.WriteLine("4  Excluir produto");
        Console.SetCursorPosition(2,9);
        Console.WriteLine("0  Sair");
        Console.SetCursorPosition(2,11);
        Console.Write("Opçao Digitada: ");
        var opcao = Console.Read();
        DrawLine();
    }
}