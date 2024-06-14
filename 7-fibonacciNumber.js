/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let fibArr = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
  }
  return fibArr[n];
};

let n = 3;
console.log(fib(n))