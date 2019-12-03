import { handlerEmail, handlerPassword } from "./inputHandlers"

class Input {
  constructor(input) {
    this.input = input
  }

  validate() {
    switch (this.input.name) {
      case "email":
        handlerEmail(this.input.value)
      case "password":
        handlerPassword(this.input.value)
      default:
        break
    }
  }
}

export default Input
