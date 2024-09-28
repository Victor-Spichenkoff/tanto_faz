const um = document.getElementById('um')
const dois = document.getElementById('dois')
const tf = document.getElementById('tf')
const body = document.getElementsByTagName('body')
const h1 = document.getElementById('h1')

var isForm = true

const tudo = document.getElementById('container')

// const tf = document.createElement('button')
// tf.classList.add('tf')




function selecionadoNormal(id = 2) {
    tf.style.display = 'none'
    h1.innerText = 'Escolhido'
    tudo.classList.add('selecionado')
    id == 1 ? tudo.innerHTML = 'Escolhido Opção 1' : 
    tudo.innerHTML = 'Escolhido Opção 2'
}

// tf1.onclick = mudarLocal


um.onclick = () => selecionadoNormal(1)
dois.onclick = selecionadoNormal