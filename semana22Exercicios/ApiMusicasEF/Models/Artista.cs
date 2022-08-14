using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace ApiMusicasEF.Models;

    public class Artista
    {
    public int Id { get; set; }
    public string Nome { get; set; }
    public string NomeArtistico { get; set; }
    public string FotoUrl { get; set; }

    //public virtual List<Musica> Musicas { get; set; }
    //public virtual List<Album> Albuns { get; set; }
    }