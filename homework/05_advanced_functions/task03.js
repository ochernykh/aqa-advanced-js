const divide = (numerator, denominator) => {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Аргументи повинні бути числами");
  }
  if (denominator === 0) {
    throw new Error("Ділення на нуль неможливе");
  }

  return numerator / denominator;
};

const testCases = [
  [10, 2],
  [5, 0],
  [8, "два"],
  ["п'ять", 2],
];

const testDivide = (cases) => {
  for (let i = 0; i < cases.length; i++) {
    const [numerator, denominator] = cases[i];
    console.log(`🔹 Тест #${i + 1}: divide(${numerator}, ${denominator})`);

    try {
      const result = divide(numerator, denominator);
      console.log(`Результат: ${result}`);
    } catch (error) {
      console.error(`Помилка: ${error.message}`);
    } finally {
      console.log("Робота завершена\n");
    }
  }
};

//Виклик
testDivide(testCases);
