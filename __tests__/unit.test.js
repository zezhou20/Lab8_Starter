// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Tests
describe('Math operations tests', () => {
    // Add function tests
    test('add: 1 + 2 should equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });
    test('add: 5 + 0 should equal 5', () => {
        expect(add(5, 0)).toBe(5);
    });
    test('add: 2 + 2 should not equal 5', () => {
        expect(add(2, 2)).not.toBe(5);
    });
    test('add: 3 + 3 should not equal 7', () => {
        expect(add(3, 3)).not.toBe(7);
    });

    // Subtract function tests
    test('subtract: 5 - 2 should equal 3', () => {
        expect(subtract(5, 2)).toBe(3);
    });
    test('subtract: 5 - 5 should equal 0', () => {
        expect(subtract(5, 5)).toBe(0);
    });
    test('subtract: 5 - 2 should not equal 2', () => {
        expect(subtract(5, 2)).not.toBe(2);
    });
    test('subtract: 5 - 5 should not equal 1', () => {
        expect(subtract(5, 5)).not.toBe(1);
    });

    // Multiply function tests
    test('multiply: 2 * 3 should equal 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });
    test('multiply: 5 * 1 should equal 5', () => {
        expect(multiply(5, 1)).toBe(5);
    });
    test('multiply: 2 * 3 should not equal 8', () => {
        expect(multiply(2, 3)).not.toBe(8);
    });
    test('multiply: 5 * 1 should not equal 6', () => {
        expect(multiply(5, 1)).not.toBe(6);
    });

    // Divide function tests
    test('divide: 10 / 2 should equal 5', () => {
        expect(divide(10, 2)).toBe(5);
    });
    test('divide: 5 / 1 should equal 5', () => {
        expect(divide(5, 1)).toBe(5);
    });
    test('divide: 10 / 2 should not equal 6', () => {
        expect(divide(10, 2)).not.toBe(6);
    });
    test('divide: 5 / 1 should not equal 6', () => {
        expect(divide(5, 1)).not.toBe(6);
    });

    // isEqual function tests
    test('isEqual: 1 should be equal to 1', () => {
        expect(isEqual(1, 1)).toBe(true);
    });
    test('isEqual: 2 should not be equal to 3', () => {
        expect(isEqual(2, 3)).toBe(false);
    });
    test('isEqual: 1 should not be equal to 2', () => {
        expect(isEqual(1, 2)).not.toBe(true);
    });
    test('isEqual: 2 should be equal to 2', () => {
        expect(isEqual(2, 2)).not.toBe(false);
    });
});