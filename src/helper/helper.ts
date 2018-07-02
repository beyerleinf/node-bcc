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
   * @param {any} array The array to check.
   * @returns {boolean} False, when the given array is `null`, `undefined` or of zero length.
   * @memberof Helper
   */
  static checkArray(array: any[]): boolean {
    if (!Array.isArray(array)) {
      return false;
    }

    if (array.length === 0) {
      return false;
    }

    return true;
  }

  /**
   * Validates the given string.
   *
   * @static
   * @param {string} string The string to validate.
   * @returns {boolean} False if the string is null, undefined or empty.
   * @memberof Helper
   */
  static checkString(string: string): boolean {
    if (string === null) {
      return false;
    }

    if (string === undefined) {
      return false;
    }

    if (string === '') {
      return false;
    }

    return true;
  }
}
