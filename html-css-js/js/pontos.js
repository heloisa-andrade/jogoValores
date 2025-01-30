// Pontos
let pontuacao =0; // Pontuação inicial
let joao =0 ;
// Função para iniciar pontos no sessionStorage
function iniciarPontos() {
    sessionStorage.setItem("pontos", pontuacao);
}

// Função para adicionar pontos no sessionStorage
function pontos() {
    var cards = document.querySelectorAll("div.texto");
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains("selecionado")) {
                card.classList.remove("selecionado");
                if (card.classList.contains("certo")) {
                    pontuacao -= 2; 
                    joao -= 2; 
                } else {
                    pontuacao += 2;
                    joao += 2; 
                }
            } else {
                card.classList.add("selecionado");
                if (card.classList.contains("certo")) {
                    pontuacao += 2;
                    joao += 2; 
                } else {
                    pontuacao -= 2;
                    joao -= 2; 
                }
            }
            sessionStorage.setItem("pontos", pontuacao);
            console.log(joao) // Atualizar no sessionStorage
            imagem();

        });
    });
}


function recuperaPontos() {
    let pontosSalvos = sessionStorage.getItem("pontos");
    if (pontosSalvos) {
        pontuacao = Number(pontosSalvos);
        if (isNaN(pontuacao)) pontuacao = 0; // Valor padrão se inválido
    } else {
        iniciarPontos(); // Inicializa com valor padrão
    }
    pontos(); 
}

// Evento para carregar a página
document.addEventListener("DOMContentLoaded", () => {
    recuperaPontos();
    feedback();
    imagem();
    
});

function resultato(){
    if (joao >5){
        showModal()
    }else{
        redirecionar() 
    }
}

function showModal(){
    var elemeny = document.getElementById("modal");
    elemeny.classList.add("show-modal")
}
function hideModal(){
    var elemeny = document.getElementById("modal");
    elemeny.classList.remove("show-modal")
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
    let res = document.getElementById("res")
    let img = document.getElementById("imgRes")
    res.innerText = "Você conseguiu "+joao+"pontos"
    if (joao > 5){
        img.innerHTML = '<img src="/imagens/certo.png" alt="">'
    }else{
        img.innerHTML = '<img src="/imagens/errado.png" alt="">'
    }
}
function feedback(){
    let feedback = document.getElementById("teste")
    feedback.innerText = pontuacao

}