const moreInputBtn = document.querySelector("#plus")
const lessBtn = document.querySelector("#less")
const inputsArea = document.querySelector("#input-area")

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
    console.log(lastInputCount)
    let removedInput = document.getElementById(`op${lastInputCount}`)
    let removedLabel = document.getElementById(`lab${lastInputCount}`)
    console.log(removedInput)


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
    tudo.prepend(button)
    // tudo.appendChild(button)
}



const createOptionsButtons = () => {

    optionsLabels.reverse().forEach((label, index) => {
        let id = index + 1
        if(id > 4)  id -= 4
        if(id > 8) id -= 8
    
        createOptionButton(id, label)
    })
}

const handleConfirmClick = () => {
    const optionsElements = document.querySelectorAll(".optionInput")
    try {
        optionsElements.forEach((option, i) => {
            console.log(!option)
            if(!option.value)
                throw `Escreva algo na opção ${i + 1}`

            optionsLabels.push(option.value)
            
        })
        
    } catch(e) {
        if(typeof e == "string")
            return showAlert("error", e)
        
        return showAlert("error", "Erro!")
    }


    createOptionsButtons()
    showOptions()
}



confirmBtn.addEventListener("click", handleConfirmClick)

moreInputBtn.addEventListener("click", addOptionInput)
lessBtn.addEventListener("click", removeLastInput)