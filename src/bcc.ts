import {Helper} from './helper';

/**
 * This class provides methods for calculating the Block Check Character of a message.
 *
 * @export
 * @class Bcc
 */
export class Bcc {
  /**
   * This function calculates a Block Check Character for the given array of `hex` strings.
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
   * @param {string[]} messageBytes The bytes of the message as a hex string.
   * @returns {number}
   */
  calculate(messageBytes: string[]): number {
    let bcc: number = 0x00;

    if (!Helper.checkArray(messageBytes)) {
      return -1;
    }

    messageBytes.forEach(element => {
      bcc ^= parseInt(element, 16);
    });

    return bcc;
  }
}
