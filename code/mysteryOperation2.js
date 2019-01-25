//https://slides.com/meeple142/javascript-arrays-9#/2/3

//ES6

const isEven = (x) => x % 2 === 0;
const half = (x) => x / 2;
const toAvg = (acc, c, i, arr) => (
        i < arr.length - 1 ?
        acc + c :
        (acc + c) / arr.length
    ),
    0);

const mysteryOperation = (nums) => nums
    .filter(isEven)
    .map(half)
    .reduce(toAvg)



//ES5

function isEven(x) {
    return (x % 2 === 0);
}

function half(x) {
    return x / 2;
}

function toAvg(acc, c, i, arr) {
    if (i < arr.length - 1) {
        return acc + c;
    }

    return (acc + c) / arr.length;

}

function mysteryOperation(nums) {
    return nums.filter(isEven)
        .map(half)
        .reduce(toAvg, 0);

}