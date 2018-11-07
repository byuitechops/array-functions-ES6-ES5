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
function transform(before) {
    return before.filter(function (keyValuePair) {
            //Filter out the keyValuePair with the "msrp" key
            return !/msrp/i.test(keyValuePair.key);
        })
        .reduce(function (accumulator, keyValuePair) {
            accumulator[keyValuePair.key] = keyValuePair.value;
            return accumulator;
        }, {});
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
startShape
    .reduce(function (newObject, keyValuePair) {
        newObject[keyValuePair.key] =
            newObject[keyValuePair.key] ? [].concat(newObject[keyValuePair.key]).concat([keyValuePair.value]) : keyValuePair.value;
        return newObject;
    }, {});