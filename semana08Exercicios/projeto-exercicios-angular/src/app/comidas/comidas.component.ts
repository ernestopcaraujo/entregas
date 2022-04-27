import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Comidas } from '../utils/Comidas';
import { COMIDAS_MOCK } from '../utils/comidas-mock';

@Component({
  selector: 'ngf-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.scss']
})
export class ComidasComponent implements OnInit {

  listaComidas: Comidas[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Comidas[]>("http://localhost:3000/comidas").subscribe((resultado) => {
      this.listaComidas=resultado;
    });
  }
}
