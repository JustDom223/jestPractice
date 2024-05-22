import { capitalize, reverseString } from './practiceJest';

test('Take string and return it with the first letter capitalized', () => {
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

test('capitalize: capitalizes each word in a sentence', () => {
    expect(capitalize('hello world, how are you?')).toBe(
        'Hello world, how are you?',
    );
});

test('Take string and return it reversed', () => {
    expect(reverseString('String')).toBe('gnirtS');
});
