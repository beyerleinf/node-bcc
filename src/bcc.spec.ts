import {expect} from 'chai';
import * as sinon from 'sinon';

import {Bcc} from './bcc';
import {Helper} from './helper';
import {Hex} from './hex';

describe('bcc.calculate', () => {
  let bcc: Bcc;

  beforeEach(() => {
    bcc = new Bcc();
  });

  it('should return null if Helper.checkArray returns false', () => {
    const stub = sinon.stub(Helper, 'checkArray').returns(false);

    expect(bcc.calculate([])).to.equal(-1);
    stub.restore();
  });

  it('should return null if the input array is null', () => {
    const stub = sinon.stub(Helper, 'checkArray').returns(false);
    const arr: any = null;

    expect(bcc.calculate(arr)).to.equal(-1);
    stub.restore();
  });

  it('should return null if input array is of zero length', () => {
    const stub = sinon.stub(Helper, 'checkArray').returns(false);

    expect(bcc.calculate([])).to.equal(-1);
    stub.restore();
  });

  it('should return null if input array is undefined', () => {
    const stub = sinon.stub(Helper, 'checkArray').returns(false);
    const arr: any = undefined;

    expect(bcc.calculate(arr)).to.equal(-1);
    stub.restore();
  });

  it('should return correctly calculated bcc', () => {
    const stub = sinon.stub(Helper, 'checkArray').returns(true);
    const validateStub = sinon.stub(Hex.prototype, 'validate').returns(true);

    expect(bcc.calculate(['01', '02', '03', '04'])).to.equal(4);
    stub.restore();
    validateStub.restore();
  });

  it('should return correctly calculated bcc with number array', () => {
    const stub = sinon.stub(Helper, 'checkArray').returns(true);
    const validateStub = sinon.stub(Hex.prototype, 'validate').returns(true);

    expect(bcc.calculate([1, 2, 3, 4])).to.equal(4);
    stub.restore();
    validateStub.restore();
  });
});
