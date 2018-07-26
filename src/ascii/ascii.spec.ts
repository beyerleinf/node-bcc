import {expect} from 'chai';
import * as sinon from 'sinon';

import {Ascii} from './ascii';

describe('Ascii', () => {
  describe('asciiToByteArray', () => {
    let validateStub: sinon.SinonStub;

    beforeEach(() => {
      validateStub = sinon.stub(Ascii, 'validate');
    });

    afterEach(() => {
      validateStub.restore();
    });

    it('should return correct array when only valid chars in input', () => {
      validateStub.returns(true);

      expect(Ascii.asciiToByteArray('ABC')).to.deep.equal([0x41, 0x42, 0x43]);
    });

    it('should replace non-ASCII chars with SUB character', () => {
      validateStub.returns(false);
      expect(Ascii.asciiToByteArray('ABC')).to.deep.equal([0x1A, 0x1A, 0x1A]);
    });
  });

  describe('validate', () => {
    it('should return true when string only contains ASCII chars', () => {
      expect(Ascii.validate('SomeString')).to.be.true;
    });

    it('should return false when string contains non-ASCII chars', () => {
      expect(Ascii.validate('So much £££!')).to.be.false;
    });
  });
});
