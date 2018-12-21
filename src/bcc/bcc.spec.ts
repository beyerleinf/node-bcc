/* tslint:disable no-any */

import {expect} from 'chai';
import * as sinon from 'sinon';

import {Helper} from '../helper';
import {Hex} from '../hex';

import {Bcc} from './bcc';

describe('Bcc', () => {
  describe('calculate', () => {
    it('should return null if Helper.checkArray returns false', () => {
      const stub = sinon.stub(Helper, 'checkArray').returns(false);

      expect(Bcc.calculate([])).to.equal(-1);
      stub.restore();
    });

    it('should return null if the input array is null', () => {
      const stub = sinon.stub(Helper, 'checkArray').returns(false);
      const arr: any = null;

      expect(Bcc.calculate(arr)).to.equal(-1);
      stub.restore();
    });

    it('should return null if input array is of zero length', () => {
      const stub = sinon.stub(Helper, 'checkArray').returns(false);

      expect(Bcc.calculate([])).to.equal(-1);
      stub.restore();
    });

    it('should return null if input array is undefined', () => {
      const stub = sinon.stub(Helper, 'checkArray').returns(false);
      const arr: any = undefined;

      expect(Bcc.calculate(arr)).to.equal(-1);
      stub.restore();
    });

    it('should return correctly calculated Bcc', () => {
      const stub = sinon.stub(Helper, 'checkArray').returns(true);
      const validateStub = sinon.stub(Hex, 'validate').returns(true);

      expect(Bcc.calculate(['01', '02', '03', '04'])).to.equal(4);
      stub.restore();
      validateStub.restore();
    });

    it('should return correctly calculated Bcc with number array', () => {
      const stub = sinon.stub(Helper, 'checkArray').returns(true);
      const validateStub = sinon.stub(Hex, 'validate').returns(true);

      expect(Bcc.calculate([1, 2, 3, 4])).to.equal(4);
      stub.restore();
      validateStub.restore();
    });
  });
});
