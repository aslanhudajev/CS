function mergeSort(arr) {
  //base case
  if (arr.length === 1) {
    return arr;
  } else {
    const l = arr.length;

    //divide the array
    let merged = [];
    const left = mergeSort(arr.slice(0, l / 2));
    const right = mergeSort(arr.slice(l / 2, l));

    //merge the array
    let li = 0;
    let ri = 0;
    while (li <= left.length && ri <= right.length) {
      if (left[li] < right[ri]) {
        merged.push(left[li]);
        li++;
      } else if (left[li] > right[ri]) {
        merged.push(right[ri]);
        ri++;
      } else if (
        left[li] === right[ri] &&
        right[ri] !== undefined &&
        left[li] !== undefined
      ) {
        merged.push(left[li]);
        li++;
      } else if (left[li] === undefined && right[ri] !== undefined) {
        merged.push(right[ri]);
        ri++;
      } else if (right[ri] === undefined && left[li] !== undefined) {
        merged.push(left[li]);
        li++;
      } else break;
    }
    return merged;
  }
}

export default mergeSort;
