var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
    name: 'livenet',
    magic: hex('fbc0b6db'),
    addressVersion: 55,
    privKeyVersion: 189,
    P2SHVersion: 5,
    hkeyPublicVersion: 0x0488b21e,
    hkeyPrivateVersion: 0x0488ade4,
    genesisBlock: {
        hash: hex('ec3513ee046dcd52dd41975fcfab4f878f91890a4d17c07a1d7d9c2acbb036de'),
        merkle_root: hex('3de5af055300a913c07e178efc107c9184dddcbc9d888aae7eea6ee00686a0d5'),
        height: 0,
        nonce: 471993,
        version: 1,
        prev_hash: buffertools.fill(new Buffer(32), 0),
        timestamp: 1389688315,
        bits: 3165306666666630
    },
    dnsSeeds: [
        'seedz.potcoin.info'
    ],
    defaultClientPort: 4200,
    lastPoWBlock: 974999
};


exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fec3b9de'),
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('14D879BCBC6DB4A5F49B15AB710BD3F1DC1FF65361F10B3F6E58649C518DDB46'),
    merkle_root: hex('FF79AF16A9FFEB1B826DE1EA7F24539A2FE3702FE987912B09072BC41DBC02B5'),
    height: 0,
    nonce: 1403777,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1399544585,
    bits: 504365040
  },
  dnsSeeds: [],
  defaultClientPort: 55444,
  lastPoWBlock: 150
};
