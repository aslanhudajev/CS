function fibsRec(n) {
  if (n === 1) return [0n, 1n];
  else {
    const part = fibsRec(n - 1);
    return [].concat(part, part[n - 1] + part[n - 2]);
  }
}

export default fibsRec;