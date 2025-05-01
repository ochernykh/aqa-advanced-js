const Book = require('./Book');
const EBook = require('./EBook');

// Створення інстансів Book
const book1 = new Book('Міряй важливе', 'Джон Доер', 2018);
const book2 = new Book('Залишенець', 'Василь Шкляр', 2005);

// Вивід інформації
book1.printInfo();
book2.printInfo();

// Створення EBook
const ebook1 = new EBook('Розумний інвестор', 'Бенджамін Грем', 2022, 'pdf');
ebook1.printInfo();

// Геттери і сеттери
ebook1.fileFormat = 'epub';
console.log('Новий формат:', ebook1.fileFormat);

// Масив книг
const allBooks = [book1, book2, ebook1];
const oldest = Book.getOldestBook(allBooks);
console.log('Найстаріша книга:');
oldest.printInfo();

// Створення EBook з Book
const ebookFromBook = EBook.createFromBook(book1, 'mobi');
ebookFromBook.printInfo();
