class Output {
  constructor(element) {
    this.element = element
  }

  makeOutput(message, color) {
    this.element.innerHTML = message
    this.element.style.color = color
  }
}

export default Output
