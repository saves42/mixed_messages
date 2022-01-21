//random number generator
function randomNumber(num) {
    return Math.floor(Math.random() * num)
}
//4 arrays (one for each character type)
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numbers = '0123456789'.split('');
const symbols = '`~!@#$%^&*()-_=+[{]};:",<.>/?'.split('');
//array of character arrays
const characters = [];
characters.push(lowerCase, upperCase, numbers, symbols)
//function that outputs an array of random characters
function mixedCharacters(num) {
    let charArray = [];
    let number = randomNumber();
    for (i = 0; i < num; i++) {

    }
}

