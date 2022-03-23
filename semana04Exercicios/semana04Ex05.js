/*
Dado o array abaixo percorra ele e exiba o animal e sua raça utilizando console.log.

var animais = [
{ animal: 'Cachorro', raca: 'Akita' },
{ animal: 'Cachorro', raca: 'Boxer' },
{ animal: 'Cachorro', raca: 'Dálmata' },
{ animal: 'Cachorro', raca: 'Pastor alemão' },
{ animal: 'Gato', raca: 'Persa' },
{ animal: 'Gato', raca: 'Sphynx' },
{ animal: 'Gato', raca: 'Siamês' },
]

Dica: forEach pode ser uma boa.

*/

let listaAnimais = [
    { animal: 'Cachorro', raca: 'Akita' },
    { animal: 'Cachorro', raca: 'Boxer' },
    { animal: 'Cachorro', raca: 'Dálmata' },
    { animal: 'Cachorro', raca: 'Pastor alemão' },
    { animal: 'Gato', raca: 'Persa' },
    { animal: 'Gato', raca: 'Sphynx' },
    { animal: 'Gato', raca: 'Siamês' },
    ];
function verLista(itemLista){
    console.log("Tipo de Animal: " + itemLista.animal + " >>> " + "Raça: " + itemLista.raca);
}
console.log("");
console.log("LISTA DE ANIMAIS");
console.log("---------------------------");
listaAnimais.forEach(verLista);
console.log("");
console.log("------Fim do Exercício-----");