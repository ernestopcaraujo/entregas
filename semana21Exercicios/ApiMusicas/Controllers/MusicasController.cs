//using ApiMusicas.Api.DTOs;
using ApiMusicas.Api.Models;
using ApiMusicas.Api.Repositorios;
using Microsoft.AspNetCore.Mvc;

namespace ApiMusicas.Controllers;

[ApiController]
[Route("api/musicas")]
public class MusicasController : ControllerBase
{

private readonly MusicaRepositorio _musicaRepositorio; //criando a propriedade...
//... _artistaRepositorio como sendo do tipo ArtistaRepositorio...
//... que é a classe criada no repositóirio para os artistas
    
    public MusicasController(MusicaRepositorio repositorio) //Através desse construtor...
    //... passamos o repositório ArtistaRepositório para a propriedade _artistaRepoisitorio
    {
        _musicaRepositorio = repositorio;
    }

    [HttpPost]
    public ActionResult<Musica> Post(
        [FromBody] Musica novaMusica
    ){
        var musica = _musicaRepositorio.Criar(novaMusica);

        return Ok(musica);
    }

    [HttpDelete("{idMusica}")]
    public ActionResult RemoverMusica(
        [FromRoute] int idMusica
    )
    {
        _musicaRepositorio.RemoverMusica(idMusica);

        return NoContent();
    }

    
    [HttpPut("{idMusica}")]
    public ActionResult<Musica> AtualizarMusica(
        [FromBody] Musica musica,
        [FromRoute] int idMusica
    )
    {
    var musicaEditada = _musicaRepositorio.AtualizarMusica(idMusica, musica);
    return Ok(musicaEditada);
    }

    [HttpGet("id/{idMusica}")]
    public ActionResult<Musica> GetById([FromRoute] int idMusica)    
    {
       return Ok(_musicaRepositorio.ObterPorId(idMusica));
    }

    [HttpGet("{idAlbum}")]
    public ActionResult<Musica> ObterPorAlbum(
        [FromRoute] int idAlbum
    )
    {
       return Ok (_musicaRepositorio.ObterPorAlbum(idAlbum));

        //return BadRequest();
        
    }

    
    [HttpGet]
    public List<Musica> Get()
    {
       return _musicaRepositorio.ObterTodos();
    }

}
