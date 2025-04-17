const users = [
  { name: "Андрій", email: "andrii@egmail.com", age: 25 },
  { name: "Марія", email: "maria@gmail.com", age: 30 },
  { name: "Ігор", email: "ihor@gmail.com", age: 22 },
];

for (const { name, email, age } of users) {
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}
