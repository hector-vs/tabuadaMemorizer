const openModalButton = document.querySelector("#btnTable")
const closeModalButton = document.querySelector("#closeTable")
const modal = document.querySelector("#modalTable")
const fade = document.querySelector("#fade")

const openModalButton2 = document.querySelector("#btnQuest")
const closeModalButton2 = document.querySelector("#closeQuest")
const modal2 = document.querySelector("#modalQuest")
const fade2 = document.querySelector("#fade2")

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"))
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal())
})


const toggleModal2 = () => {
    [modal2, fade2].forEach((el) => el.classList.toggle("hide"))
}

[openModalButton2, closeModalButton2].forEach((el) => {
    el.addEventListener("click", () => toggleModal2())
})

let quest = document.querySelector("#quest")
let random = 0
let n1 = 0
let n2 = 0
let resposta = 0

const alertResult = document.getElementById('alert')
const contentAlert = document.getElementById('content-alert')
const btnBackAlert = document.getElementById('btn-back-alert')
const btnContinueAlert = document.getElementById('btn-continue-alert')

function questao() {
    random = Math.floor(Math.random() * 10) + 1
    n1 = random
    random = Math.floor(Math.random() * 10) + 1
    n2 = random
    quest.innerHTML = "Quanto é " +n1+ " x " +n2+ "?" 
    resposta = n1 * n2
    console.log("Pergunta gerada! Resposta: "+resposta)
}

var userResposta = document.getElementById("responder")
userResposta.onclick = function() {

    var userRespostaN = document.getElementById("resposta")
    let numUserResposta = Number(userRespostaN.value)
    if(numUserResposta != resposta){
        btnContinueAlert.style.display = 'none'
        alertResult.style.display = 'flex'
        contentAlert.innerHTML = '<span class="material-symbols-outlined" style="vertical-align: middle">sentiment_sad</span> Resposta errada, tente novamente!!!'

    }else{
        btnContinueAlert.style.display = 'flex'
        alertResult.style.display = 'flex'
        contentAlert.innerHTML = '<span class="material-symbols-outlined" style="vertical-align: middle">sentiment_very_satisfied</span> Resposta CORRETA, parabéns!!!'
        questao()
        userRespostaN.value = ''
    }
}

openModalButton2.onclick = questao()

function hiddenAlert(){
    alertResult.style.display = 'none'
}
