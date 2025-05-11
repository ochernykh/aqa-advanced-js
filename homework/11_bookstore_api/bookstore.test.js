const AccountController = require('./controllers/AccountController.js');
const BooksController = require('./controllers/BookController.js');

let bookIsbn;
let token;
let booksCache;

const user = {
  userName: 'User@jMXNxYNx$n5fg9',
  password: '@jMXNxYNx$n5fg9',
};

describe('Books tests', () => {
  beforeAll(async () => {
    user.userId = await AccountController.getUserId(
      user.userName,
      user.password
    );
    token = await AccountController.getAuthToken(user.userName, user.password);

    const booksResponse = await BooksController.getAllBooks();
    booksCache = booksResponse.data.books;
    const randomBookIndex = Math.floor(Math.random() * booksCache.length);
    bookIsbn = booksCache[randomBookIndex].isbn;
  });

  test('Get all books and verify length [/BookStore/v1/Books]', () => {
    expect(booksCache).toHaveLength(8);
  });

  test('Verify first book title [/BookStore/v1/Books]', () => {
    expect(booksCache[0].title).toBe('Git Pocket Guide');
  });

  test('Add new book to user [/BookStore/v1/Books]', async () => {
    const response = await BooksController.addBook(
      user.userId,
      bookIsbn,
      token
    );
    expect(response.status).toBe(201);
    expect(response.data.books[0].isbn).toBe(bookIsbn);
  });

  test('Remove all books [BookStore/v1/Books?UserId=]', async () => {
    const response = await BooksController.removeAllBooks(user.userId, token);
    expect(response.status).toBe(204);
  });

  //Негативні сценарії

  test('Add book fails with invalid token', async () => {
    const response = await BooksController.addBook(
      user.userId,
      bookIsbn,
      'invalid_token'
    );
    expect(response.status).toBe(401);
  });

  test('Remove books fails with missing token', async () => {
    const response = await BooksController.removeAllBooks(user.userId, null);
    expect(response.status).toBe(401);
  });

  test('Add book fails with missing userId', async () => {
    const response = await BooksController.addBook(null, bookIsbn, token);
    expect(response.status).toBeGreaterThanOrEqual(400);
  });

  afterAll(async () => {
    try {
      const response = await BooksController.removeAllBooks(user.userId, token);
      if (response.status === 204) {
        console.log('All books deleted');
      } else {
        console.warn('Cleanup incomplete:', response.status);
      }
    } catch (err) {
      console.error('Cleanup error:', err.message);
    }
  });
});

describe('Account tests', () => {
  test('Generate token [/Account/v1/GenerateToken]', async () => {
    const token = await AccountController.getAuthToken(
      user.userName,
      user.password
    );
    expect(token).toBeTruthy();
    expect(typeof token).toBe('string');
  });

  //Негативні сценарії

  test('Generate token fails with wrong password', async () => {
    await expect(
      AccountController.getAuthToken(user.userName, 'WrongPassword123!')
    ).rejects.toThrow('Token generation failed');
  });

  test('Token generation fails with non-existent user', async () => {
    await expect(
      AccountController.getAuthToken('notrealuser@example.com', 'AnyPass123!')
    ).rejects.toThrow('Token generation failed');
  });
});
