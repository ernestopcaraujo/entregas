using System;

namespace Ex001{

    public class SalarioEmpregado : Empregado {

        public int codigoFuncionario {get; set;}
        public double valorSalario {get; set;}

        public SalarioEmpregado (){

        }
          
        public SalarioEmpregado(string nome, int id, int codigoFuncionario, double valorSalario) : base (nome, id, codigoFuncionario) {
            this.codigoFuncionario = codigoFuncionario;
            this.valorSalario = valorSalario;
        }

        public double CalcularFolhaPagamento(double valorSalario){

            return valorSalario;
        }

    }

}