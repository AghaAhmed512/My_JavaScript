const users = [
    { id: 1, name: 'John', email: 'john@example.com', age: 25 },
    { id: 2, name: 'Jane', email: 'jane@example.com', age: 30 },
    { id: 3, name: 'Bob', email: 'bob@example.com', age: 40 },
  ];
  
  function createUser(user) {
    users.push(user);
  }
  
  function readUsers() {
    return users;
  }
  
  function updateUser(id, updates) {
    const user = users.find(u => u.id === id);
    if (!user) {
      return 'User not found';
    }
    Object.assign(user, updates);
  }
  
  function deleteUser(id) {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
      return 'User not found';
    }
    users.splice(index, 1);
  }
 
// create a new user
createUser({ id: 4, name: 'Alice', email: 'alice@example.com', age: 20 });

// update an existing user
updateUser(1, { age: 26 });

// delete a user
deleteUser(2);

// read all users
const allUsers = readUsers();
console.log(allUsers);
  