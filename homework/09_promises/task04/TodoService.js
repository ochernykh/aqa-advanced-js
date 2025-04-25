const ApiService = require("./ApiService");

class TodoService extends ApiService {
  async getTodo() {
    return this.fetchJson("https://jsonplaceholder.typicode.com/todos/1");
  }
}

module.exports = TodoService;
