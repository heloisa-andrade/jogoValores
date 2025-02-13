
//login
let nome;
let eMail;
let points;

//conectanto com o back
const commentFrom = document.querySelector("#comment-form")

document.addEventListener("DOMContentLoaded", () => {
   recuperaLogin()
   
});

function login(){
    const email = document.getElementById("exampleInputEmail1").value
    const name = document.getElementById("nome").value
    sessionStorage.setItem("nome", name);
    sessionStorage.setItem("email", email);
    console.log(`nome: ${sessionStorage.getItem("nome")} email:${sessionStorage.getItem("email")}`)
}

function recuperaLogin(){
    let nome = sessionStorage.getItem("nome");
    if (!nome || !isNaN(nome) || nome.length == 0) {
        login();
    } else {
        eMail = sessionStorage.getItem("email");
        points = sessionStorage.getItem("pontos");
        let tempoApi = sessionStorage.getItem("cronometroTempo")
        fetch('http://localhost:8080/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Corrigido o content type
            },
            body: JSON.stringify({
                name: nome,
                email: eMail,
                points: points,
                 time:tempoApi
            }),
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Erro na requisição: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.error("Erro ao enviar requisição:", error));
    }
}

