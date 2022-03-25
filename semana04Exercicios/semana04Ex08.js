/*- Dado o array de cidades abaixo, filtre apenas as cidades com mais de 200000 habitantes;
- Após o filtro ordene por ordem decrescente de acordo com a população (primeiro cidades mais populosas);

**cidades:** [
  { nome: 'Patos de Minas', populacao: 153585 },
  { nome: 'Lages', populacao: 157349 },
  { nome: 'Ibiúna', populacao: 79479 },
  { nome: 'Maringá', populacao: 403063 },
  { nome: 'Curitiba', populacao: 1963726 },
  { nome: 'Florianópolis', populacao: 508826 },
  { nome: 'Pato Branco', populacao: 84779 },
];

_Dica: Dar uma olhada nos métodos filter e sort
extra: https://www.w3schools.com/jsref/jsref_sort.asp_
*/

const cidades = [
    { nome: 'Patos de Minas', populacao: 153585 },
    { nome: 'Lages', populacao: 157349 },
    { nome: 'Ibiúna', populacao: 79479 },
    { nome: 'Maringá', populacao: 403063 },
    { nome: 'Curitiba', populacao: 1963726 },
    { nome: 'Florianópolis', populacao: 508826 },
    { nome: 'Pato Branco', populacao: 84779 },
  ];
console.log("");
console.log("Exibindo o Array original");
console.log(cidades);
console.log("--------------------------------------");

//função para filtrar os objetos pela maior populaçao
function popMaior200K (pm2k){
    return pm2k.populacao > 200000;
}

//criaçao do array novo só com as populacoes maiores que 200.000
const cidadesGrandes = cidades.filter((pm2k)=>pm2k.populacao>200000);
console.log("");
console.log("Exibindo o Array com as Cidades com mais de 200.000 habitantes");
console.log(cidadesGrandes);
console.log("--------------------------------------");


//ordenação das cidades com populacao maior que 200.000 pelo método .sort() e com a arrow function de comparaçao
//o método .sort() já contém a logica necessaria para usar a funçao de comparação, sendo necessário
//apenas instituir os parâmetros (sempre apenas 2) para gerar automaticamente a ordenação
console.log("");
console.log("Exibindo o Array com as Cidades Grandes ordenadas por população decrescente");
const ordem = cidadesGrandes.sort((a, b)=> b.populacao-a.populacao);
console.log(ordem);
console.log("--------------------------------------");
console.log("");

console.log("Exibindo a lista das Cidades Grandes ordenada por população decrescente");
console.log("");
for (i=0;i<ordem.length;i++){
  console.log("Cidade: " + ordem[i].nome + " >>>> População: " + ordem[i].populacao);
}
console.log("");
console.log("------------------Fim do Exercício--------------------");