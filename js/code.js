const tf = document.getElementById('tf')
const body = document.getElementsByTagName('body')
const h1 = document.getElementById('h1')
const choosenArea = document.getElementById("choosen")
const resetBtn = document.querySelector("#reset-btn")
const allWrongOptions = document.querySelectorAll(".tf")
const choosenLabelArea = document.querySelector("#choosen-answer")
const tudo = document.getElementById('container')


const fixElement = (element) => {
        // Obter as coordenadas atuais do elemento em relação ao topo e esquerda da página
        const rect = element.getBoundingClientRect();


        // Salvar a posição original do elemento
        const top = rect.top + window.scrollY;
        const left = rect.left + window.scrollX;
    
        // Definir o estilo para manter o elemento na posição absoluta
        element.style.position = 'fixed';
        element.style.top = `${top}px`;
        element.style.left = `${left}px`;
}

const addFixForWrong = () => {
    allWrongOptions.forEach(wrongOption => {
        fixElement(wrongOption)
    })
}


const addClickEventForButtons = () => {
    const validOptionsButtons = document.querySelectorAll(".opcoes")
    
    validOptionsButtons.forEach((button, i) => {
        const label = button.innerText
    
        button.addEventListener("click", () => {
            selecionadoNormal(label)
        }
        )
    })
}    

const addEventClickForWrongs = () => {
    const allWrongOptions = document.querySelectorAll(".tf")
    
    allWrongOptions.forEach(wrongOption => {
        wrongOption.addEventListener("click", () => mudarLocalItem(wrongOption))
        console.log("ACiocionado em:" + wrongOption)
    })
    
}


function selecionadoNormal(label = "") {
    h1.innerText = 'Escolhido'
    tudo.classList.add('selecionado')
    // tudo.innerHTML = label
    tudo.classList.remove("show")
    tudo.classList.add("hide")

    setTimeout(() => {
        tudo.style.display = "none"
    }, 650)
    choosenArea.classList.add("show")
    choosenLabelArea.innerHTML = label

    removeWrong()
}



const removeWrong = () => {
    const allWrongOptions = document.querySelectorAll(".tf")
    allWrongOptions.forEach(wrongOption => wrongOption.remove())
}


const resetWrongButtons = () => {
    allWrongOptions.forEach(wrongOption => {
        wrongOption.style.position = "relative"
        wrongOption.style.display = "none"
        wrongOption.style.top = ""
        wrongOption.style.left = ""
        wrongOption.style.zIndex = "0"
    })
}

const rebuildWrongButtons = () => {
    const allWrongOptions = document.querySelectorAll(".tf")

    allWrongOptions.forEach(wrongOption => {
        wrongOption.remove()
    })

    for(let count of [1, 2, 3]) {
        const button = document.createElement("button")
        const father = document.querySelector(`#wrong-area-${count}`)

        button.id = `tf${count}`
        
        let label = ""

        if(count == 1) label = "Tanto Faz"
        if(count == 2) label = "Não sei"
        if(count == 3) label = "Mé"

        button.innerHTML = label
        button.classList.add("tf")

        father.append(button)

        addEventClickForWrongs()
    }
}


const resetAll = () => {
    //tirar as classes
    const allHidden = document.querySelectorAll(".hide")
    const allShow = document.querySelectorAll(".show")
    for(let ah of allHidden)
        ah.classList.remove("hide")
    for(let as of allShow)
        as.classList.remove("show")
        
    tudo.classList.remove('selecionado')

    //FORM
    formArea.classList.add("show")

    h1.innerText = 'Escolha Algo'

    while (lastInputCount > 2) {
        removeLastInput()
    }

    //Botões

    const allOptionsInput = document.querySelectorAll(".optionInput")

    allOptionsInput.forEach(input => {
        input.value = ""
    })

    optionsButtonArea.innerHTML = ""

    
    const allOldOptions = document.querySelectorAll(".opcoes")
    
    allOldOptions.forEach(oldOption => {
        oldOption.remove()
    })

    optionsLabels = []
    
    
    //wrongs
    // resetWrongButtons()
    removeWrong()

    //Tela final
    choosenLabelArea.innerHTML = ""
 
    // choosenArea.style.display = "none"

    tudo.style.display = "none"
    
}

resetBtn.addEventListener("click", resetAll)
// addFixForWrong()