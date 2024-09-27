const buttonsArea = document.querySelector("#container")
const formArea = document.querySelector("#formulario")

formArea.preventDefault


const confirmBtn = document.querySelector("#confimar")

const showOptions = () => {
    buttonsArea.classList.remove("show")
    formArea.classList.remove("hide")
    buttonsArea.classList.add("show")
    formArea.classList.add("hide")

    console.log(buttonsArea.classList)

    // setTimeout(()=> {
    //     formArea.style.display = "none"
    //     console.log("Sumir")
    // }, 2000)
}


confirmBtn.addEventListener("click", showOptions)