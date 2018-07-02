import {expect} from 'chai';

import {Helper} from './helper';

describe('Helper', () => {
  describe('checkArray', () => {
    it('should return false if array is null', () => {
      const arr: any = null;
      expect(Helper.checkArray(arr)).to.be.false;
    });

    it('should return false if array is undefined', () => {
      const arr: any = undefined;
      expect(Helper.checkArray(arr)).to.be.false;
    });

    it('should return false if array is of zero length', () => {
      expect(Helper.checkArray([])).to.be.false;
    });

    it('should return true if array is valid', () => {
      expect(Helper.checkArray([1, 2, 3])).to.be.true;
    });
  });

  describe('checkString', () => {
    it('should return false if input is null', () => {
      const str: any = null;
      expect(Helper.checkString(str)).to.be.false;
    });

    it('should return false if input is undefined', () => {
      const str: any = undefined;
      expect(Helper.checkString(str)).to.be.false;
    });

    it('should return false if input is empty', () => {
      expect(Helper.checkString('')).to.be.false;
    });

    it('should return true if string is not empty', () => {
      expect(Helper.checkString('ABC')).to.be.true;
    });
  });
})
