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

//ES6
const compose = (...fns) => (
    (x) => fns.reduceRight(
        (acc, curr) => curr(acc),
        x
    )
);

//ES5

//EXAMPLE NOT DONE YET
function compose(fns) {


}


//https://slides.com/meeple142/javascript-arrays-9#/11/11


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
//EXAMPLE NOT DONE YET


//https://slides.com/meeple142/javascript-arrays-9#/11/12

//ES6
const waterfall = (...promiseThunks) => (
    () => promiseThunks.reduce(
        (acc, curr) => acc.then(() => curr()),
        Promise.resolve()
    )
)

//ES5
//EXAMPLE NOT DONE YET