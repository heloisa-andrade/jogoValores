
//login
let nome;
let eMail;

//conectanto com o back
const url = "http://localhost:8080/"

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
    nome = sessionStorage.getItem("name");

    if (!isNaN(nome) || nome.length == 0 || nome == null) {
        eMail = sessionStorage.getItem("email")
    } else {
        login() 
    }
}
// async function getAllpost(){
//     const resposta = await fetch(url)
//     console.log(resposta)

//     const data = await resposta.json();
//     console.log(data)

//     loadingElemnt.classList.add("hide")

//     data.map((post) =>{
//         const div = document.createElement("div")
//         const title = document.createElement("h2")
//         const body = document.createElement("p")
//         const link = document.createElement("a")
//         // escreve o que nos items criado assima  como foi colocado no post
//         title.innerText = post.title;
//         body.innerText = post.body;
        

//         div.appendChild(title)
//         div.appendChild(body)

//         postsContainer.appendChild(div)
//     })
// }
// getAllpost()
