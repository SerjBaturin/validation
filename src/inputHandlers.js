import {
  NAME_PATTERN,
  EMAIL_PATTERN,
  PASSWORD_PATTERN,
  TEXTAREA_PATTERN
} from "./patterns"

/**
 * Function handlerName
 * checks user name
 *
 * @param {String} - name input value
 * @return Boolean
 */

export const handlerName = name => {
  if (NAME_PATTERN.test(name) === true) {
    return true
  } else {
    return false
  }
}

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

/**
 * Function handlerTextarea
 * checks textarea
 *
 * @param {String} - textarea input value
 * @return Boolean
 */

export const handlerTextarea = textarea => {
  if (TEXTAREA_PATTERN.test(textarea) === true) {
    return true
  } else {
    return false
  }
}
