using ApiMusicas.Api.Models;
namespace ApiMusicas.Api.Repositorios;

public class AlbumRepositorio {
private static int _indiceId = 1; //declaração e incialização da propriedade ID do Artista
private static List<Album> _albuns = new(); //declaração e instanciação da lista de Artistas

    public Album Criar(Album album){

        album.Id = _indiceId; //parametro local artista que contém o objeto artista... 
        //...que está sendo enviado pelo usuário recebe um ID
        _indiceId++; // incrementado o valor da propriedade "global" ID para uso num novo registro 

        _albuns.Add(album); //o objeto artista que vai para a Lista de Artistas é adicionado...
        //...ao na lista e já está devidamente identificado com o ID recebido.

        return album; // retorno do objeto criado neste método
    }

    public Album Atualizar(int id, Album album){ //Esse artista aqui é o enviado pelo usuário

        var albumExistente = _albuns //o artistaExistente é o artista que estamos buscando...
        //...através do ID e que irá receber as autualizações.

            .FirstOrDefault(albunsLista => albunsLista.Id == id);

        if(albumExistente == null) return null;

        albumExistente.Nome = album.Nome;
        albumExistente.AnoLancamento = album.AnoLancamento;
        albumExistente.CapaUrl = album.CapaUrl;
        albumExistente.Artista = album.Artista;

        return albumExistente; // <-- pode ter um erro aqui. talvez seja artistaExistente
    }

    public void Remover(int albumId){

       var albumExistente = _albuns
                .FirstOrDefault(albumLista => albumLista.Id == albumId);

       _albuns.Remove(albumExistente);
    }

    
    public List<Album> ObterTodos()//(string filtro)
    {
        // if(!string.IsNullOrEmpty(filtro)){
        //     return _artistas
        //         .Where(a => a.Nome.Contains(filtro) || a.NomeArtistico.Contains(filtro))
        //         .ToList();
        // }

        return _albuns;
    }

        public Album ObterPorId(int albumId)
    {
        return _albuns.FirstOrDefault(a => a.Id == albumId);
    }

}
