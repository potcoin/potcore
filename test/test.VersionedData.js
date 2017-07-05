'use strict';

var chai = chai || require('chai');
var bitcore = bitcore || require('../bitcore');

var should = chai.should();

var VersionedDataModule = bitcore.VersionedData;
var VersionedData;

describe('VersionedData', function() {
  it('should initialze the main object', function() {
    should.exist(VersionedDataModule);
  });
  it('should be able to create class', function() {
    VersionedData = VersionedDataModule;
    should.exist(VersionedData);
  });
  it('should be able to create an instance', function() {
    var vd = new VersionedData();
    should.exist(vd);
  });
  it('should get correct version', function() {
    var vda = new VersionedData('RsMLLAQAJFAnHXM5z7ExWsLrd5B7foYk92');
    vda.version().should.equal(61);
    //commenting out as potcoin doesn't use multisig yet.
    //var vdb = new VersionedData('3746djr32k2Lp23UUbdkCTQ6zhMJ7d8MD7');
    //vdb.version().should.equal(5);
  });
});





