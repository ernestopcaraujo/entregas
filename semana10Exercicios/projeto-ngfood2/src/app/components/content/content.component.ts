import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/models/menu.model';
import { IBebida } from 'src/app/models/bebida.model';
import { IComida } from 'src/app/models/comida.model';
import { LISTA_BEBIDAS_MOCK } from 'src/app/constants/bebidas-mock';
import { LISTA_COMIDAS_MOCK } from 'src/app/constants/comidas-mock';
import { LISTA_MENU_MOCK } from 'src/app/constants/menu-mock';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

listaMenu: IMenu[] = LISTA_MENU_MOCK;

// listaComidas: IComida[] = LISTA_COMIDAS_MOCK;

// listaBebidas: IBebida[] = LISTA_BEBIDAS_MOCK;

  constructor(private route: Router) { }

  ngOnInit(): void {

  }
  redirecionar(path: string) {
    this.route.navigateByUrl(path);
  }

}
