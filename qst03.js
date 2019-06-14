document.addEventListener('DOMContentLoaded', iniciar)
var f, la, lm
function iniciar(){
    f = new Formulario()
    la = new Lista(document.getElementById('listaAdultos'), 'teste')
    lm = new Lista(document.getElementById('listaMenores'), 'teste')
    configura(f, la, lm)
}

/*Classe Pessoa*/
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = parseInt(idade)
}

/*Classe Formulario*/
function Formulario() {
    this._formElemento = document.forms.formInscricao
}

Formulario.prototype.getPessoa = function () {
    return new Pessoa(this._formElemento.inputNome.value, this._formElemento.inputIdade.value)
}

/*Classe Lista*/
function Lista(elemento){
    this._olElemento = elemento
}

Lista.prototype.adicionar = function(pessoa){
    var li = document.createElement('li')
    li.textContent = pessoa.nome + " - " + pessoa.idade
    li.contentEditable = true
    this._olElemento.appendChild(li)
}

/*Função Configura*/
function configura(formulario, listaAdultos, listaMenores){
    formulario._formElemento.addEventListener('submit', function(e) {
        e.preventDefault()
        var pessoa = formulario.getPessoa()
        if(pessoa.idade < 18){
            listaMenores.adicionar(pessoa)
        } else {
            listaAdultos.adicionar(pessoa)
        }
    })
}