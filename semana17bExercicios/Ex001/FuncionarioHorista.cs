namespace Ex001;

    public class FuncionarioHorista : Empregado {

        public string? cnpj {get; set;}
        public double taxa {get; set;}

        public FuncionarioHorista (){}
          
        public FuncionarioHorista(string nome, int id, string cnpj, double taxa) : base (nome, id) {
            this.cnpj = cnpj;
            this.taxa = taxa;
        }

        public void CalcularTaxas(){

           Console.WriteLine("Metodo Calcular Taxas");
        }

        public void EmitirNota(){

         Console.WriteLine("Metodo Emitir Nota");
        }    

}