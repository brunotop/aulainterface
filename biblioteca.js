"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sistemabiblioteca = exports.Usuario = exports.Livro = void 0;
var leitor = require("readline-sync");
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, id, anopublicacao, quantidadedisponivel) {
        this.titulo = titulo;
        this.autor = autor;
        this.id = id;
        this.anopublicacao = anopublicacao;
        this.quantidadedisponivel = quantidadedisponivel;
    }
    return Livro;
}());
exports.Livro = Livro;
var Usuario = /** @class */ (function () {
    function Usuario(nome, id, email) {
        this.nome = nome;
        this.id = id;
        this.email = email;
        this.livrosEmprestados = [];
    }
    return Usuario;
}());
exports.Usuario = Usuario;
var Sistemabiblioteca = /** @class */ (function () {
    function Sistemabiblioteca() {
    }
    Sistemabiblioteca.prototype.consultarLivrosDisponiveis = function () {
        throw new Error("Method not implemented.");
    };
    Sistemabiblioteca.prototype.devolverLivro = function () {
        throw new Error("Method not implemented.");
    };
    Sistemabiblioteca.prototype.cadastrarLivros = function () {
        var titulo = leitor.question("Qual o titulo do livro: ");
        var autor = leitor.question("Quem e o autor do livro? ");
        var id = leitor.questionInt("Informe o id: ");
        var anopublicacao = leitor.question("Qual o ano que o livro foi publicado: ");
        var quantidadedisponivel = leitor.questionInt("Qual a quantidade de livros disponiveis no estoque? ");
        var cadastrarLivros = new Livro(titulo, autor, id, anopublicacao, quantidadedisponivel);
        this.livros.push(cadastrarLivros);
        console.log("Medicamento ".concat(titulo, " inserido no estoque"));
    };
    Sistemabiblioteca.prototype.cadastrarUsuario = function () {
        var nome = leitor.question("Informe seu nome: ");
        var id = leitor.questionInt("Informe seu id: ");
        var email = leitor.questionInt("Informe seu email para prosseguirmos: ");
        var cadastrarUsuario = new Usuario(nome, id, email);
        this.usuarios.push(cadastrarUsuario);
        console.log("Medicamento ".concat(nome, " inserido no estoque"));
    };
    Sistemabiblioteca.prototype.emprestarLivro = function () {
        var idlivro = leitor.question("Qual o nome do livro que deseja ser emprestado? ");
        var idUser = leitor.questionInt("Qual o id do usuario? ");
        var indexUser = this.usuarios.findIndex(function (u) { return u.id === idUser; });
        var objLivro = this.livros.findIndex(function (l) { return l.titulo === idlivro; });
        if (idlivro)
            if (idUser) {
                this.usuarios[indexUser].livrosEmprestados.push(this.livros[objLivro]);
                console.log("Livro emprestado com sucesso!");
            }
            else
                console.log("Id incorreto, tente novamente");
    };
    return Sistemabiblioteca;
}());
exports.Sistemabiblioteca = Sistemabiblioteca;
devolverLivro();
void {
    let: let,
    nome: nome,
    let: let,
    Livro: Livro
};
/*    consultarLivrosDisponiveis(): void {
        console.log(this.livros);
    }
    

let biblioteca = new Sistemabiblioteca ()
biblioteca.cadastrarLivros()
biblioteca.cadastrarUsuario()
biblioteca.emprestarLivro()
biblioteca.devolverLivro()
biblioteca.consultarLivrosDisponiveis()*/
