const um = document.getElementById('um')
const dois = document.getElementById('dois')
const tf = document.getElementById('tf')
const body = document.getElementsByTagName('body')
const h1 = document.getElementById('h1')

function numeroAleatório(height = true) {
    const altura = body[0].clientHeight
    const largura = body[0].clientWidth
    // console.log(altura, largura)

    if(height) return Math.floor(Math.random() * altura)
    
    return  Math.floor(Math.random() * largura)
}

const tudo = document.getElementById('container')

// const tf = document.createElement('button')
// tf.classList.add('tf')


function mudarLocal() {
    const totalLargura = body[0].clientWidth
    const totalAltura = body[0].clientHeight

    const altura = numeroAleatório(true)
    const largura = numeroAleatório()

    console.log(altura, largura)

    tf.innerText = 'Tanto Faz'
    body[0].appendChild(tf)

    // tf1.style.display = 'none'

    tf.style.position = 'absolute'
    // tf.style.position = 'fixed'
    tf.style.zIndex = 10

    if(altura < 87 || altura > totalAltura - 100) return mudarLocal()
    if(largura > totalLargura - 200) return mudarLocal()

    tf.style.top = altura + 'px'
    tf.style.left = largura + 'px'
}

function selecionadoNormal(id = 2) {
    tf.style.display = 'none'
    h1.innerText = 'Escolhido'
    tudo.classList.add('selecionado')
    id == 1 ? tudo.innerHTML = 'Escolhido Opção 1' : 
    tudo.innerHTML = 'Escolhido Opção 2'
}

// tf1.onclick = mudarLocal
tf.onclick = mudarLocal

um.onclick = () => selecionadoNormal(1)
dois.onclick = selecionadoNormal