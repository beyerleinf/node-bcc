import { Helper } from '../helper';

/**
 * This class provides methods for handling hex strings.
 *
 * @export
 * @class Hex
 */
export class Hex {
  /**
   * Splits the given hexadecimal string.
   *
   * The input string should not contain spaces and the individual bytes should
   * not be prepended by '0x'.
   *
   * ## Example
   * **Input:**
   * ``` js
   * 'AABBCCDDEEFF'
   * ```
   *
   * **Output:**
   * ``` js
   * ['AA', 'BB', 'CC', 'DD', 'EE', 'FF']
   * ```
   *
   * @static
   * @param {string} hex
   * @returns {string[]|null}
   * @memberof Hex
   */
  static split(hex: string): string[] | null {
    const chunks: string[] = [];

    if (!Helper.checkString(hex)) {
      return null;
    }

    for (let i = 0; i < hex.length; i += 2) {
      chunks.push(hex.substring(i, i + 2));
    }

    return chunks;
  }

  /**
   * Validates the given hexadecimal string.
   *
   * @static
   * @param {string} hex The hexadecimal string to validate.
   * @returns {boolean} Whether the given string is a valid hexadecimal string.
   * @memberof Hex
   */
  static validate(hex: string): boolean {
    const regExp = /^[-+]?[0-9A-Fa-f]+\.?[0-9A-Fa-f]*?$/;

    if (!Helper.checkString(hex)) {
      return false;
    }

    return regExp.test(hex);
  }

  /**
   * Converts the given array of numbers to a hexadecimal string.
   *
   * @static
   * @param {number[]} array The array to convert.
   * @param {boolean} [uppercase] Whether the string should be uppercase.
   * @returns {string|null} The given array of numbers as a hexadecimal string.
   * @memberof Hex
   */
  static toHexString(array: number[], uppercase?: boolean): string | null {
    let result = '';

    if (!Helper.checkArray(array)) {
      return null;
    }

    for (const num of array) {
      if (num < 16) {
        result += `0${num.toString(16)}`;
        continue;
      }

      result += num.toString(16);
    }

    if (uppercase) {
      return result.toUpperCase();
    }

    return result.toLowerCase();
  }
}
