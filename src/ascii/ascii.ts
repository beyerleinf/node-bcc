export class Ascii {
  /**
   * Converts the given `input` into an array of numbers representing the
   * characters as their decimal value. When a character that is not within the
   * ASCII spec is encountered, a SUB (`0x1A`hex / `26`dec) is inserted. We
   * recommend using {@link Ascii.validate} to validate the input first.
   *
   * @param input The string to convert.
   * @returns An array that contains the character codes.
   */
  static asciiToByteArray(input: string): number[] {
    const array: number[] = [];

    for (const char of input) {
      if (!this.validate(char)) {
        array.push(0x1a);
        continue;
      }

      array.push(char.charCodeAt(0));
    }

    return array;
  }

  /**
   * Validates the given `input` to make sure it only contains ASCII characters.
   *
   * @static
   * @param input The string to validate.
   * @returns Whether the given string is valid.
   */
  static validate(input: string): boolean {
    let result = true;

    for (const char of input) {
      if (char.charCodeAt(0) > 127) {
        result = false;
      }
    }

    return result;
  }
}
