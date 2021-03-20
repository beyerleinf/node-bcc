import { Helper } from '../helper';

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
   * @param message The bytes of the message as a hex string array.
   * @returns The calculated BCC.
   */
  static calculate(message: string[]): number;

  /**
   * This function calculates a Block Check Character for the given array of
   * numbers.
   *
   * ### Example
   *
   * ``` ts
   * console.log(Bcc.calculate([1, 2, 3, 4]));
   * ```
   *
   * ### Output
   * `4`
   *
   * @static
   * @param message The bytes of the message as a number array.
   * @returns The calculated BCC.
   */
  static calculate(message: number[]): number;

  /**
   * This function calculates a Block Check Character for the buffer.
   *
   * ### Example
   *
   * ```ts
   * console.log(Bcc.calculate(Buffer.from([1, 2, 3, 4])))
   * ```
   *
   * ### Output
   * `4`
   *
   * @static
   * @param message The bytes of the message as a buffer.
   * @returns The calculated BCC.
   */
  static calculate(message: Buffer): number;

  static calculate(message: string[] | number[] | Buffer): number {
    let bcc = 0x00;

    if (!Buffer.isBuffer(message) && !Helper.checkArray(message)) {
      return -1;
    }

    for (const byte of message) {
      bcc ^= typeof byte === 'string' ? parseInt(byte, 16) : byte;
    }

    return bcc;
  }
}
