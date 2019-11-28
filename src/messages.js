/**
 * Messages - is object with errors & success methods
 *
 * @param {String, String} - element attribute 'name' & output element
 *
 * @return {String, String} - color & message
 */
export const messages = {
  error: (el, errorOut) => {
    errorOut.style.color = "#f1b01b"
    errorOut.innerHTML = `! ${el.name} is invalid`
  },
  success: (el, successOut) => {
    successOut.style.color = "#fff"
    successOut.innerHTML = `${el.name} is valid`
  }
}
