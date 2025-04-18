const person = {
  firstName: "Ірина",
  lastName: "Шевченко",
  age: 30,
};

person.email = "iryna@gmail.com";
delete person.age;

console.log(person);
