function fibs(n) {
  let arr = [0n, 1n];
  for (let i = arr.length; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

export default fibs;