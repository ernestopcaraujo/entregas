using System.ComponentModel.DataAnnotations;
namespace ApiMusicas.Api.Models;

public class Musica
{
    public int Id { get; internal set; }
    public string Nome { get; set; }
    public int Duracao { get; set; }
    public Album Album { get; set; } //essa propriedade pode ser NULL já que uma música...
    // ...pode ou não pertencer a um album, segundo o pede o exercicio.
    public Artista Artista { get; set; } // aqui é obrigatorio que uma música pertença...
    //... a um artista.

    public Musica (string nome, int duracao, Album album, Artista artista)
    {
        Nome = nome;
        Duracao = duracao;
        Album = album;
        Artista = artista;
    }

}