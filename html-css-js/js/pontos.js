//pontos
let acerto;
var pontuacao =2;
let ahd =0 ;
// função para adicionar pontos no sessionStroge
function iniciarPontos(){
    sessionStorage.setItem("pontos", pontuacao);
}

function pontos() {
    var cards = document.querySelectorAll("div.texto");
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if(card.classList.contains("selecionado")){
                card.classList.remove("selecionado")
                if(card.classList.contains("certo")){
                    ahd = ahd-2;
                    alert(ahd);
                } else {
                    ahd =ahd+2;
                   alert(ahd);
                }
            }else{
                card.classList.add("selecionado")
                if(card.classList.contains("certo")){
                    ahd =ahd+2;
                    alert(ahd);
                } else {
                    ahd =ahd-2;
                    alert(ahd);
                }
            }
            pontuacao +=ahd;
            sessionStorage.setItem("pontos", pontuacao);

        });
    });
}

function recuperaPontos(){
    pontuacao = parseInt(sessionStorage.getItem("pontos"), 10)
    if (!isNaN(pontuacao) && pontuacao > 0) {
        iniciarCronometro(pontuacao);
    }else {
        iniciarPontos(); // Valor inicial padrão (60 segundos)
    }

}

document.addEventListener("DOMContentLoaded", () => {
    recuperaPontos();
    pontos(); // Garante que os elementos estejam disponíveis antes de adicionar eventos
   
});


