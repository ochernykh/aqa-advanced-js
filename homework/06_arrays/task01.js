const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0,
  negativeCount = 0,
  zeroCount = 0;

for (const number of numbers) {
  if (number > 0) positiveCount++;
  else if (number < 0) negativeCount++;
  else zeroCount++;
}

console.log(`Кількість позитивних чисел: ${positiveCount}`);
console.log(`Кількість негативних чисел: ${negativeCount}`);
console.log(`Кількість нульових чисел: ${zeroCount}`);
