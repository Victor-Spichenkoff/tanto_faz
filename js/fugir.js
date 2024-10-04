const buttonWidth = 200

function numeroAleatório(height = true) {
    const altura = window.innerHeight
    const largura = window.innerWidth

    if (height) return Math.floor(Math.random() * altura)

    return Math.floor(Math.random() * largura)
}

const mudarLocalItem = (element) => {
    const totalLargura = window.innerWidth
    const totalAltura = window.innerHeight

    //left e top
    const top = numeroAleatório(true)
    const left = numeroAleatório()

    // (top, left)

    element.innerText = element.innerText
    body[0].appendChild(element)

    // element1.style.display = 'none'

    element.style.position = 'fixed'
    element.style.zIndex = 10


    const halfButtonWidth = buttonWidth / 2
    // const minGapToTop = 2 * 108 + 87
    const minGapToTop = optionsLabels.length * 108 + 87
    if (
        (//conflito com os botões certos
            (top < minGapToTop || top > totalAltura - halfButtonWidth)
            &&
            (left > totalLargura / 2 - (halfButtonWidth + buttonWidth) && left < totalLargura / 2 + halfButtonWidth)
        )
        ||
        (left > totalLargura-180)//caso sai da tela
        ||
        (top > totalAltura - 100)//desceu muito

    ) return mudarLocalItem(element)

    console.log("TOP: ", top, "; minGap", minGapToTop, "; TotAltura - 100" ,totalAltura - 100)
    console.log("LEFT ", left, "; TOTLArgura left: ", totalLargura / 2 - 200, "TOTLArgura right: ", totalLargura / 2 + 200)

    // if(altura < minGapToTop || altura > totalAltura - 100) return mudarLocalItem(element)
    // if(largura > totalLargura - 200) return mudarLocalItem(element)

    element.style.top = top + 'px'
    element.style.left = left + 'px'
}