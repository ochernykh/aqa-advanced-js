const ApiService = require('./ApiService');

class UserService extends ApiService {
  async getUser() {
    return this.fetchJson('https://jsonplaceholder.typicode.com/users/1');
  }
}

module.exports = UserService;
