/**
 * Class Message
 * @constructor
 *
 * Define & output success or error messages
 * @param{String} - input name
 * @return{String} - success or error message
 */

class Message {
  constructor(inputName) {
    this.inputName = inputName
  }

  getSuccessMessage() {
    return `${this.inputName} is Correct`
  }

  getErrorMessage() {
    return `${this.inputName} is Incorrect`
  }
}

export default Message
