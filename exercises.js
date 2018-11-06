//https://slides.com/meeple142/javascript-arrays-9#/12/1

//ES6
const after = before
    .filter(({
        key
    }) => !/msrp/i.test(key))
    .map(({
        key,
        value
    }) => ({
        [key]: value
    }))
    .reduce((acc, curr) => ({ ...acc,
        ...curr
    }), {});

//ES5

//EXAMPLE NOT DONE YET
function transform(before) {
    return before.filter(function ({
            key
        }) {
            return !/msrp/i.test(key);
        })
        .map(function ({
            key,
            value
        }) {
            return
        })



}

//https://slides.com/meeple142/javascript-arrays-9#/12/6

//ES6
startShape
    .map(({
        key,
        value
    }) => ({
        [key]: value
    }))
    .reduce((acc, curr) => {
        const key = Object.keys(curr)[0];
        return {
            ...acc,
            [key]: acc[key] ? [].concat(acc[key]).concat(curr[key]) : curr[key]
        };
    }, {})


//ES5

//EXAMPLE NOT DONE YET