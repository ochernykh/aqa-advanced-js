const axiosClient = require('./axiosClient');

beforeAll(() => {
  console.log('==> STARTING TEST SUITE');
});

afterAll(() => {
  console.log('==> FINISHED TEST SUITE');
});

beforeEach(() => {
  console.log(`START: ${expect.getState().currentTestName}`);
});

afterEach(() => {
  console.log(`DONE: ${expect.getState().currentTestName}`);
});

describe('JSON placeholder API', () => {
  describe('[POSITIVE, TODOS]', () => {
    test('GET /todos/1 returns correct todo', async () => {
      const response = await axiosClient.get('/todos/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id', 1);
      expect(response.data).toHaveProperty('title');
      expect(typeof response.data.completed).toBe('boolean');
    });

    test('GET /todos returns array of todos', async () => {
      const response = await axiosClient.get('/todos');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
    });
  });

  describe('[POSITIVE, USERS]', () => {
    test('GET /users/1 returns correct user', async () => {
      const response = await axiosClient.get('/users/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id', 1);
      expect(response.data).toHaveProperty('email');
      expect(typeof response.data.name).toBe('string');
    });
  });

  describe('[POSITIVE, POSTS]', () => {
    test('POST /posts should create a new post and return it with an id', async () => {
      const newPost = {
        title: 'My test post',
        body: 'This is the body of the post',
        userId: 1,
      };

      const response = await axiosClient.post('/posts', newPost);

      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('id');
      expect(typeof response.data.id).toBe('number');
      expect(response.data.title).toBe(newPost.title);
      expect(response.data.body).toBe(newPost.body);
      expect(response.data.userId).toBe(newPost.userId);
    });

    test('POST /posts returns the same fields that were sent (excluding id)', async () => {
      const newPost = {
        title: 'Object comparison',
        body: 'Testing field equality',
        userId: 99,
      };

      const response = await axiosClient.post('/posts', newPost);
      const { id, ...responseDataWithoutId } = response.data;

      expect(response.status).toBe(201);
      expect(responseDataWithoutId).toEqual(newPost);
    });
  });

  describe('[NEGATIVE, INVALID]', () => {
    test('GET non-existent resource returns 404', async () => {
      try {
        await axiosClient.get('/posts/99999');
      } catch (error) {
        expect(error.response.status).toBe(404);
      }
    });

    test('Invalid path returns 404', async () => {
      try {
        await axiosClient.get('/invalid-path');
      } catch (error) {
        expect(error.response.status).toBe(404);
      }
    });
  });
});
