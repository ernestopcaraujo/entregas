import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { Produto } from 'src/assets/exercicio09';
import { __classPrivateFieldGet } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, Produto {
  
  title = 'projeto-ex9';
  valorTotal: number = 0;

  nome: string = "";
  valor: number = 0;
  codigo: number = 0;
  quantidadeEstoque: number = 0;
  emEstoque: boolean = true;

  sofa: Produto = {
    nome: "Sofá 4 lugares",
    valor: 120,
    codigo: 1,
    quantidadeEstoque: 30,
    emEstoque: true,

    comprar(produto:Produto,quantidadeComprada:number):any{},
  }

  constructor (){}

  ngOnInit():void {
    this.comprar(this.sofa,40);    
  }

  comprar(produto:Produto,quantidadeComprada:number):any{
    if (quantidadeComprada>produto.quantidadeEstoque){
      window.alert("Compra excede estoque !");
    }else {
      if(produto.emEstoque==true){
        this.valorTotal = produto.valor*quantidadeComprada;
        produto.quantidadeEstoque = produto.quantidadeEstoque - quantidadeComprada;
        if (produto.quantidadeEstoque == 0 ){
          produto.emEstoque = false;
          window.alert("Você comprou todo o estoque deste produto");
        }
      }
    }
  }
}


/*class Ex9 implements Produto {
  
  nome: string;
  valor: number;
  codigo: number;
  quantidade: number;
  emEstoque: boolean;

  constructor (n:string,v:number,c:number,q:number,ee:boolean){
    this.nome = n;
    this.valor = v;
    this.codigo = c;
    this.quantidade = q;
    this.emEstoque = ee;
  }

  comprar():any{
     
  }
}*/

/*sofa: Produto = {
  nome: "Sofá 4 lugares",
  valor: 120,
  codigo: 1,
  quantidade: 30,
  emEstoque: true
};*/
