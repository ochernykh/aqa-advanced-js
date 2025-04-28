function checkOrder(available, ordered) {
  if (ordered === 0) {
    return 'Your order is empty';
  } else if (ordered > available) {
    return 'Your order is too large, we don’t have enough goods.';
  } else {
    return 'Your order is accepted';
  }
}

// Тестові виклики:
console.log(checkOrder(10, 0)); // "Your order is empty"
console.log(checkOrder(10, 12)); // "Your order is too large..."
console.log(checkOrder(10, 5)); // "Your order is accepted"
