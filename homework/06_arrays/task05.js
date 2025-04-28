const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

// 1. Через spread оператор
const mergedWithSpread = [...firstArray, ...secondArray];

// 2. Через concat()
const mergedWithConcat = firstArray.concat(secondArray);

// 3. Через push з копією
const mergedWithPush = [...firstArray];
mergedWithPush.push(...secondArray);

console.log(mergedWithSpread); // [1, 2, 3, 4, 5, 6]
console.log(mergedWithConcat); // [1, 2, 3, 4, 5, 6]
console.log(mergedWithPush); // [1, 2, 3, 4, 5, 6]
