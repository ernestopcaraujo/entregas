/*Em um arquivo chamado exercicio07.ts crie uma interface chamada **Pessoa** 
com os seguintes atributos: *nome* do tipo string, *idade* do tipo numérico, 
*rua* do tipo string. Além disso, crie um método chamado *cadastrar()*. 

As classes **Aluno** e **Funcionario** que irá ser implementada pela classe 
**Pessoa** e terão os seguintes atributos:

**Aluno** - *matricula* do tipo numérico e *cadeiras* do tipo array de strings.
**Funcionario** - *identificador* do tipo numérico e *setor* do tipo string.

O exercício consiste em implementar o método requerido pela interface **Pessoa** 
às classes **Aluno** e **Funcionario**. O método deverá imprimir em um console.log 
todas as informações sobre o aluno e funcionário cadastrado.*/

interface Pessoa {
    nome:string;
    idade: number;
    rua: string;

    cadastrar():void;
}


class Aluno implements Pessoa {

    nome: string;
    idade: number;
    rua: string;
    matricula:number;
    cadeiras: string[];

    constructor(n:string,idd:number,r:string,mt:number,cd:string[]){
        this.nome = n;
        this.idade = idd;
        this.rua = r;
        this.matricula = mt;
        this.cadeiras = cd;
    }

    cadastrar():void{
        console.log("");
        console.log("Nome Aluno: "+this.nome); 
        console.log("Idade Aluno: "+this.idade);
        console.log("Endereço Aluno: "+this.rua);
        console.log("Matrícula Aluno: "+this.matricula);
        console.log("Cadeiras Aluno: "+this.cadeiras);
    }

}

class Funcionario implements Pessoa {

    nome: string;
    idade: number;
    rua: string;
    identificador:number;
    setor: string;

    constructor(n:string,idd:number,r:string,idf:number,st:string){
        this.nome = n;
        this.idade = idd;
        this.rua = r;
        this.identificador = idf;
        this.setor = st;
    }

    cadastrar():void{
        console.log("");
        console.log("Nome Funcionário: "+this.nome); 
        console.log("Idade Funcionário: "+this.idade);
        console.log("Endereço Funcionário: "+this.rua);
        console.log("Identificador Funcionário: "+this.identificador);
        console.log("Setor Funcionário: "+this.setor);
    }

}


let alunoEx07 = new Aluno("Paulo Rovere",38,"Rua Brasil, 100",3434,["UX","Redes","Java","Sistemas Operacionais"]);
alunoEx07.cadastrar();

let funcionarioEx07 = new Funcionario("Franklin Eipel",55,"Rua Japão, 200",5757,"Consultoria TI");
funcionarioEx07.cadastrar();




