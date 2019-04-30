/** Validates an ATM pin.
 *  Returns true if number is numeric and of length two or four.
 *  Returns false otherwise
 */

function validatePIN (pin) {
  return /^[0-9]{4}$|^[0-9]{6}$/.test(pin);
}