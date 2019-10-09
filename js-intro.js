// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.
console.log(mantra.includes('B'));


// 1b. Write the code that determines if there is an 'x' in mantra.
console.log(mantra.includes('x'));


// 1c. Write the code that determines if there is a 'v' in mantra.
console.log(mantra.includes('v'));


// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.
const letterInString = (string, letter) => {
    return (`The string '${string}' ${string.includes(letter) ? "contains" : "doesn't contain"} the letter '${letter}'`);
}

console.log(letterInString("Joyce","J"));  //test
console.log(letterInString("Joyce","m"));  //test

// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

const returnLongerString = (str1, str2) => {
    if (str1.length === str2.length) {
        return `'${str1}'' and '${str2}' are the same length.`
    } else {
        return str1.length > str2.length ? str1: str2
    }
};

console.log(returnLongerString("Test: Return this because this is the longer string","Shouldn't return this"));
console.log(returnLongerString(myDog,myCat));


// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

const makeArray = (arg1, arg2) => {
    return [arg1, arg2];
}

console.log(makeArray(myDog,myCat));
console.log(typeof makeArray(myDog,myCat)); //should return object

// 2c. STRETCH: Write a function that returns the two variables in all lowercase letters. Expected output: "snoopy garfield"

const returnLowerCaseJoin = (var1, var2) => {
    return [var1.toLowerCase(), var2.toLowerCase()].join(' ')
}

console.log(returnLowerCaseJoin(myDog,myCat));

// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.

for (let i=0; i < myMessage.length; i++) {
    console.log(myMessage[i])
}

// 3b. Write the code that logs each letter of the message using map.
//using map
const letterLogger = (string) => {
    return string.split("").map(x => console.log(x));
}

letterLogger(myMessage);


// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.
let i = 0;
while (i < myMessage.length) {
    console.log(myMessage[i]);
    i++ 
}


// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

console.log(myMessage.trim().split("").forEach(x => console.log(x))); //not sure why there's an undefined 

// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

const isVowel = (letter) => {
    const vowels = "aeiou".split("");
    return !vowels.includes(letter);
}
// old version:
// const noVowels = (string) => {
//     let newString = []
//     return string.split("").filter(isVowel).join("");
// }

//updated version
const noVowels = (string) => {
    let newString = []
    return (typeof string === "string") ? string.split("").filter(isVowel).join("") : "This is not a string."
}

console.log(noVowels(testString));
console.log(noVowels(2));


// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

//see above

// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

const onlyCats = (arr) => {
    let newArr = []
    for (i=0; i<arr.length; i++) {
        if (arr[i].animal === 'cat') {newArr.push(arr[i])}
    };
    return newArr
}
    //return an array

console.log(onlyCats(toonimals))

//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

const nameNoncats = (arr) => {
    let newArr = []
    for (i=0; i<arr.length; i++) {
        if (arr[i].animal !== 'cat') {newArr.push(arr[i].name)}
    };
    
    return newArr
}
    //return an array

console.log(nameNoncats(toonimals))


//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

//"Itchy is a mouse" "Stimpy is a cat"

const animalMessage = (arr) => {
    for (i=0; i<arr.length; i++) {
        console.log(`${arr[i].name} is a ${arr[i].animal}`)
    }
}

console.log(animalMessage(toonimals));