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
