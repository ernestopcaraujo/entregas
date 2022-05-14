// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { LISTA_BEBIDAS_MOCK } from 'src/app/constants/bebidas-mock';
import { IBebida } from 'src/app/models/bebida.model';
import { BebidaService } from 'src/app/services/bebida.service';


@Component({
  selector: 'app-bebida-lista',
  templateUrl: './bebida-lista.component.html',
  styleUrls: ['./bebida-lista.component.css']
})
export class BebidaListaComponent implements OnInit {

  listaBebidas: IBebida[] = [];

  constructor(private bebidaService:BebidaService) { }

  ngOnInit(): void {
    this.buscarBebidas();
    
  }

  buscarBebidas() {
    this.bebidaService
    .devolverBebidas()
    .subscribe((resposta:IBebida[])=>{
      this.listaBebidas = resposta});
  }

  // adicionarBebidas() {
  //   const bebida = {
  //     id:this.listaBebidas.length + 1,
  //     titulo: `BEBIDA ${this.listaBebidas.length+1}`,
  //     enderecoImagem: "/assets/suco.jpg",
  //     descricao:"Bebida 3 descrição. This is a wider card with supporting text below as a natural lead-in to additional content",
  //     valor: 40
  //   };
  //   this.bebidaService.adicionarBebidas(bebida).subscribe((resultado:IBebida)=>{
  //     // console.log("resultado: ", resultado);
  //     this.listaBebidas.push(resultado);
  //   });
  // }
}
