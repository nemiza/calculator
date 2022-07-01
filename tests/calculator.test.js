const calculate = require('../api/calculator');

test('invalid math expression return null', () => {
    expect(calculate('1 -')).toBeNull();
});

test(`1 + 2 + 3 + 4 + 5.6 = ${1 + 2 + 3+4 +5.6}`, () => {
    expect(calculate(' 1 + 2 + 3+4 +5.6')).toBe(1 + 2 + 3+4 +5.6);
});

test(`-32423 - 5.7565 -4 = ${-32423 - 5.7565 -4}`, () => {
    expect(calculate('-32423 - 5.7565 -4')).toBe(-32423 - 5.7565 -4);
});

test(`45 / 5 / 3 = ${45 / 5 / 3}`, () => {
    expect(calculate('45 / 5 / 3')).toBe(45 / 5 / 3);
});

test(`5 * 3.5 * 78 * 100 = ${5 * 3.5 * 78 * 100}`, () => {
    expect(calculate('5 * 3.5 * 78 * 100')).toBe(5 * 3.5 * 78 * 100);
});

test(`1.5 - 2 + 6 * 5 / 3 = ${1.5 - 2 + 6 * 5 / 3}`, () => {
    expect(calculate('1.5 - 2 + 6 * 5 / 3')).toBe(1.5 - 2 + 6 * 5 / 3);
});

test(`-35 * 45 - 56 / 8 + 5.8 = ${-35 * 45 - 56 / 8 + 5.8}`, () => {
    expect(calculate('-35 * 45 - 56 / 8 + 5.8')).toBe(-35 * 45 - 56 / 8 + 5.8);
});

test(`0 = ${0}`, () => {
    expect(calculate('0')).toBe(0);
});

test(`-9 = ${-9}`, () => {
    expect(calculate('-9')).toBe(-9);
});

test(`+8 = ${+8}`, () => {
    expect(calculate('+8')).toBe(+8);
});