const buttonsArea = document.querySelector("#container")
const formArea = document.querySelector("#formulario")



const confirmBtn = document.querySelector("#confimar")

const showOptions = () => {
    buttonsArea.classList.remove("show")
    formArea.classList.remove("hide")
    buttonsArea.classList.add("show")
    formArea.classList.add("hide")

    console.log(buttonsArea.classList)
}


let alertTimeout;

/**
 * Show an alert message on the screen.
 * @param {string} type - The type of the alert (success or error).
 * @param {string} text - The text to display inside the alert.
 */
function showAlert(type, text) {
  const alertContainer = document.getElementById('alert-container');

  // Clear any existing timeouts to prevent old alerts from disappearing after a new one
  if (alertTimeout) {
    clearTimeout(alertTimeout);
  }

  // Clear the alert container (replace existing alert)
  alertContainer.innerHTML = '';

  // Create a new alert div element
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type}`;
  alertDiv.innerText = text;

  // Append the alert div to the container
  alertContainer.appendChild(alertDiv);

  // Set a timeout to remove the alert after 5 seconds
  alertTimeout = setTimeout(() => {
    alertDiv.style.opacity = '0'; // Start fade-out effect
    setTimeout(() => alertDiv.remove(), 500); // Remove after fade-out
  }, 5000);
}




//confirmBtn.addEventListener("click", showOptions)