// create an object to store passwords
const passwords = {};

// function to add a password
function addPassword(username, password) {
  passwords[username] = password;
  return `Password added for user ${username}`;

}

// function to delete a password
function deletePassword(username) {
  delete passwords[username];
}

// function to update a password
function updatePassword(username, password) {
  passwords[username] = password;

}

// example usage
console.log(addPassword('john', 'password123')); // add a password for user "john"
console.log(updatePassword('john', 'newpassword')); // update "john"'s password
console.log(deletePassword('john')); // delete "john"'s password

