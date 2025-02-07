const url = "https://jsonplaceholder.typicode.com/posts"
const loadingElemnt = document.querySelector("#loading")
const postsContainer = document.querySelector("#posts-container")

const postPage = document.querySelector("#post") 
const postContainer = document.querySelector("#post-container") 
const commentContainer = document.querySelector("#comment-form")

const commentFrom = document.querySelector("#comment-form")
const emailInput = document.querySelector("#email")
const bodyInput = document.querySelector("#body")

// get id for url
const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get("id")

// get all post
async function getAllpost(){
    const resposta = await fetch(url)
    console.log(resposta)

    const data = await resposta.json();
    console.log(data)

    loadingElemnt.classList.add("hide")

    data.map((post) =>{
        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")

        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = "ler"
        link.setAttribute("href",`post.html?id=${post.id}`)

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link);

        postsContainer.appendChild(div)

    })


}

async function getPost(id) {
    const [respostaPost, respostaComments] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])
    const  dataPost = await respostaPost.json()
    const dataComments = await respostaComments.json()
    loadingElemnt.classList.add("hide")
    postPage.classList.remove("hide")

    const title = document.createElement("h1")
    const body = document.createElement("p")

    title.innerText = dataPost.title;
    body.innerText = dataPost.body

    postContainer.appendChild(title)
    postContainer.appendChild(body)

    console.log(dataComments)
    dataComments.map((comment)=> {
        createComent(comment)

    })
}
function createComent(comment){
    const div =document.createElement("div")
    const email =document.createElement("h3")
    const commentBody =document.createElement("p")

    email.innerText = comment.email
    commentBody.innerText = comment.body
    
    div.appendChild(email)
    div.appendChild(commentBody)
    commentContainer.appendChild(div)
}
async function postComment(comment) {
    const resposta = await fetch(`${url}/${postId}/comments`,{
        method:"POST",
        body:comment,
        headers:{ "content-type":"application/json"},
    })
    const data = await resposta.json()
    console.log(data)
}
if (!postId){
    getAllpost()
}else{
   getPost(postId)
   commentFrom.addEventListener("submit", (e) => {
    e.preventDefault()

    let comment = {
        email:emailInput.value,
        body :bodyInput.value
    }
    comment = JSON.stringify
   })
}
