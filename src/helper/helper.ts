export class Helper {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  static checkArray(arrayToCheck: any[]): boolean {
    if (!Array.isArray(arrayToCheck)) {
      return false;
    }

    if (arrayToCheck.length === 0) {
      return false;
    }

    return true;
  }

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
