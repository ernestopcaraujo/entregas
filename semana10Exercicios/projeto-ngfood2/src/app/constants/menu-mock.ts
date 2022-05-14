import { IMenu } from "../models/menu.model";

export const LISTA_MENU_MOCK: IMenu[] = [
    {
      id:1,
      titulo: "COMIDAS",
      enderecoImagem: "/assets/refeicoes.jpg",
      descricao:"Comidas. This is a wider card with supporting text below as a natural lead-in to additional content.",
      path:"/comidas"
    },
    {
      id:2,
      titulo: "BEBIDAS",
      enderecoImagem: "/assets/bebidas.jpg",
      descricao:"Bebidas. This is a wider card with supporting text below as a natural lead-in to additional content.",
      path:"/bebidas"
    }
  ];