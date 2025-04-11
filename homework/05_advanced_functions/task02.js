function recursiveCounter(num) {
  if (num <= 0) return;
  console.log(num);
  recursiveCounter(num - 1);
}

// Виклик
recursiveCounter(5); // 5 4 3 2 1
