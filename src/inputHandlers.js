import { EMAIL_PATTERN } from "./patterns/patterns"

/**
 * Function handlerEmail
 * checks user email, validation
 *
 * @param {String} - email input value
 * @return Boolean
 */

export const handlerEmail = email => {
  if (EMAIL_PATTERN.test(email) === true) {
    return true
  } else {
    return false
  }
}
