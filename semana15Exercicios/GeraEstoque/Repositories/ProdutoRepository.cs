namespace GeraEstoque.Repositories;
using GeraEstoque.Models;

public class ProdutoRepository {

    public IList<Produto> Produtos { get; set; }

  public ProdutoRepository()
  {
    Produtos = new List<Produto>();
  }


}