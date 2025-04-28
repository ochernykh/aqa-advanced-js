const Book = require('./Book');

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Формат файлу має бути рядком');
    }
    this._fileFormat = value;
  }

  printInfo() {
    super.printInfo();
    console.log(`Формат файлу: ${this.fileFormat}`);
  }

  static createFromBook(bookInstance, fileFormat) {
    return new EBook(
      bookInstance.title,
      bookInstance.author,
      bookInstance.year,
      fileFormat
    );
  }
}

module.exports = EBook;
