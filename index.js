function capitalize(string){    
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(string){
    return string.split('').reverse().join('')
}

const calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    divide: (a,b) => a / b,
    multiply: (a,b) => a * b
};

function caesarCipher(str, shift) {
  const isLetter = (char) => char.toLowerCase() != char.toUpperCase();
  const shiftChar = (char, shift) => {
    const isUpper = char === char.toUpperCase();
    const base = isUpper ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - base + shift) % 26) + base
    );
  };

  return str.split("").map((char) => {
      if (isLetter(char)) {
        return shiftChar(char, shift);
      }
      return char;
    })
    .join("");
}

function analyzeArray(arr) {
    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    
    return { average, min, max, length };
}

// const object = analyzeArray([1, 8, 3, 4, 2, 6]);
// console.log(object);

module.exports = {analyzeArray, calculator, capitalize, caesarCipher, reverseString}

