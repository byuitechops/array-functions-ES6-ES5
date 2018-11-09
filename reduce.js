//https://slides.com/meeple142/javascript-arrays-9#/11/1

//ES6
items.reduce((acc, cur) => acc + cur, 0);

//ES5
items.reduce(function (acc, cur) {
    return acc + cur;
}, 0);


//https://slides.com/meeple142/javascript-arrays-9#/11/6

//ES6
[1, 3, 2, 5, 6, 8].reduce(
    (acc, cur) => acc + cur,
    0
);

//ES5
[1, 3, 2, 5, 6, 8].reduce(
    function (acc, cur) {
        return acc + cur;
    }, 0);



//https://slides.com/meeple142/javascript-arrays-9#/11/8

//Flatten Arrays

//ES6
[
    [1, 2, 3],
    [3, 2, 1],
    [5, 2, 1]
]
.reduce((acc, cur) => acc.concat(cur), [])


//ES5
[[1, 2, 3], [3, 2, 1], [5, 2, 1]]
.reduce(function (acc, cur) {
    return acc.concat(cur);
}, []);



//https://slides.com/meeple142/javascript-arrays-9#/11/9

//Split Arrays

//ES6
const splitEvery = (chunkSize, arr) => (
    arr.reduce((acc, curr, i) => {
        const index = Math.floor(i / chunkSize);
        acc[index] = (acc[index] || []).concat(curr);
        return acc;
    }, [])
);

//ES5
function splitEvery(chunkSize, arr) {
    arr.reduce(function (acc, curr, i) {
        const index = Math.floor(i / chunkSize);
        acc[index] = (acc[index] || []).concat(curr);
        return acc;
    }, []);
}


//https://slides.com/meeple142/javascript-arrays-9#/11/10

//Compose Functions

//Curry Functions

//ES6
const compose = (...fns) => (
    (x) => fns.reduceRight(
        (acc, curr) => curr(acc),
        x
    )
);

//ES5
function addOne(num) {
    return num + 1;
}

function square(num) {
    return num * num
}

function roundToNearestTen(num) {
    return (num % 10 < 5) ? (num - num % 10) : num + (10 - num % 10);
}

var myNumberFunctions = [addOne, square, roundToNearestTen]

function compose(functions, initialInput) {
    return functions.reduce(function (acc, curr) {
        return curr(acc);
    }, initialInput);

}

console.log("Expected Output: 60", compose(myNumberFunctions, 7));




https: //slides.com/meeple142/javascript-arrays-9#/11/11


    //ES6
    const curry = (fn) => (
        (...args) => (
            fn.length <= 1 || args.length >= fn.length ?
            fn(...args) :
            args.reduce((acc, curr) => (
                curry(acc.bind(null, curr)), fn))
        )
    );

//ES5
const curry = function (fn) {
    return function () {
        if (fn.length <= 1 || arguments.length >= fn.length) {
            return fn.apply(null, arguments);
        } else {
            return Array.prototype.reduce.call(arguments, function (acc, curr) {
                return curry(acc.bind(null, curr));
            }, fn);
        }
    }
};


//Example of using the curry function
var add = function (x, y, z) {
    return x + y + z;
}
var addCurryMaker = curry(add);
var xAndyAlreadyDefined = addCurryMaker(1, 2);
console.log("Expected: 6: " + xAndyAlreadyDefined(3));


//https://slides.com/meeple142/javascript-arrays-9#/11/12

//ES6
const waterfall = (...promiseThunks) => (
    () => promiseThunks.reduce(
        (acc, curr) => acc.then(() => curr()),
        Promise.resolve()
    )
)

//ES5
//EXAMPLE NOT DONE PROBABLY NOT NEEDED BECAUSE THIS IS ABOUT PROMISES