// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Unit test for the sayHello function
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return a string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return a string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return a string "Hello, Pat!" when called', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return a string "Hello, World! when called' , function () {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return string "Hello, World!" when called from input - true', function () {
        expect(sayHello(true)).toBe("Hello, World!");

    });
    it('should return a string "Hello, World! when called - false' , function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return a string "Hello, World! when called - null' , function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return a string "Hello, World! when called - ""' , function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return a string "Hello, World! when called - 2.5' , function () {
        expect(sayHello(2.5)).toBe("Hello, World!");
    });
    it('should return a string "Hello, World! when called - "5"' , function () {
        expect(sayHello("5")).toBe("Hello, World!");
    });
});

//Unit test for isFive function
describe('isFive', function () {
    it('should be defined as a function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return a boolean - TRUE when called', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return a boolean - TRUE when called', function () {
        expect(isFive("5")).toBe(true);
    });
})

//Unit test for isEven function
describe('isEven', function () {
    it('should be defined as a function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return a boolean - TRUE when called - 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return a boolean - TRUE when called - -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return a boolean - FALSE when called - 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return a boolean - FALSE when called - banana', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return a boolean - TRUE when called - "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return a boolean - FALSE when called - Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return a boolean - FALSE when called - true', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return a boolean - FALSE when called - false', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return a boolean - FALSE when called', function () {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function () {
    it('should be a defined as a function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return a boolean - TRUE when called - "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return a boolean - TRUE when called - "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return a boolean - FALSE when called - "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return a boolean - FALSE when called - 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return a boolean - FALSE when called - true', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return a boolean - FALSE when called - false', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return a boolean - FALSE when called - banana', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return a boolean - FALSE when called', function () {
        expect(isVowel()).toBe(false);
    });
})

describe('add', function () {
    it('should define a function', function () {
        expect(typeof add).toBe('function')
    });
    it('should return a number when called', function () {
        expect(typeof add()).toBe('number');
    });
    it('should return a number when called - 5', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return a number when called - -12', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return a number when called - 11', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return a number when called - 6', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return a number when called - 2 strings = NaN', function () {
        expect(isNaN(add("banana", "split"))).toBe(true);
    });
    it('should return a number when called - number + string = NaN', function () {
        expect(isNaN(add(2, "apples"))).toBe(true);
    });
    it('should return a number when called - empty argument = NaN', function () {
        expect(isNaN(add())).toBe(true);
    });
})