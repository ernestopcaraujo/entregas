/*import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menus } from './menus';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private _httpClient: HttpClient) { }

  private url = "http://localhost:3000/menus";
  getMenus(): Observable<Menus[]>{
    return this._httpClient.get<Menus[]>(this.url); 
  }
}*/
