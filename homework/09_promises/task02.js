function getTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    (response) => response.json()
  );
}

function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1').then(
    (response) => response.json()
  );
}

Promise.all([getTodo(), getUser()])
  .then(([todo, user]) => {
    console.log('Promise.all:', { todo, user });
  })
  .catch((error) => {
    console.error('Error in Promise.all:', error);
  });

Promise.race([getTodo(), getUser()])
  .then((result) => {
    console.log('Promise.race:', result);
  })
  .catch((error) => {
    console.error('Error in Promise.race:', error);
  });
