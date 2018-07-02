import {expect} from 'chai';
import {Hex} from './hex';

describe('Hex', () => {
  let hex: Hex;

  beforeEach(() => {
    hex = new Hex();
  });

  describe('split', () => {
    it('should return null if input string is null', () => {
      const str: any = null;
      expect(hex.split(str)).to.be.null;
    });

    it('should return null if input string is undefined', () => {
      const str: any = undefined;
      expect(hex.split(str)).to.be.null;
    });

    it('should return null if input string is empty', () => {
      expect(hex.split('')).to.be.null;
    });

    it('should return correctly split array', () => {
      expect(hex.split('AABBCCDDEEFF')).to.deep.equal(['AA', 'BB', 'CC', 'DD', 'EE', 'FF']);
    });
  })

  describe('validate', () => {
    it('should return false if input string is null', () => {
      const str: any = null;
      expect(hex.validate(str)).to.be.false;
    });

    it('should return false if input string is undefined', () => {
      const str: any = undefined;
      expect(hex.validate(str)).to.be.false;
    });

    it('should return false if input string is empty', () => {
      expect(hex.validate('')).to.be.false;
    });

    it('should return false if input string is invalid hex string', () => {
      expect(hex.validate('00112233445566778899AABBCCDDEEFFXX')).to.be.false;
    });

    it('should return true if input string is valid hex string', () => {
      expect(hex.validate('00112233445566778899AABBCCDDEEFF')).to.be.true;
    });
  });

  describe('toHexString', () => {
    it('should return null if input is of zero length', () => {
      expect(hex.toHexString([])).to.be.null;
    });

    it('should return null if input array is null', () => {
      const arr: any = null;
      expect(hex.toHexString(arr)).to.be.null;
    });

    it('should return null if input is undefined', () => {
      const arr: any = undefined;
      expect(hex.toHexString(arr)).to.be.null;
    });

    it('should return string prepended with 0 if input value is 15 or lower', () => {
      for (let i = 0; i < 16; i++) {
        expect(hex.toHexString([i])).to.deep.equal(`0${i.toString(16)}`);
      }
    });

    it('should return return valid hex string', () => {
      expect(hex.toHexString([1, 15, 58, 96, 34])).to.deep.equal('010f3a6022');
    });

    it('should return the string in upopercase of the uppercase flag was set', () => {
      expect(hex.toHexString([1, 15, 58, 96, 34], true)).to.deep.equal('010F3A6022');
    });
  });
});
