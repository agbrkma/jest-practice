// import { capitalize, caesarCipher, calculator, reverseString, analyzeArray } from "./index";

import {capitalize, caesarCipher, calculator, reverseString, analyzeArray} from './index'
test('adds 1+2 and returns 3', () => {
    expect(calculator.add(1,2)).toBe(3)
})