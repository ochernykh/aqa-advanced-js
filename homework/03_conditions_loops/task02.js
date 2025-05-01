const averageGrade = 85;

if (averageGrade < 0 || averageGrade > 100 || isNaN(averageGrade)) {
  console.log('Некоректна оцінка');
} else {
  const gradeGroup = Math.floor(averageGrade / 10);

  switch (gradeGroup) {
    case 10:
    case 9:
      console.log('Відмінно');
      break;
    case 8:
      console.log('Дуже добре');
      break;
    case 7:
      console.log('Добре');
      break;
    case 6:
      console.log('Задовільно');
      break;
    default:
      console.log('Незадовільно');
  }
}
