function getRandomArray(length, min, max) {
  randomArray = [];
  for (var i = 0; i < length; i++) {
    randomArray.push(Math.round(Math.random() * (max - min + 1) + min));
  }
  return randomArray;
}
console.log(getRandomArray(15, 1, 100));

const getModa = (...numbers) => {
  const resultArr = [];
  numbers.forEach(number => {
    const dublicateArr = numbers.filter(numberEl => number === numberEl);
    if (dublicateArr.length > 1 && !resultArr.includes(number)) {
      resultArr.push(dublicateArr[0]);
    }
  });
  return resultArr;
};
console.log(getModa(42, 2, 99, 53, 92, 72, 63, 79, 75, 67, 2, 47, 100, 2, 91));

const getAverage = numbers => {
  const total = [...numbers].reduce(
    (total, number) => {
      return total + number;
    },
    0,
  );
  return total / numbers.length;
};

console.log(getAverage([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));

function countPositiveNumbers(numbers) {
  return numbers > 0;
}

const countPositiveNumber = [-1, 2, -3, 4, -5, 6].filter(countPositiveNumbers);
console.log(countPositiveNumber.length);

function dividedByFiveNumbers(numbers) {
  return Number.isInteger(numbers / 5);
}
const dividedByFiveNumber = [
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2,
].filter(dividedByFiveNumbers);

console.log(dividedByFiveNumber);

function filterEvenNumbers(numbers) {
  return !Number.isInteger(numbers / 2);
}
const filterEvenNumber = [1, 2, 3, 4, 5, 6].filter(filterEvenNumbers);
console.log(filterEvenNumber);
