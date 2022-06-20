namespace GeraEstoque.Models;

public class Produto
{
    public string codigoId;
    public string nomeProduto;
    public ushort quantidadeProduto;
    public decimal precoCompra;
    public decimal precoVenda;

    public Produto() { }

    public Produto(string np, ushort qp, decimal pc, decimal pv)
    {
        codigoId = Guid.NewGuid().ToString().Substring(0, 8);
        nomeProduto = np;
        quantidadeProduto = qp;
        precoCompra = pc;
        precoVenda = pv;
    }

    public override string ToString()
    {
        return string.Format("Produto: codigoId: {0} | Nome: {1} | Qtd: {2}| R$ Compra: {3:c} | R$ Venda: {4:c}",
          codigoId,
          nomeProduto,
          quantidadeProduto,
          precoCompra,
          precoVenda
        );
    }

}