using System;
using GeraEstoque.Models;
using GeraEstoque.Repositories;
using GeraEstoque.Screens;

namespace GeraEstoque.Screens;
public static class OpLista{
    public static void OpcoesLista(ProdutoRepository repository, short operacao)
    {
        switch (operacao)
        {
            case 1: CriarProdutosScreen.Iniciar(repository); MenuScreen.Iniciar(repository); break;
            case 2: Console.Clear(); Environment.Exit(0); break;
            case 3: Console.Clear(); Environment.Exit(0); break;
            case 4: Console.Clear(); Environment.Exit(0); break;
            case 5: ListarProdutosScreen.Iniciar(repository); MenuScreen.Iniciar(repository); break;
            case 0: Console.Clear(); Environment.Exit(0); break;
            default: Environment.Exit(0); break;
        }
        
    }
}