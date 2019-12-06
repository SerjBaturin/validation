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
    return `${this.inputName} is correct`
  }

  getErrorMessage() {
    switch (this.inputName) {
      case "name":
        return "Only latin, minimum 2 chars"
        break
      case "email":
        return "Example - mail@mail.com"
        break
      case "password":
        return "Only latin and numbers"
        break
      case "textarea":
        return "Minimum 3 symbols"
        break
      default:
        return `${this.inputName} is incorrect`
        break
    }
  }
}

export default Message
