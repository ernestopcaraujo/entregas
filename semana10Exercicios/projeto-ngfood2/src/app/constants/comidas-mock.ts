import { IComida } from "../models/comida.model";

export const LISTA_COMIDAS_MOCK : IComida[] = [
    {
      id:1,
      titulo: "COMIDA 1",
      enderecoImagem:"/assets/cheeseburger.jpg",
      descricao:"Comida 1 descrição.This is a wider card with supporting text below as a natural lead-in to additional content.",
      valor: 15
    },
    {
      id:2,
      titulo: "COMIDA 2",
      enderecoImagem:"/assets/pratofeito.jpg",
      descricao:"Comida 2 descrição. This is a wider card with supporting text below as a natural lead-in to additional content",
      valor: 25
    }
  ];