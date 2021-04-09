const numbers = new Set([1, 2, 2, 3, 3, 4, 5, 1, [1, 2, 3]]);
numbers.add(3);
numbers.add([1, 2, 3]);
numbers.delete(2);
numbers.clear;

console.log(numbers);
