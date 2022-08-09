//using ApiMusicas.Api.DTOs;
using ApiMusicas.Api.Models;
using ApiMusicas.Api.Repositorios;
using Microsoft.AspNetCore.Mvc;

namespace ApiMusicas.Controllers;

[ApiController]
[Route("api/albuns")]
public class AlbunsController : ControllerBase
{
    
    private readonly AlbumRepositorio _albumRepositorio;
    public AlbunsController (AlbumRepositorio albumRepositorio)
    {
        _albumRepositorio = albumRepositorio;
    }


    [HttpGet]
    public ActionResult<Album> Get(){ //pode ser feito também com List<Album>
        return Ok(_albumRepositorio.ObterTodos());//mas tem que tirar os parentesis e o "Ok"
        //desse return aqui
    }


    // [HttpPost]

    // [HttpPut("{idArtista}")]

    // [HttpDelete("{idArtista}")]

}
