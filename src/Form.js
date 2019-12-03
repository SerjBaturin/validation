import Input from "./Input"

class Form {
  constructor(form) {
    this.form = form
  }
  parse() {
    const arr = this.form.getElementsByTagName("input")
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
