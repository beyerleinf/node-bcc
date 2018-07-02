/**
 * This helper class provides utility methods.
 *
 * @export
 * @class Helper
 */
export class Helper {
  /**
   * Checks the given array for `null`, `undefined` or zero length.
   *
   * @export
   * @param {any} arrayToCheck The array to check.
   * @returns {boolean} False, when the given array is `null`, `undefined` or of zero length.
   * @memberof Helper
   */
  static checkArray(arrayToCheck: any[]): boolean {
    if (!Array.isArray(arrayToCheck)) {
      return false;
    }

    if (arrayToCheck.length === 0) {
      return false;
    }

    return true;
  }

  /**
   * Validates the given string.
   *
   * @static
   * @param {string} stringToCheck The string to validate.
   * @returns {boolean} False if the string is null, undefined or empty.
   * @memberof Helper
   */
  static checkString(stringToCheck: string): boolean {
    if (stringToCheck === null) {
      return false;
    }

    if (stringToCheck === undefined) {
      return false;
    }

    if (stringToCheck === '') {
      return false;
    }

    return true;
  }
}
