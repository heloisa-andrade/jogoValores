let tempo = 0;
let working = false;
let intervaloId = null;

function iniciarCronometro(t) {
    if (!working) {
        working = true;
        tempo = t;
        exibeTempo();
        intervaloId = setInterval(() => {
            if (tempo >= 0) {
                exibeTempo();
            } else {
                pararCronometro();
            }
        }, 1000);
    }
}

function exibeTempo() {
    const min = Math.floor(tempo / 60);
    const seg = tempo % 60;
    const smin = min.toString().padStart(2, '0');
    const sseg = seg.toString().padStart(2, '0');
    const cronometroDisplay = document.querySelector(".cronometro");

    if (cronometroDisplay) {
        cronometroDisplay.value = `${smin}:${sseg}`;
    }

    // Salvar tempo restante no localStorage
    sessionStorage.setItem("cronometroTempo", tempo);

    tempo--;
}

function pararCronometro() {
    working = false;
    clearInterval(intervaloId);
}

function continuarCronometro() {
    // Recuperar tempo do localStorage ou usar um valor padrão
    const tempoSalvo = parseInt(sessionStorage.getItem("cronometroTempo"), 10);

    if (!isNaN(tempoSalvo) && tempoSalvo > 0) {
        iniciarCronometro(tempoSalvo);
    } if (tempoSalvo == 0) {
        window.location.href = "/Fedback.html";
        sessionStorage.clear()
    }else {
        iniciarCronometro(600); // Valor inicial padrão (60 segundos)
    }
}



// Inicializar cronômetro ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    continuarCronometro();
    configurarBotoesNavegacao();
});
