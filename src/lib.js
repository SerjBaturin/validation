/**
 * Function getTextareaLength
 *
 * @return {String} - textarea remaining characters
 *
 */

const textarea = document.querySelector("#textarea")
const textareaLength = document.querySelector("#textarea_length")

const getTextareaLength = () => {
  textarea.addEventListener("keyup", () => {
    textareaLength.innerHTML = `left ${30 - textarea.value.length} char`
    textareaLength.style.color = "red"
  })
}

export default getTextareaLength
