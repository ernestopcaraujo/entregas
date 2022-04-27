import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Bebidas } from '../utils/Bebidas';
import { BEBIDAS_MOCK } from '../utils/bebidas-mock';

@Component({
  selector: 'ngf-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent implements OnInit {

  listaBebidas: Bebidas[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Bebidas[]>("http://localhost:3000/bebidas").subscribe((resultado) => {
      this.listaBebidas=resultado;
    });
  }

}
