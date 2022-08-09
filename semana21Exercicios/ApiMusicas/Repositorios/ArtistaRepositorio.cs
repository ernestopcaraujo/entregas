using ApiMusicas.Api.Models;
namespace ApiMusicas.Api.Repositorios;

public class ArtistaRepositorio {
private static int _indiceId = 1; //declaração e incialização da propriedade ID do Artista
private static List<Artista> _artistas = new(); //declaração e instanciação da lista de Artistas

    public Artista Criar(Artista artista){

        artista.Id = _indiceId; //parametro local artista que contém o objeto artista... 
        //...que está sendo enviado pelo usuário recebe um ID
        _indiceId++; // incrementado o valor da propriedade "global" ID para uso num novo registro 

        _artistas.Add(artista); //o objeto artista que vai para a Lista de Artistas é adicionado...
        //...ao na lista e já está devidamente identificado com o ID recebido.

        return artista; // retorno do objeto criado neste método
    }

    public Artista Atualizar(int id, Artista artista){ //Esse artista aqui é o enviado pelo usuário

        var artistaExistente = _artistas //o artistaExistente é o artista que estamos buscando...
        //...através do ID e que irá receber as autualizações.

            .FirstOrDefault(artistaLista => artistaLista.Id == id);

        if(artistaExistente == null) return null;

        artistaExistente.Nome = artista.Nome;
        artistaExistente.NomeArtistico = artista.NomeArtistico;
        artistaExistente.PaisOrigem = artista.PaisOrigem;
        artistaExistente.FotoUrl = artista.FotoUrl;

        return artista; // <-- pode ter um erro aqui. talvez seja artistaExistente
    }

    public void Remover(int id){

       var artistaExistente = _artistas
                .FirstOrDefault(artistaLista => artistaLista.Id == id);

       _artistas.Remove(artistaExistente);
    }

    
    public List<Artista> ObterTodos()//(string filtro)
    {
        // if(!string.IsNullOrEmpty(filtro)){
        //     return _artistas
        //         .Where(a => a.Nome.Contains(filtro) || a.NomeArtistico.Contains(filtro))
        //         .ToList();
        // }

        return _artistas;
    }

}
