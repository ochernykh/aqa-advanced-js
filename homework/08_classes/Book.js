class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  // Геттери
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  get year() {
    return this._year;
  }

  // Сеттери з валідацією
  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Назва не має бути непорожнім рядком");
    }
    this._title = value;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Автор не має бути порожнім рядком");
    }
    this._author = value;
  }

  set year(value) {
    if (!Number.isInteger(value)) {
      throw new Error("Рік має бути цілим числом");
    }
    this._year = value;
  }

  printInfo() {
    console.log(
      `Книга: ${this.title}, Автор: ${this.author}, Рік: ${this.year}`
    );
  }

  static getOldestBook(books) {
    return books.reduce((oldest, current) =>
      current.year < oldest.year ? current : oldest
    );
  }
}

module.exports = Book;
