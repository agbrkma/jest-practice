// import { capitalize, caesarCipher, calculator, reverseString, analyzeArray } from "./index";

const {capitalize, caesarCipher, calculator, reverseString, analyzeArray} = require(./)

test('adds 1+2 and returns 3', () => {
    expect(calculator.add(1,2)).toBe(3)
})