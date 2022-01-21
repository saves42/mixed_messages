//random number generator
function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
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
    let num1;
    let num2;
    for (i = 0; i < num; i++) {
        num1 = randomIndex(characters);
        num2 = randomIndex(characters[num1])
        charArray.push(characters[num1][num2])
    }
}

