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