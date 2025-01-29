// Pontos
let pontuacao =0; // Pontuação inicial
let joao;
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
            sessionStorage.setItem("pontos", pontuacao); // Atualizar no sessionStorage
            alert(`Pontuação atual: ${pontuacao}`);
        });
    });
}

// function valor(){
//     let resposta = document.getElementById("res");
//     resposta.innerHTML(`${pontuacao}/10`)
// }
// Função para recuperar pontos do sessionStorage
function recuperaPontos() {
    let pontosSalvos = sessionStorage.getItem("pontos");
    if (pontosSalvos) {
        pontuacao = Number(pontosSalvos);
        if (isNaN(pontuacao)) pontuacao = 0; // Valor padrão se inválido
    } else {
        iniciarPontos(); // Inicializa com valor padrão
    }
    pontos(); // Adiciona os eventos aos cartões
}

// Evento para carregar a página
document.addEventListener("DOMContentLoaded", () => {
    recuperaPontos();
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