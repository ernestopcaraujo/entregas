import { Component, EventEmitter, Input,/*, OnInit,*/Output} from '@angular/core';
import { IComida } from 'src/app/models/comida.model';
import { IBebida } from 'src/app/models/bebida.model';

@Component({
  selector: 'app-item-cardapio',
  templateUrl: './item-cardapio.component.html',
  styleUrls: ['./item-cardapio.component.css']
})
export class ItemCardapioComponent /*implements OnInit*/ {

 @Input() item?: IComida | IBebida;

 @Output() adicionaAoPedido = new EventEmitter<IComida | IBebida>();

  constructor() { }

  // ngOnInit(): void {
  // }

  adicionarAoPedido(){
    this.adicionaAoPedido.emit(this.item);
  }

}
