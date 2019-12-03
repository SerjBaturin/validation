import { handlerEmail, handlerPassword } from "./inputHandlers"
import Form from "./Form"

/**
 * Function defineForm()
 * defines active form with submit handler
 * returns success or error message
 *
 * @return String
 */
const defineForm = () => {
  const forms = document.getElementsByTagName("form")

  for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", e => {
      e.preventDefault()
      new Form(forms[i]).validate()
    })
  }
}

defineForm()
