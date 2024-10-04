const moreInputBtn = document.querySelector("#plus")
const lessBtn = document.querySelector("#less")
const inputsArea = document.querySelector("#input-area")
const optionsButtonArea = document.getElementById("options-buttons-area")


var optionsLabels = []
var lastInputCount = 2

const addOptionInput = () => {
    lastInputCount++
    // if(lastInputCount < 1)
    //     lastInputCount = 0

    const input = document.createElement('input')
    input.type = 'text'
    input.autocomplete = 'off'
    input.placeholder = `opção ${lastInputCount}`
    input.className = 'optionInput'
    input.id = `op${lastInputCount}`
  
    const label = document.createElement('label')
    label.innerHTML = `Opção ${lastInputCount}`
    label.for = `op${lastInputCount}`
    label.id = `lab${lastInputCount}`

    inputsArea.appendChild(label)
    inputsArea.appendChild(input)

    input.classList.add("create")
    label.classList.add("create")
}


const removeLastInput = () => {
    let removedInput = document.getElementById(`op${lastInputCount}`)
    let removedLabel = document.getElementById(`lab${lastInputCount}`)


    removedInput.classList.remove("create")
    removedLabel.classList.remove("create")

    removedInput.classList.add("disintegrate")
    removedLabel.classList.add("disintegrate")


    setTimeout(() => {
        inputsArea.removeChild(removedInput)
        inputsArea.removeChild(removedLabel)
    }, 690)

    lastInputCount--
}



const createOptionButton = (id, label) => {
    const button = document.createElement('button')
    button.classList.add(`option${id}`)
    button.classList.add(`opcoes`)
    button.textContent = label
  
    //tudo==containter area
    // optionsButtonArea.append(button)
    tudo.prepend(button)
}



const createOptionsButtons = () => {
    let id = optionsLabels.length
    while (id >2) {
        id --
    }
    console.log(id)

    // let id = 0

    optionsLabels.reverse().forEach((label, index) => {
        // if(id > 3)  id -= 3
        // if(id > 7) id -= 7
        if(id > 4) id = 1
        if(id <= 0) id = 4
        // id++
        
        createOptionButton(id, label)
        
        id--
    })
}

const handleConfirmClick = () => {
    const optionsElements = document.querySelectorAll(".optionInput")

    try {
        optionsElements.forEach((option, i) => {
            (!option)
            if(!option.value)
                throw `Escreva algo na opção ${i + 1}`

            optionsLabels.push(option.value)
            
        })
        
    } catch(e) {
        (e)
        if(typeof e == "string")
            return showAlert("error", e)
        
        return showAlert("error", "Erro!")
    }


    createOptionsButtons()
    showOptions()
    addClickEventForButtons()
    rebuildWrongButtons()
    // addFixForWrong()
}


confirmBtn.addEventListener("click", handleConfirmClick)

moreInputBtn.addEventListener("click", addOptionInput)
lessBtn.addEventListener("click", removeLastInput)