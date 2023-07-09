///   Build a Password manager using the Javascript Crypto Library

const readline = require('readline');   //nodejs built-in module, are use to interact with Cli
const crypto = require('crypto');       //nodejs built-in module are use to perform cryptographic operations

const rl = readline.createInterface({   //createInterface() method of the readline that take two parameter
    input: process.stdin,               //the input stream = process.stdin 
    output: process.stdout              //output stream = process.stdout, create a readline interface
  });

let password = '';            //define variable named'password' that will be used to store the user's password
let encryptedPassword = '';  //define variable named'encryptedPassword' that will be used to store encrypted password
let masterKey = '';         //define variable named 'masterkey' used to encrypt and decrypt the password.

function getPassword() {                                     // create a function named 'getPassword'
    rl.question('Enter a password: ', (input) => {          //rl.question() is method: prompts the user and that take two argument prompt message and callback function
    password = input;                                    //assigns input value to a variable password
    console.log(`Password set to: ${password}`);        // log the message using console.log
    rl.question('Enter a master key: ', (input) => {   //rl.question() is method, prompts the user, that take two argument prompt message and callback function
    masterKey = input;                              //assigns input value to a variable masterKey.
    encryptedPassword = encryptPassword(password, masterKey); // ecrypt password here: 1 using function name: encryptPassword(), 2 passing two arguments 'password' and 'masterKey',3 encrypted password is assigned to a variable encryptedPassword.        
    console.log(`Password encrypted.`);    //log message to the console
    showOptions();        // call the function name 'showOptions()': display list for user to choose from. 
    });
});
}


function encryptPassword(password, key) {   // define a function name 'encryptPassword()',take two arguments: password to be encrypted and  key to be used for encryption
    const cipher = crypto.Cipher('aes-256-cbc', key); // 'Cipher': class from the Node.js crypto module ,aes-256-cbc: algorithm is used for encryption 
    let encrypted = cipher.update(password, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;     // returns the encrypted password (as a hexadecimal string)
}

function decryptPassword(encryptedPassword, key) {  //defines a function name 'decryptPassword()' that take two arguments 1 'encryptedPassword' 2'key'
    const decipher = crypto.Decipher('aes-256-cbc', key); //1 crypto: library 2 aes-256-cbc':algorithm, 3 key passed as argument 4.Decipher object from the crypto library
    let decrypted = decipher.update(encryptedPassword, 'hex', 'utf8');  //updates decipher object with the encryptedPassword argument,
    decrypted += decipher.final('utf8');  // completes decryption here and appends final decrypted data to decrypted variable.
    return decrypted; //returns the decrypted password (as a UTF-8 string)
}


function showOptions() {   //defines a function called showOptions() with no argument
   //// use question() method: display a message to the user with encrypted password.
    rl.question(`What would you like to do with password '${encryptedPassword}' 
    1.Read. 
    2.Update.
    3.Delete.
    4.Decrypt.
    5.Exit
    `, (input) => {         //arrow function with argument input : take input from user 
      switch(input) {      // switch statement that check and execute different block based on the value of input 
        case '1':          //execute this block if  input is equal to the string '1',
          console.log(`Password: ${encryptedPassword}`);    // logs the current encryptedPassword
          showOptions();    //calls showOptions :to display the menu again.
          break;            //terminates the switch statement execution

        case '2':   //execute this block if input is equal to the string '2'.,
          rl.question('Enter new password: ', (input) => {  //rl.question() method: prompt the user,takes two arguments:'Enter new password:' and callback function
            password = input;  //assigns user's input to variable 'password'.
            encryptedPassword = encryptPassword(password, masterKey); //call function encryptPassword() and assign to a variable  encryptedPassword
            console.log(`Password updated and encrypted.`); //prints a message to the console
            showOptions(); //call function showOptions(), displays the main menu to the user
          });
          break;    //terminates the switch statement execution

        case '3':
          password = '';   // assign empty string to a variable password
          encryptedPassword = '';  //assigns empty string to a variable encryptedPassword
          console.log('Password deleted.');  //logs message to console.
          showOptions();      //call a function named showOptions()
          break;              //terminates switch statement execution

        case '4':         ////execute this block if  input is equal to the string '4',
          rl.question('Enter master key: ', (input) => {  //rl.question() method, which takes two arguments: string nd a callback function
            const key = input;   //declare constant variable 'key' and assigns it value of user's input.
            const decryptedPassword = decryptPassword(encryptedPassword, key); //declare constant variable 'decryptedPassword' and assigns it  result of calling  'decryptPassword()'
            console.log(`Decrypted password: ${decryptedPassword}`);// print message to the console
            showOptions();  //call function showOptions().
          });
          break;  //terminates the switch statement execution
        case '5':   //execute this block if  input is equal to the string '5',
          console.log('Exit program');   //print message to the console
          rl.close();    //closes the readline interface created by the createInterface() method.
          break;    //terminates the switch statement execution
        default:
          console.log('Invalid input.');  ////print message to the console
          showOptions();         //call function showOptions()
          break;      ////terminates the switch statement execution
      }
    });
}
  
getPassword();
