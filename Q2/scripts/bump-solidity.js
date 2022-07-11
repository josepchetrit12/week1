const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/
const solidityRegexPlonk = /pragma solidity >=\d+\.\d+\.\d+ <\d+\.\d+\.\d+/ // >=0.7.0 <0.9.0

const verifierRegex = /contract Verifier/
const verifierRegexPlonk = /contract PlonkVerifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment
let contentMultiplier = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumpedMultiplier = contentMultiplier.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumpedMultiplier = bumpedMultiplier.replace(verifierRegex, 'contract Multiplier3Verifier');

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumpedMultiplier);

let contentMultiplierPlonk = fs.readFileSync("./contracts/_plonk_Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumpedMultiplierPlonk = contentMultiplierPlonk.replace(solidityRegexPlonk, 'pragma solidity ^0.8.0');
bumpedMultiplierPlonk = bumpedMultiplierPlonk.replace(verifierRegexPlonk, 'contract _plonk_Multiplier3Verifier');

fs.writeFileSync("./contracts/_plonk_Multiplier3Verifier.sol", bumpedMultiplierPlonk);