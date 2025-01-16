let pontos;
let acerto;
function validacion(){
    var segundaClasse = document.querySelector('div[name="teste"]').classList[1];
    if(segundaClasse = "certo"){
        pontos +=2;
        acerto ++;
    }else{
        pontos-=2;
    }

    sessionStorage.setItem("pontos", pontos);
}
function recuperaPontos(){
    pontos += parseInt(sessionStorage.getItem("pontos"), 10)
    validacion()
}

document.addEventListener("DOMContentLoaded", () => {
    recuperaPontos();
});



