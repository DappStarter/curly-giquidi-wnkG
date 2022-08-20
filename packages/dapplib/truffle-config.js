require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stool regret shift pudding good end army gauge'; 
let testAccounts = [
"0x234a7520548b766ad880ddca89187597d2d1d13c75c58b4b9555e079d7f674b5",
"0xc68af807b5e1ba0b60e80b4972c3ee85ae76f35b122c993145d29b417206a71f",
"0xf75c3cd88e8c8cbaf28fd42fc2f1aaa5e240fdf0d32855a182dd7c715998556e",
"0xe4cf2ef36ec4da91ae470d6448bc3df6e206dfc91eeafafcc00bb079369090e6",
"0xce15aa254e84eca9e493afd8691f531fab893ecea63753e32ecd46f38f0e5c62",
"0xea127a00b40c7bb36190065cd52c390c2b460da98ca4fcb2fcf77361e6ff3173",
"0xc83a03d8d3ff752299724f69a4ebcf50aca9174776f4f90b8a657c418772b4e6",
"0x5954eafc1ab89d418dacb225e463f5de47b6b0cb0433e37eaea36e7b6ecc5d9f",
"0xe137482110ad46ad8483001ad138d914975d21314de8cfcc83cc11c4b74e86de",
"0x85bcdfd5ad77a536539c5c1962bb4307bdfac6164e3d2ef9ca8d0315e0f4e5af"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

