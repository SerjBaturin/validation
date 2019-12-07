const textarea = document.querySelector("#textarea")
const textareaLength = document.querySelector("#textarea_length")
const firstEmail = document.querySelector("#first-email")
const secondEmail = document.querySelector("#second-email")
const firstPassword = document.querySelector("#first-password")
const secondPassword = document.querySelector("#second-password")
const matchedEmail = document.getElementsByClassName("matched-email")
const matchedPassword = document.getElementsByClassName("matched-password")

/**
 * Function getTextareaLength
 *
 * @return {String} - textarea remaining characters
 *
 */

export function getTextareaLength() {
  textarea.addEventListener("keyup", () => {
    textareaLength.innerHTML = `left ${30 - textarea.value.length} char`
    textareaLength.style.color = "red"
  })
}

/**
 * Function compareInput
 *
 * function compares input values
 * and displays success & error messages
 *
 * @return {String} - success & error message
 */

export function compareInput() {
  secondEmail.addEventListener("change", () => {
    if (firstEmail.value === secondEmail.value) {
      matchedEmail[0].innerHTML = "ok"
      matchedEmail[0].style.color = "green"
      matchedEmail[1].innerHTML = "ok"
      matchedEmail[1].style.color = "green"
    } else {
      matchedEmail[0].innerHTML = "!"
      matchedEmail[0].style.color = "red"
      matchedEmail[1].innerHTML = "!"
      matchedEmail[1].style.color = "red"
    }
  })
  secondPassword.addEventListener("change", () => {
    if (firstPassword.value === secondPassword.value) {
      matchedPassword[0].innerHTML = "ok"
      matchedPassword[0].style.color = "green"
      matchedPassword[1].innerHTML = "ok"
      matchedPassword[1].style.color = "green"
    } else {
      matchedPassword[0].innerHTML = "!"
      matchedPassword[0].style.color = "red"
      matchedPassword[1].innerHTML = "!"
      matchedPassword[1].style.color = "red"
    }
  })
}
