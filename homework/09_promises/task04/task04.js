const TodoService = require("./TodoService");
const UserService = require("./UserService");

const todoService = new TodoService();
const userService = new UserService();

(async () => {
  try {
    const [todo, user] = await Promise.all([
      todoService.getTodo(),
      userService.getUser(),
    ]);
    console.log("Promise.all (класи):", { todo, user });

    const fastest = await Promise.race([
      todoService.getTodo(),
      userService.getUser(),
    ]);
    console.log("Promise.race (класи):", fastest);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
