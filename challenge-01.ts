/**
 * Let M be a not empty set of integer numbers, find the first subset of 2 numbers of M which sum N.
 * For instance, let's say we've got a set of numbers [2, 5, 8, 14, 0] and N = 10, the resulting subset should be [2, 8].
 */
function subSetNumbers(items: number[], n: number): number[] {
  const map = new Map();
  for (const item of items) {
    const v = n - item;
    if (map.has(String(item))) {
      return [map.get(String(item)), item];
    }
    map.set(String(v), item);
  }
  return [];
}

const subSet = subSetNumbers([2, 5, 8, 14, 0], 10);
console.log(subSet);
