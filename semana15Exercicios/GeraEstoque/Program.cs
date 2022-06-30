using System;
using GeraEstoque.Screens;
using GeraEstoque.Repositories;
namespace GeraEstoque;

class Program
{

    static void Main(string[] args)
    {
        var repository = new ProdutoRepository();
        MenuScreen.Iniciar(repository);
    }
}