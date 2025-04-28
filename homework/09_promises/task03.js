async function getTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return response.json();
}

async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  return response.json();
}

(async () => {
  try {
    const [todo, user] = await Promise.all([getTodo(), getUser()]);
    console.log('Promise.all (await):', { todo, user });

    const fastest = await Promise.race([getTodo(), getUser()]);
    console.log('Promise.race (await):', fastest);
  } catch (error) {
    console.error('Error:', error);
  }
})();
