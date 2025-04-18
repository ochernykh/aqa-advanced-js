const car1 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

const car2 = {
  brand: "Ford",
  model: "Focus",
  owner: "Олександр",
};

const car3 = {
  ...car1,
  ...car2,
};

console.log(car3);
