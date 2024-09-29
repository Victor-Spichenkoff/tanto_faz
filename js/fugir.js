const allWrongOptions = document.querySelectorAll(".tf")

function numeroAleatório(height = true) {
    const altura = body[0].clientHeight
    const largura = body[0].clientWidth
    // console.log(altura, largura)

    if(height) return Math.floor(Math.random() * altura)
    
    return  Math.floor(Math.random() * largura)
}




function mudarLocal(element) {
    const totalLargura = body[0].clientWidth
    const totalAltura = body[0].clientHeight

    const altura = numeroAleatório(true)
    const largura = numeroAleatório()

    // (altura, largura)

    tf.innerText = 'Tanto Faz'
    body[0].appendChild(tf)

    // tf1.style.display = 'none'

    tf.style.position = 'fixed'
    tf.style.zIndex = 10

    if(altura < 87 || altura > totalAltura - 100) return mudarLocal(element)
    if(largura > totalLargura - 200) return mudarLocal(element)

    tf.style.top = altura + 'px'
    tf.style.left = largura + 'px'
}

// allWrongOptions.forEach(wrongOption => {
//     wrongOption.addEventListener("click", () => mudarLocal(wrongOption))
// })

tf.addEventListener("click", mudarLocal)