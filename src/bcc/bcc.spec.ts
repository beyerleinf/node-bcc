import { expect } from 'chai';
import * as sinon from 'sinon';
import { Helper } from '../helper';
import { Hex } from '../hex';
import { Bcc } from './bcc';

/* eslint-disable @typescript-eslint/no-explicit-any */

describe('Bcc', () => {
  let sandbox: sinon.SinonSandbox;

  let checkArrayStub: sinon.SinonStub;
  let validateStub: sinon.SinonStub;

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    checkArrayStub = sandbox.stub(Helper, 'checkArray');
    validateStub = sandbox.stub(Hex, 'validate');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('calculate', () => {
    it('should return null if Helper.checkArray returns false', () => {
      checkArrayStub.returns(false);

      expect(Bcc.calculate([])).to.equal(-1);
    });

    it('should return null if the input array is null', () => {
      checkArrayStub.returns(false);
      const arr: any = null;

      expect(Bcc.calculate(arr)).to.equal(-1);
    });

    it('should return null if input array is of zero length', () => {
      checkArrayStub.returns(false);

      expect(Bcc.calculate([])).to.equal(-1);
    });

    it('should return null if input array is undefined', () => {
      checkArrayStub.returns(false);
      const arr: any = undefined;

      expect(Bcc.calculate(arr)).to.equal(-1);
    });

    it('should return correctly calculated Bcc', () => {
      checkArrayStub.returns(true);
      validateStub.returns(true);

      expect(Bcc.calculate(['01', '02', '03', '04'])).to.equal(4);
    });

    it('should return correctly calculated Bcc with number array', () => {
      checkArrayStub.returns(true);
      validateStub.returns(true);

      expect(Bcc.calculate([1, 2, 3, 4])).to.equal(4);
    });
  });
});
