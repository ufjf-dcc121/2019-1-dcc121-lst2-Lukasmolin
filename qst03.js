document.addEventListener('DOMContentLoaded', iniciar)
var f, la, lm
function iniciar(){
    f = new Formulario()
    la = new Lista(document.getElementById('listaAdultos'), f)
    lm = new Lista(document.getElementById('listaMenores'), f)
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

Formulario.prototype.gerarBotaoExcluir = function(liElemento){
    if(this._formElemento.lastElementChild.type == 'button'){
        this._formElemento.lastElementChild.remove()
    }    
    var btn = document.createElement('input')
    btn.type = 'button'
    btn.value = 'Excluir'
    btn.addEventListener('click', function(){
        liElemento.remove()
        btn.remove()
    })
    this._formElemento.appendChild(btn)
}

Formulario.prototype.getPessoa = function () {
    return new Pessoa(this._formElemento.inputNome.value, this._formElemento.inputIdade.value)
}

/*Classe Lista*/
function Lista(elemento, form){
    this._olElemento = elemento
    this._form = form
}

Lista.prototype.adicionar = function(pessoa){
    var li = document.createElement('li')
    li.textContent = pessoa.nome + " - " + pessoa.idade
    li.contentEditable = true
    var self = this
    li.addEventListener('focus', function(e){
        self._form.gerarBotaoExcluir(li)
    })
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
        formulario._formElemento.inputNome.value = ""
        formulario._formElemento.inputIdade.value = ""
        formulario._formElemento.inputNome.focus()
    })
}