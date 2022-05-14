import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBebida } from '../models/bebida.model';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  // bebidas:IBebida[] = [
  //   {
  //     id:1,
  //     titulo: "BEBIDA 1",
  //     enderecoImagem:"/assets/agua.jpg",
  //     descricao:"Bebida 1 descrição.This is a wider card with supporting text below as a natural lead-in to additional content.",
  //     valor: 3
  //   },
  //   {
  //     id:2,
  //     titulo: "BEBIDA 2 fakelist",
  //     enderecoImagem: "/assets/guarana.jpg",
  //     descricao:"Bebida 2 descrição. This is a wider card with supporting text below as a natural lead-in to additional content",
  //     valor: 4
  //   }
  // ]

  constructor(private http: HttpClient) { }

  devolverBebidas():Observable<IBebida[]>{
    return this.http.get<IBebida[]>("http://localhost:3000/bebidas");    
  }

  // adicionarBebidas(bebida:IBebida):Observable<IBebida>{
  //   return this.http.post<IBebida>("http://localhost:3000/bebidas", bebida);    
  // }
}
