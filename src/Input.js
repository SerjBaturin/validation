import {
  handlerName,
  handlerEmail,
  handlerPassword,
  handlerTextarea
} from "./inputHandlers"
import Message from "./Message"
import Output from "./Output"

/**
 * Class Input
 * @constructor
 *
 * Validate method defines input value (email, password, etc...)
 * & calls the correct handler
 *
 * @param {String} - names, emails, passwords
 */

class Input {
  constructor(input) {
    this.input = input
  }

  validate() {
    const message = new Message(this.input.name.toUpperCase())
    const output = new Output(
      this.input.parentNode.getElementsByTagName("span")[0]
    )
    switch (this.input.name) {
      case "name":
        handlerName(this.input.value)
          ? output.makeOutput(message.getSuccessMessage(), "green")
          : output.makeOutput(message.getErrorMessage(), "red")
        break
      case "email":
        handlerEmail(this.input.value)
          ? output.makeOutput(message.getSuccessMessage(), "green")
          : output.makeOutput(message.getErrorMessage(), "red")
        break
      case "password":
        handlerPassword(this.input.value)
          ? output.makeOutput(message.getSuccessMessage(), "green")
          : output.makeOutput(message.getErrorMessage(), "red")
        break
      case "textarea":
        handlerTextarea(this.input.value)
          ? output.makeOutput(message.getSuccessMessage(), "green")
          : output.makeOutput(message.getErrorMessage(), "red")
        break
      default:
        break
    }
  }
}

export default Input
