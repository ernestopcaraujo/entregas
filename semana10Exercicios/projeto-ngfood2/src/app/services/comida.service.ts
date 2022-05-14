import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IComida } from '../models/comida.model';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  constructor(private http: HttpClient) { }

  devolverComidas():Observable<IComida[]>{
    return this.http.get<IComida[]>("http://localhost:3000/comidas");    
  }

  // adicionarComidas(comida:IComida):Observable<IComida>{
  //   return this.http.post<IComida>("http://localhost:3000/comidas", comida);    
  // }
}