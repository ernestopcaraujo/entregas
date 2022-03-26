/*
- Dado o array de cidades abaixo verificar se o array contém pelo menos uma cidade com o nome Florianópolis. 
- Deve ser retornado true filtrando por 'Florianópolis' ou 'florianópolis'.

const cidades = [
  { nome: 'Patos de Minas', populacao: 153585 },
  { nome: 'Lages', populacao: 157349 },
  { nome: 'Ibiúna', populacao: 79479 },
  { nome: 'Maringá', populacao: 403063 },
  { nome: 'Curitiba', populacao: 1963726 },
  { nome: 'Florianópolis', populacao: 508826 },
  { nome: 'Pato Branco', populacao: 84779 },
];

_Dica: Para resolver os problemas de maiúsculo e minúsculo de uma olhada em toLowerCase e toUpperCase_
*/
const cidades = [
  { nome: 'Patos de Minas', populacao: 153585 },
  { nome: 'Lages', populacao: 157349 },
  { nome: 'Ibiúna', populacao: 79479 },
  { nome: 'Maringá', populacao: 403063 },
  { nome: 'Curitiba', populacao: 1963726 },
  { nome: 'Florianópolis', populacao: 508826 },
  { nome: 'Pato Branco', populacao: 84779 }
];

console.log("");
console.log("-----Mostra o Array Original --------");
console.log(cidades);

function exec (nomeProcurado){
    const nomeEncontrado = cidades.find( function verGrafia(np){
         if (np.nome==nomeProcurado) {
            return np.nome;
         };
          if (np.nome==nomeProcurado.toLowerCase()){
            return np.nome;
          };
      });
console.log("");
console.log("-----Se a propriedade nome estiver grafada com a primeira letra em maiúscula--------");
console.log("");
console.log(nomeEncontrado.nome);
}
let mostra = exec ("Florianópolis");

//o objetivo do uso desse outro array (cidades2) e da repetição do código
//foi mostrar que o código funciona com ambas as grafias do nome da cidade procuardo
const cidades2 = [
  { nome: 'Patos de Minas', populacao: 153585 },
  { nome: 'Lages', populacao: 157349 },
  { nome: 'Ibiúna', populacao: 79479 },
  { nome: 'Maringá', populacao: 403063 },
  { nome: 'Curitiba', populacao: 1963726 },
  { nome: 'florianópolis', populacao: 508826 },
  { nome: 'Pato Branco', populacao: 84779 }
];

console.log("");
console.log("-----Mostra um Array que teria o nome da cidade em minúsculas --------");
console.log(cidades2);

function minusculas (nomeProcurado){
  const nomeEncontrado = cidades2.find( function verGrafia(np){
       if (np.nome==nomeProcurado) {
          return np.nome;
       };
        if (np.nome==nomeProcurado.toLowerCase()){
          return np.nome;
        };
    });
console.log("");
console.log("-----Se a propriedade nome estiver grafada em minúsculas--------");
console.log("");
console.log(nomeEncontrado.nome);
}

let exibe = minusculas ("florianópolis");
console.log("");
console.log("------Fim do Exercício-------");