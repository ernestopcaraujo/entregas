using CobrarCruso;
namespace Sem16;


public class Program {


public static void Main(string[] args)
{
    
    Console.Clear();
    string nome = Console.ReadLine();
    DateTime dataNascimento = DateTime.Parse(Console.ReadLine());
    string curso = Console.ReadLine();
    string escolaridade = Console.ReadLine();
    decimal valorCurso = Convert.ToDecimal(Console.ReadLine());
    decimal valorDesconto = Convert.ToDecimal(Console.ReadLine());
    decimal valorMulta = Convert.ToDecimal(Console.ReadLine());

    var Ficha = new FichaInscricao(nome, dataNascimento, curso, escolaridade, valorCurso, valorDesconto, valorMulta);
    Console.WriteLine(Ficha.Nome);
    Console.WriteLine(Ficha.DataNascimento);
    Console.WriteLine(Ficha.Idade);
    Console.WriteLine(Ficha.Curso);
    Console.WriteLine(Ficha.Escolaridade);
    Console.WriteLine(Ficha.ValorCurso);
    Console.WriteLine(Ficha.ValorDesconto);
    Console.WriteLine(Ficha.ValorMulta);

    if (Ficha.ValorDesconto == 0){
        
        FormatarTexto.Formatacao(Ficha.Nome, Ficha.Curso, Ficha.ValorCurso);
    }
    if (Ficha.ValorDesconto > 0 && Ficha.Idade <= 18){

        FormatarTexto.Formatacao(Ficha.Nome, Ficha.Curso, Ficha.ValorCurso, Ficha.ValorDesconto);
    }

    if (Ficha.ValorDesconto > 0 && Ficha.Idade >18){

        FormatarTexto.Formatacao(Ficha.Nome, Ficha.Curso, Ficha.ValorCurso, Ficha.ValorDesconto, Ficha.Idade);
    }

    CobrarCurso.Calculo(Ficha.ValorCurso, Ficha.ValorDesconto, Ficha.ValorMulta);
    Console.Write(CobrarCruso.Resultado);
}

}