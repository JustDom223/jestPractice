import { calculator, capitalize, reverseString } from './practiceJest';

//Tests for capitalize function
test('capitalize: take string and return it with the first letter capitalized', () => {
    expect(capitalize('string')).toBe('String');
});

test('capitalize: handles empty string', () => {
    expect(capitalize('')).toBe('');
});

test('capitalize: capitalizes a single character', () => {
    expect(capitalize('a')).toBe('A');
});

test('capitalize: does not change already capitalized word', () => {
    expect(capitalize('World')).toBe('World');
});

test('capitalize: capitalizes mixed case word', () => {
    expect(capitalize('mIXeD')).toBe('Mixed');
});

test('capitalize: does not change numbers or symbols', () => {
    expect(capitalize('123!')).toBe('123!');
});

test('capitalize: Does not capitalize each word in a sentence', () => {
    expect(capitalize('hello world, how are you?')).toBe(
        'Hello world, how are you?',
    );
});

//Tests for a function that reverses the string
test('reverseString: take a string and return it reversed', () => {
    expect(reverseString('String')).toBe('gnirtS');
});

test('reverseString: handles empty string', () => {
    expect(reverseString('')).toBe('');
});

test('reverseString: reverses a single letter', () => {
    expect(reverseString('A')).toBe('A');
});

test('reverseString: mixed sentence with numbers and symbols', () => {
    expect(
        reverseString(
            'The address is 31, Big Toe Street, Vic, 3315, Australia',
        ),
    ).toBe('ailartsuA ,5133 ,ciV ,teertS eoT giB ,13 si sserdda ehT');
});

// Tests for calculator object
const numberArray = [1, 2, 3, 4, 5, 'A', 7, 8, 9, 10];
const backwardsNumberArray = [10, 9, 8, 7, 'A', 5, 4, 3, 2, 1];
const backwardsNestedNumberArray = [10, 9, 8, 7, 'A', 5, 4, 3, 2, 1];
const nestedNumberArray = [1, [2, [3, 4], 5, 'A', [7, 8], 9], 10];
//Add
test('Calculator: add 2 numbers together', () => {
    expect(calculator.add(1, 2)).toBe(3);
});
test('Calculator: add 3 numbers together', () => {
    expect(calculator.add(1, 2, 3)).toBe(6);
});
test('Calculator: add 9 numbers together', () => {
    expect(calculator.add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
});
test('Calculator: add numbers but deal with an accidental letter', () => {
    expect(calculator.add(numberArray)).toBe(49);
});
test('Calculator: Testing nested arrays', () => {
    expect(calculator.add(nestedNumberArray)).toBe(49);
});

//Subtract
test('Calculator: subtract 1 number from another', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
});
test('Calculator: subtract 2 numbers from the first', () => {
    expect(calculator.subtract(3, 2, 1)).toBe(0);
});
test('Calculator: add 9 numbers together', () => {
    expect(calculator.subtract(100, 1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(55);
});
test('Calculator: subtract numbers but deal with an accidental letter', () => {
    expect(calculator.subtract(backwardsNumberArray)).toBe(-29);
});
test('Calculator: testing nested arrays', () => {
    expect(calculator.subtract(backwardsNestedNumberArray)).toBe(-29);
});
//Divide
test('Calculator: divide first number by second number', () => {
    expect(calculator.divide(2, 2)).toBe(1);
});
test('Calculator: divide number by negative', () => {
    expect(calculator.divide(2, -2)).toBe(-1);
});
test('Calculator: divide number and return a float', () => {
    expect(calculator.divide(10, 13)).toBe(0.7692307692307693);
});
test('Calculator: divide by 0', () => {
    expect(calculator.divide(2, 0)).toBe(Infinity);
});
test('Calculator: divide each number by the next', () => {
    expect(calculator.divide(1000, 100, 10)).toBe(1);
});
test('Calculator: divide, flag a letter as an error', () => {
    expect(() => calculator.divide(backwardsNumberArray)).toThrow(Error);
});
//Multiply
test('Calculator: Multiply a by b', () => {
    expect(calculator.multiply(4, 6)).toBe(24);
});
test('Calculator: Multiply each number by the next', () => {
    expect(calculator.multiply(4, 6, 5, 3)).toBe(360);
});
test('Calculator: add 9 numbers together', () => {
    expect(calculator.multiply(100, 1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(36288000);
});
test('Calculator: subtract numbers but deal with an accidental letter', () => {
    expect(calculator.multiply(backwardsNumberArray)).toBe(604800);
});
test('Calculator: testing nested arrays', () => {
    expect(calculator.multiply(backwardsNestedNumberArray)).toBe(604800);
});
