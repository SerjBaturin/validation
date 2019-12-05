/**
 * Class Output
 * @constructor
 *
 * Node element is output
 * makeOutput method gets message & color
 * and changes text and style of message
 *
 * @param {String} - node element
 *
 */
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
