import { quiz } from "./quiz/quiz.js";

const pergunta_dom = document.querySelector(".pergunta p")
const pontuacao = document.querySelector(".pontuacao")

let count = 0
let acertos = 0
let erros = 0

export const createRespostas = (params) => {
    const opcoes_res = quiz[params].respostas
    pergunta_dom.innerHTML = quiz[params].pergunta

    opcoes_res.forEach((e) => {
        const res_dom = document.querySelector(".resposta")
        const button = document.createElement("button")

            button.id = count
            button.innerHTML = e

        res_dom.appendChild(button)
    })
    
    const buttons = document.querySelectorAll("button")

    buttons.forEach(btn => {
        btn.onclick = (e) => {
            if(e.target.textContent === quiz[params].resposta_correta){
                nextPerguntas(buttons)

                acertos += 1

                pontuacao.innerHTML = `
                    <p>Acertos.. ${acertos}</p> 
                    <p>Erros...... ${erros}</p>
                `
                e.target.style.background = "green"
            } else {
                erros += 1
                nextPerguntas(buttons)

                pontuacao.innerHTML = `
                    <p>Acertos.. ${acertos}</p> 
                    <p>Erros...... ${erros}</p>
                `
                e.target.style.background = "red"
            }
        }
    })
}
const nextPerguntas = (buttons) => {
    count += 1

    if(count >= quiz.length){
        count = 0
    }
    
    setTimeout(() => {
        createRespostas(count)

        buttons.forEach(a => {
            a.remove()
        })
    }, 100);
}

createRespostas(count)