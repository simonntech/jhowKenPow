function getRandom(max) {
    return Math.floor(Math.random()* max + 1)
}

let escolhaPc = ""

function escolha(esc) {
    let resultado = document.querySelector('.resultado')
    let escolhaTexto = document.getElementById('escolhaTexto')
    let fraseEscolha = document.getElementById('escolha')
    let main = document.querySelector('main')
    let resfinal = document.getElementById('resfinal')
    let jdenovo = document.getElementById('jdenovo')
    escolhaTexto.innerHTML = "Você escolheu: "
    fraseEscolha.classList.remove('escondido')
    main.classList.add('escondido')
    resfinal.classList.remove('escondido')

    switch (getRandom(3)){
        case 1: 
            escolhaPc = 'pedra'
            break;
        case 2:
            escolhaPc = 'papel'
            break;
        case 3:
            escolhaPc = 'tesoura'
            break
    }

    if(esc === escolhaPc) {
        p = document.createElement('p')
        p.innerHTML = `Temos um EMPATE! `
        resfinal.appendChild(p)
        condicao = 'vencedor'
        condicao2 = 'vencedor'
    }else if(esc === 'pedra' && escolhaPc ==='papel') {
        p = document.createElement('p')
        p.innerHTML = `Derrota... <img src="../imgs/fracassado.png" alt="">`
        resfinal.appendChild(p)
        condicao = 'perdedor'
        condicao2 = 'vencedor'
    }else if(esc === 'pedra' && escolhaPc ==='tesoura'){
        p = document.createElement('p')
        p.innerHTML = `VITÓRIA!! <img src="../imgs/trofeu.png" alt="">`
        resfinal.appendChild(p)
        condicao = 'vencedor'
        condicao2 = 'perdedor'
    }else if(esc === 'papel' && escolhaPc ==='tesoura'){
        p = document.createElement('p')
        p.innerHTML = `Derrota... <img src="../imgs/fracassado.png" alt="">`
        resfinal.appendChild(p)
        condicao = 'perdedor'
        condicao2 = 'vencedor'
    }else if(esc === 'papel' && escolhaPc ==='pedra') {
        p = document.createElement('p')
        p.innerHTML = `VITÓRIA!! <img src="../imgs/trofeu.png" alt="">`
        resfinal.appendChild(p)
        condicao = 'vencedor'
        condicao2 = 'perdedor'
    }else if(esc === 'tesoura' && escolhaPc ==='pedra') {
        p = document.createElement('p')
        p.innerHTML = `Derrota... <img src="../imgs/fracassado.png" alt="">`
        resfinal.appendChild(p)
        condicao = 'perdedor'
        condicao2 = 'vencedor'
    }else if(esc === 'tesoura' && escolhaPc ==='papel') {
        p = document.createElement('p')
        p.innerHTML = `VITÓRIA!! <img src="../imgs/trofeu.png" alt="">`
        resfinal.appendChild(p)
        condicao = 'vencedor'
        condicao2 = 'perdedor'
    }

    escolhaTexto.innerHTML += `${esc.toUpperCase()}! <br> E seu oponente escolheu: ${escolhaPc.toUpperCase()}`

    resultado.classList.remove('escondido')
    div = document.createElement('div')
    div2 = document.createElement('div')
    div.innerHTML = `<img src="../imgs/${esc}.jpeg" alt="">`
    div2.innerHTML = `<img src="../imgs/${escolhaPc}.jpeg" alt="">`
    div.classList.add(condicao)
    div2.classList.add(condicao2)
    resultado.appendChild(div)
    resultado.appendChild(div2)

    jdenovo.classList.remove('escondido')
}