import { EMAIL_PATTERN, PASSWORD_PATTERN } from "./patterns"

/**
 * Function handlerEmail
 * checks user email
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

/**
 * Function handlerPassword
 * checks user password
 *
 * @param {String} - password input value
 * @return Boolean
 */

export const handlerPassword = password => {
  if (PASSWORD_PATTERN.test(password) === true) {
    return true
  } else {
    return false
  }
}
