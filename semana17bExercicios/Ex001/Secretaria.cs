using System;

namespace Ex001{

    public class Secretaria : SalarioEmpregado{

        public int qtdAnosEmpresa {get; set;}

        public Secretaria(){}

        public Secretaria(string nome, int id, int codigoFuncionario, double valorSalario, int qtdAnosEmpresa): base (nome, id, codigoFuncionario, valorSalario){
            this.qtdAnosEmpresa = qtdAnosEmpresa;
        }

        public void AtenderCliente(){
            System.Console.WriteLine("Metodo Atender Cliente");
        }

        public void RealizarLigacoes(){
            System.Console.WriteLine("Metodo Realizar Ligacões");
        }

    }
}