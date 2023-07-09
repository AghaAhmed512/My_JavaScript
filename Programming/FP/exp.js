// Retrieve passwords from local storage
let passwords = JSON.parse(localStorage.getItem('passwords')) || [];

// Generate a random password
function generatePassword(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

// Create a new password and add it to the array in local storage
function createPassword(length) {
  const password = generatePassword(length);
  passwords.push(password);
  localStorage.setItem('passwords', JSON.stringify(passwords));
}

// Read a password from the array in local storage
function readPassword(index) {
  return passwords[index];
}

// Update a password in the array in local storage
function updatePassword(index, newPassword) {
  passwords[index] = newPassword;
  localStorage.setItem('passwords', JSON.stringify(passwords));
}

// Delete a password from the array in local storage
function deletePassword(index) {
  passwords.splice(index, 1);
  localStorage.setItem('passwords', JSON.stringify(passwords));
}

// Create a new password with length 10
createPassword(10);

// Read the first password in the array
const firstPassword = readPassword(0);

// Update the second password in the array to a new password with length 12
updatePassword(1, generatePassword(12));

// Delete the third password in the array
deletePassword(2);
