//using ApiMusicas.Api.DTOs;
using ApiMusicas.Api.Models;
using ApiMusicas.Api.Repositorios;
using Microsoft.AspNetCore.Mvc;

namespace ApiMusicas.Controllers;

[ApiController]
[Route("api/artistas")]
public class ArtistasController : ControllerBase
{

private readonly ArtistaRepositorio _artistaRepositorio; //criando a propriedade...
//... _artistaRepositorio como sendo do tipo ArtistaRepositorio...
//... que é a classe criada no repositóirio para os artistas
    
    public ArtistasController(ArtistaRepositorio repositorio) //Através desse construtor...
    //... passamos o repositório ArtistaRepositório para a propriedade _artistaRepoisitorio
    {
        _artistaRepositorio = repositorio;
    }

    
    [HttpGet]
    public List<Artista> Get()
    {
       return _artistaRepositorio.ObterTodos();
    }

    [HttpPost]
    public ActionResult<Artista> Post(
        [FromBody] Artista novoArtista
    ){
        var artista = _artistaRepositorio.Criar(novoArtista);

        return Ok(artista);
    }

    [HttpPut("{idArtista}")]
    public ActionResult<Artista> AtualizarArtista(
        [FromBody] Artista artista,
        [FromRoute] int idArtista
    )
    {
    var artistaEditado = _artistaRepositorio.Atualizar(idArtista, artista);
    return Ok(artistaEditado);
    }

    [HttpDelete("{idArtista}")]
    public ActionResult RemoverArtista(
        [FromRoute] int idArtista
    )
    {
        _artistaRepositorio.Remover(idArtista);

        return NoContent();
    }


}
