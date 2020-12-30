import { expect } from 'chai';
import { Hex } from './hex';

/* eslint-disable @typescript-eslint/no-explicit-any */

describe('Hex', () => {
  describe('split', () => {
    it('should return null if input string is null', () => {
      const str: any = null;
      expect(Hex.split(str)).to.be.null;
    });

    it('should return null if input string is undefined', () => {
      const str: any = undefined;
      expect(Hex.split(str)).to.be.null;
    });

    it('should return null if input string is empty', () => {
      expect(Hex.split('')).to.be.null;
    });

    it('should return correctly split array', () => {
      expect(Hex.split('AABBCCDDEEFF')).to.deep.equal(['AA', 'BB', 'CC', 'DD', 'EE', 'FF']);
    });
  });

  describe('validate', () => {
    it('should return false if input string is null', () => {
      const str: any = null;
      expect(Hex.validate(str)).to.be.false;
    });

    it('should return false if input string is undefined', () => {
      const str: any = undefined;
      expect(Hex.validate(str)).to.be.false;
    });

    it('should return false if input string is empty', () => {
      expect(Hex.validate('')).to.be.false;
    });

    it('should return false if input string is invalid hex string', () => {
      expect(Hex.validate('00112233445566778899AABBCCDDEEFFXX')).to.be.false;
    });

    it('should return true if input string is valid hex string', () => {
      expect(Hex.validate('00112233445566778899AABBCCDDEEFF')).to.be.true;
    });
  });

  describe('toHexString', () => {
    it('should return null if input is of zero length', () => {
      expect(Hex.toHexString([])).to.be.null;
    });

    it('should return null if input array is null', () => {
      const arr: any = null;
      expect(Hex.toHexString(arr)).to.be.null;
    });

    it('should return null if input is undefined', () => {
      const arr: any = undefined;
      expect(Hex.toHexString(arr)).to.be.null;
    });

    for (let i = 0; i < 16; i++) {
      it(`should return string prepended with 0 if input value is ${i}`, () => {
        expect(Hex.toHexString([i])).to.deep.equal(`0${i.toString(16)}`);
      });
    }

    it('should return return valid hex string', () => {
      expect(Hex.toHexString([1, 15, 58, 96, 34])).to.deep.equal('010f3a6022');
    });

    it('should return the string in upopercase of the uppercase flag was set', () => {
      expect(Hex.toHexString([1, 15, 58, 96, 34], true)).to.deep.equal('010F3A6022');
    });
  });
});
