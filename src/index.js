import Form from "./Form"
import getTextareaLength from './lib'

/**
 * Function defineForm()
 * defines active form with submit handler
 * Submit handler makes new Form instance
 * & calls validate method
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
getTextareaLength()