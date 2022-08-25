const controleAjuste = document.querySelectorAll(".controle-ajuste")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controleAjuste.forEach ((element) => {
    element.addEventListener("click", (event) => {
       manipulaDados (event.target.dataset.ajuste, event.target.parentNode)
       atualizaEstatisticas (event.target.dataset.peca)
       
    } )
})


function manipulaDados (operador, controle) {
    const contador = controle.querySelector(".controle-contador")

    if (operador === "-") {
        contador.value = parseInt (contador.value) - 1

    } else {
        contador.value = parseInt (contador.value) + 1
    }
}

function atualizaEstatisticas (peca) {
    estatisticas.forEach ((element) => {
        element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica]
    })
}

const botao = document.querySelectorAll(".modelo")
const robotron = document.querySelector(".robo")

botao.forEach ((element) => {
    element.addEventListener("click", (event) => {
        robotron.src=event.target.dataset.modelo
    })
})
