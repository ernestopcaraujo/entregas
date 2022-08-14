using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace ApiMusicasEF.Models;

public class Album {

    public int Id {get;set;}
    public string Nome {get;set;}
    public int AnoLancamento { get; set; }
    public string CapaUrl { get; set; }

    //public int ArtistaId { get; set; }
    //public virtual Artista Artista { get; set; }
    //public virtual List<Musica> Musicas { get; set; }

}
