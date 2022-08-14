using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace ApiMusicasEF.Models;

public class Musica {
    public int Id { get; set; }
    public string Nome { get; set; }
    public TimeSpan Duracao { get; set; }

    //public int? AlbumId { get; set; }
    //public int ArtistaId { get; set; }
    //public virtual Artista Artista { get; set; }
    //public virtual Album Album { get; set; }
}