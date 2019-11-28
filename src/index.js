import { handlerEmail, handlerPassword } from "./inputHandlers"
import { messages } from "./messages"

/**
 * Function defineClickedInput()
 * defines active input value
 * returns success & error messages
 *
 * @return String
 */
const defineClickedInput = () => {
  // Define array of inputs, error & success message output
  const inputArray = document.getElementsByClassName("form__input")
  const emailMessage = document.querySelector(".email__message")
  const passwordMessage = document.querySelector(".password__message")

  // Define event handler for active input
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i].addEventListener("change", () => {
      switch (inputArray[i].name) {
        // Email message output
        case "email":
          if (handlerEmail(inputArray[i].value) === true) {
            messages.success(inputArray[i], emailMessage)
          } else {
            messages.error(inputArray[i], emailMessage)
          }
          break
        // Password message output
        case "password":
          if (handlerPassword(inputArray[i].value) === true) {
            messages.success(inputArray[i], passwordMessage)
          } else {
            messages.error(inputArray[i], passwordMessage)
          }
          break
        // Default
        default:
          break
      }
    })
  }
}

defineClickedInput()
