require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remain purity hover knife bottom soon'; 
let testAccounts = [
"0xc2c8da7ce241af833419884131770ddb4d4adde016ddab3ef9bf152ff9482cca",
"0xf6f5c0030ac3c7a413351f47a02fe030aac254793416fc1de3fdea1e5bb4847f",
"0x9b0c8065922fc2a8eb7a996905f53843d8d57e8db0ecfca9ddfae0583c03f087",
"0xadffe68c7a5eae9e429b10875450b8ee413ca457ec17b27a1de414bd8db16656",
"0x51256d1ce28d7c6bc581391a0ced929e16f9a2e4842e4a53def7d38576144229",
"0x87871ec681172722c6826efba28f8e73123296f28098c1b98ab36a08b284d1bf",
"0x623e43f24b9938b353047227d9308772ab9cee44d56733c7d9cd3d8442d88c93",
"0x9cca4775a8f2c820dcf756049bd40fd1b3b8e318f42e67ce527e10f13a83931f",
"0xf42b310849682a32b3459d7dfd8eeaea764418010d3c90cb61131d77a3555a9d",
"0xbd2805560e7c58d7ab2b6a434b7c271f4329b176dcaab0888c743a2b9f668844"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

