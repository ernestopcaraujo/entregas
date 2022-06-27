namespace Sem16;

// Formatação 1 - Nome, Curso, Valor Curso
// Formatação 2 - Nome, Curso, Valor Curso, Valor Desconto
// Formatação 3 - Nome, Curso, Valor Curso, Valor Desconto, Idade

// Regra
// Se desconto for igual que zero utilizar Formatação 1
// Se desconto for maior que zero utilizar Formatação 2
// Se desconto for maior que zero e idade menor que 18 anos utilizar Formatação 3


public static class FormatarTexto
{
    public static void Formatacao(string nome, string curso, decimal valorCurso)
    {
        Console.Write("Tipo 1");
    }

    public static void Formatacao(
        string nome,
        string curso,
        decimal valorCurso,
        decimal valorDesconto
    )
    {
         Console.Write("Tipo 2");
    }

    public static void Formatacao(
        string nome,
        string curso,
        decimal valorCurso,
        decimal valorDesconto,
        byte idade
    )
    {
         Console.Write("Tipo 3");
    }
}
