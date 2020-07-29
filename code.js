// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

// sayHello function
const sayHello = function (input) {
    if ((!isNaN(input)) || input === "" || typeof input !== "string") {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!";
    }
}

//isFive function
const isFive = function (input) {
    return (parseFloat(input) === 5);
}

//isEven function
const isEven = function (input) {
    if ((parseFloat(input) % 2 === 0) && (!isNaN(input))) {
        return true;
    } else {
        return false;
    }
}

//isVowel function --> Ask for help with shortening this tomorrow
const isVowel = function (input) {
    // var toString = input.toString();
    // var noCase = input.toLowerCase();
    if (typeof input !== "string") {
        return false;
    } else if ((typeof input === "string") && (input === 'a' || input === "A" || input === 'e' || input === "E" || input === 'i' || input === "I" || input === 'o' || input === "O" || input === 'u' || input === "U")) {
        return true;
    } else {
        return false;
    }
}
    // var vowel = input.toLowerCase;
    // if ((typeof input === "string") && (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"))  {
    //     return true;
    // } else {
    //     return false;
    // }


