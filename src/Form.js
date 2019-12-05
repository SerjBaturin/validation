import Input from "./Input"

/**
 * Class Form
 * @constructor
 *
 * Define & parsing current form
 * Start submit handler
 *
 * @param {String, Number, Boolean} - emails, passwords, check & radio buttons
 * @return String
 */

class Form {
  constructor(form) {
    this.form = form
  }
  parse() {
    const arr = this.form.getElementsByClassName("input")
    for (let i = 0; i < arr.length; i++) {
      new Input(arr[i]).validate()
    }
  }
  validate() {
    console.log("Validate", this.form.className)
    this.parse()
  }
}

export default Form
