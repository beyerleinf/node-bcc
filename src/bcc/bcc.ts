import {Helper} from '../helper';

/**
 * This class provides methods for calculating the Block Check Character of a
 * message.
 *
 * @export
 * @class Bcc
 */
export class Bcc {
  /**
   * This function calculates a Block Check Character for the given array of
   * strings.
   *
   * ### Example
   *
   * ``` ts
   * console.log(calculateBcc(['01', '02', '03', '04']));
   * ```
   *
   * ### Output
   * `4`
   *
   * @static
   * @param {string[]} message The bytes of the message as a hex string array.
   * @returns {number}
   */
  static calculate(message: string[]): number;

  /**
   * This function calculates a Block Check Character for the given array of
   * numbers.
   *
   * ### Example
   *
   * ``` ts
   * console.log(calculateBcc([1, 2, 3, 4]));
   * ```
   *
   * ### Output
   * `4`
   *
   * @static
   * @param {number[]} message The bytes of the message as a number array.
   * @returns {number}
   */
  static calculate(message: number[]): number;

  /**
   * This function calculates a Block Check Character for the given array.
   *
   * ### Example
   *
   * ``` ts
   * console.log(calculateBcc(['01', '02', '03', '04']));
   * ```
   * ``` ts
   * console.log(calculateBcc([1, 2, 3, 4]));
   * ```
   *
   * ### Output
   * `4`
   *
   * @static
   * @param {string[]|number[]} message The bytes of the message as a hex string array or as a number array.
   * @returns {number}
   */
  static calculate(message: string[] | number[]): number {
    let bcc = 0x00;

    if (!Helper.checkArray(message)) {
      return -1;
    }

    for (const byte of message) {
      if (typeof byte === 'string') {
        bcc ^= parseInt(byte, 16);
      } else {
        bcc ^= byte;
      }
    }

    return bcc;
  }
}
