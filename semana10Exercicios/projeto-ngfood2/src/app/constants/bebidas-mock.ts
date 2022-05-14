import { IBebida } from "../models/bebida.model";

  
  export const LISTA_BEBIDAS_MOCK: IBebida[] = [
    {
      id:1,
      titulo: "BEBIDA 1",
      enderecoImagem:"/assets/agua.jpg",
      descricao:"Bebida 1 descrição.This is a wider card with supporting text below as a natural lead-in to additional content.",
      valor: 3
    },
    {
      id:2,
      titulo: "BEBIDA 2",
      enderecoImagem: "/assets/guarana.jpg",
      descricao:"Bebida 2 descrição. This is a wider card with supporting text below as a natural lead-in to additional content",
      valor: 4
    }
  ];