/*

Crie um arquivo typescript com o nome exercicio04.ts, nele 
crie uma classe chamada Filme com os atributos nome do tipo string, 
anoDeLancamento do tipo number e diretor do tipo string. 
Fora do escopo dessa classe, instancie ela e preencha os campos acessando seus 
atributos por meio do ponto (.).

*/

class Filme {
    nomeDoFilme: string;
    anoDeLancamento: number;
    diretor: string;

    constructor() {}
};

let filmeEx04: Filme = new Filme();

filmeEx04.nomeDoFilme = "O Senhor dos Anéis";
filmeEx04.anoDeLancamento = 2001;
filmeEx04.diretor = "Peter Jackson";
