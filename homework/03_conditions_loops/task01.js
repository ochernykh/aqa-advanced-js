const averageGrade = 85;

if (averageGrade >= 90 && averageGrade <= 100) {
  console.log("Відмінно");
} else if (averageGrade >= 80) {
  console.log("Дуже добре");
} else if (averageGrade >= 70) {
  console.log("Добре");
} else if (averageGrade >= 60) {
  console.log("Задовільно");
} else if (averageGrade >= 0) {
  console.log("Незадовільно");
} else {
  console.log("Некоректна оцінка");
}
