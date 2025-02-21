// Pontos
let pontuacao =0; // Pontuação inicial
let joao =0 ;
let name;
let email;
// Função para iniciar pontos no sessionStorage
function recuperaPontos() {
    let pontosSalvos = sessionStorage.getItem("pontos");
    if (pontosSalvos) {
        pontuacao = Number(pontosSalvos);
        if (isNaN(pontuacao)) pontuacao = 0; // Valor padrão se inválido
    } else {
        sessionStorage.setItem("pontos", pontuacao);// Inicializa com valor padrão
    }
    pontos(); 
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
            imagem();
        });
    });
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
    res.innerText = "Você conseguiu "+joao+" pontos"
    if (joao > 5){
        img.innerHTML = '<img src="/imagens/certo.png" alt="">'
    }else{
        img.innerHTML = '<img src="/imagens/errado.png" alt="">'
    }
}
function feedback(){
     name = sessionStorage.getItem("nome").value
    email = sessionStorage.getItem("email").value

    let feedback = document.getElementById("teste")
    feedback.innerText = pontuacao
    const res = document.getElementById('resposta');
    if (pontuacao === 70) {
        res.innerText = `Parabéns! Você acertou todas. Você conhece muito bem os valores da empresa. Continue assim!`;
    } else if (pontuacao >= 52) {
        res.innerText = `Parabéns! Você conseguiu uma ótima pontuação, mas ainda pode melhorar.`;
    } else if (pontuacao >= 35 ) {
        res.innerText = `Você precisa melhorar o seu conhecimento sobre os valores. Continue praticando para alcançar pelo menos 52 respostas corretas.`;
    } else {
        res.innerText = `Você precisa melhorar bastante o seu conhecimento sobre os valores do grupo. Sua nota está abaixo de 50%.`;
    }
}
function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Jogo de valores',
			text: `Olhá , eu consegui ${pontuacao} . Quantos você consegue? `,
			url: 'https://jogovalores-1.onrender.com',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
        
	}
}