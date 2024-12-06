const { add } = require('./add.js');

describe('Addition Operation', () => {
    test('adds positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('adds negative and positive numbers', () => {
        expect(add(-1, 1)).toBe(0);
    });

    test('adds zero', () => {
        expect(add(0, 5)).toBe(5);
    });

    test('adds zero', () => {
        expect(add(1, 5)).toBe(5);
    });
});