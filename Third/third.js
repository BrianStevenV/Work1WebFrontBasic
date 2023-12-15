const pTrue = true;
const qTrue = true;
const pFalse = false;
const qFalse = false;

const notPTrue = !pTrue;
const notPFalse = !pFalse;

const notQTrue = !qTrue;
const notQFalse = !qFalse;

const notPAndQTrueTrue = notPTrue && qTrue;
const notPAndQTrueFalse = notPTrue && qFalse;
const notPAndQFalseTrue = notPFalse && qTrue;
const notPAndQFalseFalse = notPFalse && qFalse;

const notPAndNotQTrueTrue = notPTrue && notQTrue;
const notPAndNotQTrueFalse = notPTrue && notQFalse;
const notPAndNotQFalseTrue = notPFalse && notQTrue;
const notPAndNotQFalseFalse = notPFalse && notQFalse;

console.log("Paint the entire table");


console.log(" a.   -----------------------------------------------------------");

console.log(`${pTrue}   ${qTrue}    ${notPTrue}       ${notPAndQTrueTrue} `);
console.log(`${pTrue}   ${qFalse}   ${notPTrue}       ${notPAndQTrueFalse}`);
console.log(`${pFalse}   ${qTrue}   ${notPFalse}       ${notPAndQFalseTrue}`);
console.log(`${pFalse}   ${qFalse}  ${notPFalse}       ${notPAndQFalseFalse}`);

console.log(" b.   -----------------------------------------------------------");

console.log(`${pTrue}   ${qTrue}    ${notPTrue}       ${notQTrue}        ${notPAndNotQTrueTrue}`);
console.log(`${pTrue}   ${qFalse}   ${notPTrue}       ${notQFalse}       ${notPAndNotQTrueFalse}`);
console.log(`${pFalse}   ${qTrue}   ${notPFalse}       ${notQTrue}        ${notPAndNotQFalseTrue}`);
console.log(`${pFalse}   ${qFalse}  ${notPFalse}       ${notQFalse}       ${notPAndNotQFalseFalse}`);
