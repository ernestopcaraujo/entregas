import { Injectable } from '@angular/core';
import { IBebida } from '../models/bebida.model';
import { IComida } from '../models/comida.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  itensPedidoLista: IComida[] | IComida[]=[];

  constructor() { }

  getTotalItensPedido():number{
    return this.itensPedidoLista.length;
  };

  adicionarItemPedido(item:IComida | IBebida){
    this.itensPedidoLista.push(item);
    console.log("LISTA DO PEDIDO: ",this.itensPedidoLista);
  };

  limparPedido(){
    this.itensPedidoLista = [];
  };

  removerItemPedido(id:number){
    const itemIndex = this.itensPedidoLista.findIndex((item)=>item.id === id);
    this.itensPedidoLista.splice(itemIndex,1);
  };

}
