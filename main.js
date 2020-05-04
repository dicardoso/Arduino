var botoes = Array.from(document.getElementsByClassName('led-box'))

botoes.forEach(botao => botao.addEventListener('click',() => {
    var estado = botao.getAttribute('id')

    if (estado.includes('on')){
        botao.setAttribute('id', `${estado.replace('-on','')}`)
    }
    else{
        botao.setAttribute('id', `${estado}-on`)
    }
}))
