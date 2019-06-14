document.addEventListener('DOMContentLoaded', iniciar)
var f
function iniciar(){
    f = new Formulario(/*manipulador*/)
}

/*Classe Pessoa*/
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = parseInt(idade)
}

/*Classe Formulario*/
function Formulario(manipulador) {
    this._manipulador = manipulador
    this._formElemento = document.forms.formInscricao
    this._inicializar()
}

Formulario.prototype._inicializar = function () {
    var self = this
    this._formElemento.addEventListener('submit', function(e){
        e.preventDefault()
        console.log(self.getPessoa())//Temp
    })
}

Formulario.prototype.getPessoa = function () {
    return new Pessoa(this._formElemento.inputNome.value, this._formElemento.inputIdade.value)
}