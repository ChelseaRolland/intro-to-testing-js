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
    if (parseFloat(input % 2 === 0)) {
        return true;
    } else if(!isNaN(input)) {
        return true;
    }
    else {
        return false;
    }
}