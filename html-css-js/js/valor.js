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
