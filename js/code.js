const tf = document.getElementById('tf')
const body = document.getElementsByTagName('body')
const h1 = document.getElementById('h1')
const choosenArea = document.getElementById("choosen")
const resetBtn = document.querySelector("#reset-btn")


const tudo = document.getElementById('container')

const addClickEventForButtons = () => {
    const validOptionsButtons = document.querySelectorAll(".opcoes")
    
    validOptionsButtons.forEach((button, i) => {
        // if(i > validOptionsButtons.length - 2)//para ele não mexer quando um sair
        //     fixElement(button)

        const label = button.innerText
        console.log(label)    
    
        button.addEventListener("click", () => {
            selecionadoNormal(label)
        }
        )
    })
}    


const fixElement = (element) => {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    const top = rect.top + scrollTop;
    const left = rect.left + scrollLeft;

    // Aplicar estilo para fixar o elemento na tela
    element.style.position = 'fixed';
    element.style.top = `${top}px`;
    element.style.left = `${left}px`;
    element.style.width = `${rect.width}px`;  // Manter a largura original
    element.style.height = `${rect.height}px`; // Manter a altura original
}





function selecionadoNormal(label = "") {
    tf.style.display = 'none'
    h1.innerText = 'Escolhido'
    tudo.classList.add('selecionado')
    // tudo.innerHTML = label
    tudo.classList.remove("show")
    tudo.classList.add("hide")

    setTimeout(() => {
        tudo.style.display = "none"
    }, 650)
    choosenArea.classList.add("show")
    choosenArea.prepend(label)
}



const resetAll = () => {
    const allHidden = document.querySelectorAll(".hide")
    const allShow = document.querySelectorAll(".show")
    for(let ah of allHidden)
        ah.classList.remove("hide")
    for(let as of allShow)
        as.classList.remove("show")
        

    formArea.classList.add("show")

    h1.innerText = 'Escolha Algo'

    while (lastInputCount > 2) {
        removeLastInput()
    }

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
}

resetBtn.addEventListener("click", resetAll)