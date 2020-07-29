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
        expect(isFive()).toBe(typeof input === "boolean")
    });
})

//Unit test for isEven function