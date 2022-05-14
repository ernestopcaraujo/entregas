// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { LISTA_COMIDAS_MOCK } from 'src/app/constants/comidas-mock';
import { IComida } from 'src/app/models/comida.model';
import { ComidaService } from 'src/app/services/comida.service';
import { PedidoService } from  'src/app/services/pedido.service';

@Component({
  selector: 'app-comida-lista',
  templateUrl: './comida-lista.component.html',
  styleUrls: ['./comida-lista.component.css']
})
export class ComidaListaComponent implements OnInit {

  listaComidas: IComida[] = [];

  constructor(private comidaService:ComidaService, private pedidoService:PedidoService) { }

  ngOnInit(): void {
    this.comidaService.devolverComidas().
    subscribe((resultado:IComida[])=>{this.listaComidas = resultado;});

    // this.buscarComidas();
  }
  
  // buscarComidas() {
  //   this.comidaService
  //   .devolverComidas()
  //   .subscribe((resposta:IComida[])=>{
  //     this.listaComidas = resposta});
  // }

  // adicionarComidas() {
  //   const comida = {
  //     id:this.listaComidas.length + 1,
  //     titulo: `COMIDA ${this.listaComidas.length+1}`,
  //     enderecoImagem: "/assets/pastel.jpg",
  //     descricao:"Comida 3 descrição. This is a wider card with supporting text below as a natural lead-in to additional content",
  //     valor: 7
  //   };
  //   this.comidaService.adicionarComidas(comida).subscribe((resultado:IComida)=>{
  //     // console.log("resultado: ", resultado);
  //     this.buscarComidas(); //esse método é mais lento que o push que foi feito no bebidas-lista.component
  //   });
  // }
  adicionarComida(comida:IComida){
    this.pedidoService.adicionarItemPedido(comida);
  }
}
