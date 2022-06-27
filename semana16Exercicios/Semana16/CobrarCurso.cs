namespace Sem16;

public class CobrarCruso{
    
    private decimal ValorCurso;
    private decimal ValorDesconto;
    private decimal ValorMulta;
    public decimal Resultado;

    private decimal Calculo(decimal valorCurso, decimal valorDesconto, decimal valorMulta){
        
        if (valorMulta>0){
            Resultado = valorCurso+valorMulta;
        }
        if (valorMulta==0){
            Resultado = valorCurso-valorDesconto;
        }

    }
}