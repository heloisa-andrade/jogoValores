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
function showTutorial(){
    var elemeny = document.getElementById("modalT");
    elemeny.classList.add("show-modal")
}
function hideTutorial(){
    var elemeny = document.getElementById("modalT");
    elemeny.classList.remove("show-modal")
}
function imagem(){
    var res = document.getElementById("res")
    res.innerText = 'teste'
}