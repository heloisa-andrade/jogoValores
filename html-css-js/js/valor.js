const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

// //apare em baixo
// button.onclick = function(){
//     modal.show()
// }
//centariza // fecha com esqc
button.onclick = function(){
    modal.showModal()
}

buttonClose.onclick =function(){
    modal.close()
}
function selecionado(texto){
    texto.style.cssText =
    'box-shadow: 0 0 0 5px rgba(0, 0, 255,0.5);';
     /* Simula a margem com uma sombra */
}
function showModal(){
    var elemeny = document.getElementById("modal");
    elemeny.classList.add("show-modal")
}
function hideModal(){
    var elemeny = document.getElementById("modal");
    elemeny.classList.remove("show-modal")
}
function imagem(){
    var res = document.getElementById("res")
    res.innerText = 'teste'
}