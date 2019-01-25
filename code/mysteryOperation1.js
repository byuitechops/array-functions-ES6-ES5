//Link: https://slides.com/meeple142/javascript-arrays-9#/2/2

//ES6
const mysteryOp = (nums) => nums
    .map((x) => x * x)
    .reduce((acc, c) => acc + c, 0);

//ES5

function mysteryOp(nums) {

    return nums.map(function (x) {
            return x * x;
        })
        .reduce(function (acc, c) {
            return acc + c;
        }, 0);


}