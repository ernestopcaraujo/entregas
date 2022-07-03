using System;
namespace Ex001
{
    public class Empregado {
        private int codigoFuncionario;

        public string? nome {get; set;}
        public int id {get; set;}
        public Empregado(){

        }

        public Empregado(string nome, int id){
            this.nome = nome;
            this.id = id;
        }

        public Empregado(string nome, int id, int codigoFuncionario) : this(nome, id)
        {
            this.codigoFuncionario = codigoFuncionario;
        }

        public void Trabalhar(){
            System.Console.WriteLine("Metodo Trabalhar");
        }

        public void IrEmbora(){
            System.Console.WriteLine("Metodo IrEmbora");
        }

        public void TirarFolga(){
            System.Console.WriteLine("Metodo TirarFolga");
        }
    } 
}
