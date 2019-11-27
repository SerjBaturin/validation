import { handlerEmail } from "./inputHandlers"

/**
 * Function inputDefine
 * returns active input value
 *
 * @return String | Number | Boolean
 */

const inputDefine = () => {
  // define array of inputs
  const inputArray = document.getElementsByClassName("form__input")

  // define event handler for active input
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i].addEventListener("change", () => {
      switch (inputArray[i].name) {
        case "email":
          if (handlerEmail(inputArray[i].value) === true) {
            console.log("EMAIL IS VALID")
          } else {
            console.log("EMAIL IS INVALID")
          }
          break
        case "password":
          console.log("It's a Password")
          break
        default:
          console.log("DEFAULT")
          break
      }
    })
  }
}

inputDefine()
