import { expect } from 'chai';
import * as sinon from 'sinon';
import { Helper } from '../helper';
import { Bcc } from './bcc';

/* eslint-disable @typescript-eslint/no-explicit-any */

describe('Bcc', () => {
  let sandbox: sinon.SinonSandbox;

  let checkArrayStub: sinon.SinonStub;

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    checkArrayStub = sandbox.stub(Helper, 'checkArray');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('calculate', () => {
    it('should return null if Helper.checkArray returns false', () => {
      checkArrayStub.returns(false);

      expect(Bcc.calculate([])).to.equal(-1);
    });

    it('should return correctly calculated BCC with string array', () => {
      checkArrayStub.returns(true);

      expect(Bcc.calculate(['01', '02', '03', '04'])).to.equal(4);
    });

    it('should return correctly calculated BCC with number array', () => {
      checkArrayStub.returns(true);

      expect(Bcc.calculate([1, 2, 3, 4])).to.equal(4);
    });

    it('should return crrectly calculated BCC with buffer', () => {
      checkArrayStub.returns(true);

      expect(Bcc.calculate(Buffer.from([1, 2, 3, 4]))).to.equal(4);
    });
  });
});
