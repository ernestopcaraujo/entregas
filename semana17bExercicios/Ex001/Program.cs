
namespace Ex001{

    public class Program{

   public static void Main(string[] args)
        {
            Empregado empregado1 = new Empregado("Roberto Souza", 8785);
            Empregado empregado2 = new Empregado("Marcela Lopes", 9931);
            FuncionarioHorista horista = new FuncionarioHorista("Paulo Gomes", 7070, "10.222.333/0001-20", 10.0 );
            
            Console.Clear();
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("===================================================");
            Console.WriteLine("DEVinHouse NDD Team ***** Ernesto Araújo ***** 2022");
            Console.WriteLine("===================================================");
            
            Console.WriteLine($"Empregado: "+empregado1.nome);
            Console.WriteLine($"ID: "+empregado1.id);
            SalarioEmpregado salarioEmpregado1 = new SalarioEmpregado(empregado1.nome, empregado1.id, 1077, 3000);
            Console.WriteLine($"Codigo Empregado: "+salarioEmpregado1.codigoFuncionario);
            double salarioEmp1 = salarioEmpregado1.CalcularFolhaPagamento(salarioEmpregado1.valorSalario); 
            Console.WriteLine($"Valor Salário: R$ "+(salarioEmpregado1.CalcularFolhaPagamento(salarioEmpregado1.valorSalario)));
            empregado1.Trabalhar();
            empregado1.IrEmbora();
            empregado1.TirarFolga();
            Console.WriteLine("===================================================");
            
            Console.WriteLine($"Empregado: "+horista.nome);
            Console.WriteLine($"ID: "+horista.id);
            Console.WriteLine($"Codigo Empregado: "+horista.cnpj);
            Console.WriteLine($"Valor Taxa: "+horista.taxa+" %");
            horista.CalcularTaxas();
            horista.EmitirNota();
            Console.WriteLine("===================================================");
           
            Console.WriteLine($"Empregado: "+empregado2.nome);
            Console.WriteLine($"ID: "+empregado2.id);
            SalarioEmpregado salarioEmpregado2 = new SalarioEmpregado(empregado2.nome, empregado2.id, 2077, 2000);
            Console.WriteLine($"Codigo Empregado: "+salarioEmpregado2.codigoFuncionario);
            System.Console.WriteLine($"Salário Secretária: "+salarioEmpregado2.valorSalario);         
            Secretaria secretaria = new Secretaria(empregado2.nome,empregado2.id,salarioEmpregado2.codigoFuncionario,salarioEmpregado2.valorSalario, 1);
            Console.WriteLine($"Tempo na Empresa: "+secretaria.qtdAnosEmpresa);
            secretaria.AtenderCliente();
            secretaria.RealizarLigacoes();
            Console.WriteLine("===================================================");

            Console.ReadLine();
            Console.Clear();
        }
    }
}