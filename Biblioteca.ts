import * as leitor from "readline-sync"

export class Livro{
    titulo: String;
    autor: String;
    id: Number;
    anopublicacao: String;
    quantidadedisponivel: Number;
    constructor(titulo: String, autor: String, id: Number, anopublicacao: String, quantidadedisponivel: Number){
        this.titulo = titulo
        this.autor = autor
        this.id = id
        this.anopublicacao = anopublicacao
        this.quantidadedisponivel = quantidadedisponivel
    }
}

export class Usuario{
    nome: string;
    id: number;
    email: number;
    livrosEmprestados: Array<Livro>;
    constructor(nome: string, id: number, email: number){
        this.nome = nome
        this.id = id
        this.email = email
        this.livrosEmprestados = []
    }
}

interface Biblioteca{
    cadastrarLivros(): void
    cadastrarUsuario(): void
    emprestarLivro(): void
    devolverLivro(): void
    consultarLivrosDisponiveis(): void
}
export class Sistemabiblioteca implements Biblioteca{
    consultarLivrosDisponiveis(): void {
        throw new Error("Method not implemented.");
    }
    devolverLivro(): void {
        throw new Error("Method not implemented.");
    }
  
    usuarios: Array<Usuario>
    livros: Array<Livro>

    cadastrarLivros(): void {
        let titulo = leitor.question("Qual o titulo do livro: ");
        let autor = leitor.question("Quem e o autor do livro? ");
        let id = leitor.questionInt("Informe o id: ");
        let anopublicacao = leitor.question("Qual o ano que o livro foi publicado: ");
        let quantidadedisponivel = leitor.questionInt("Qual a quantidade de livros disponiveis no estoque? ")
        const cadastrarLivros = new Livro(titulo, autor, id, anopublicacao, quantidadedisponivel);
        this.livros.push(cadastrarLivros);
        console.log(`Medicamento ${titulo} inserido no estoque`);
        }
    
    cadastrarUsuario(): void{
            let nome = leitor.question("Informe seu nome: ");
            let id = leitor.questionInt("Informe seu id: ");
            let email = leitor.questionInt("Informe seu email para prosseguirmos: ");
            let cadastrarUsuario = new Usuario(nome, id, email);
            this.usuarios.push(cadastrarUsuario)
            console.log(`Medicamento ${nome} inserido no estoque`);
        }    

    emprestarLivro(): void {
        let idlivro = leitor.question("Qual o nome do livro que deseja ser emprestado? ")
        let idUser = leitor.questionInt("Qual o id do usuario? ")
        let indexUser = this.usuarios.findIndex(u => u.id === idUser)
        let objLivro = this.livros.findIndex(l => l.titulo === idlivro)
        if (idlivro)
            if (idUser){
            this.usuarios[indexUser].livrosEmprestados.push(this.livros[objLivro])
            console.log("Livro emprestado com sucesso!")
            } else 
            console.log("Id incorreto, tente novamente")         
    }

}   consultarLivrosDisponiveis(): void {
        console.log(this.livros);    
    }
    

let biblioteca = new Sistemabiblioteca ()
biblioteca.cadastrarLivros()
biblioteca.cadastrarUsuario()
biblioteca.emprestarLivro()
biblioteca.devolverLivro()
biblioteca.consultarLivrosDisponiveis()

function consultarLivrosDisponiveis() {
    throw new Error("Function not implemented.");
}
