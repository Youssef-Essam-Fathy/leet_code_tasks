/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a === "") return "0";
    if (b === "") return "0";
    let bigIntA = BigInt("0b" + a);
    let bigIntB = BigInt("0b" + b);
    let bigIntSum = bigIntA + bigIntB
    return bigIntSum.toString(2);
}
let a = "1010", b = "1011";
console.log(addBinary(a, b))