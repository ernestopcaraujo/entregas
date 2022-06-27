namespace Sem16;

public class FichaInscricao {

public string Nome;
public DateTime DataNascimento;
public byte Idade;
public string Curso;
public string Escolaridade;
public decimal ValorCurso;
public decimal ValorDesconto;
public decimal ValorMulta;

public FichaInscricao(string nome, DateTime dataNascimento, string curso, string escolaridade, decimal valorCurso, decimal valorDesconto, decimal valorMulta){
    Nome = nome;
    DataNascimento = Convert.ToDateTime(dataNascimento);
    Idade = CalculaIdade(DataNascimento);
    Curso = curso;
    Escolaridade = escolaridade;
    ValorCurso = valorCurso;
    ValorDesconto = valorDesconto;
    ValorMulta = valorMulta;
}

public static byte CalculaIdade(DateTime dataNascimento){

    byte idade = (byte)(DateTime.Now.Year - dataNascimento.Year);
    if (DateTime.Now.Month < dataNascimento.Month && DateTime.Now.Day < dataNascimento.Day){
        idade = (byte)(idade - 1);
    }
    
    return idade;
}


}