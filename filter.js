//https://slides.com/meeple142/javascript-arrays-9#/10/3

//ES6
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
.filter((x) => x % 2 === 0);


[
    "bacon cheeseburger",
    "chicken sandwich",
    "hamburger",
    "bacon salad"
].filter((x) => /bacon/i.test(x));


//ES5
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
.filter(function (x) {
    return x % 2 === 0;
});


[
    "bacon cheeseburger",
    "chicken sandwich",
    "hamburger",
    "bacon salad"
].filter(function (x) {
    return /bacon/i.test(x);
});

//The above search syntax is regex.  We are searching for the word 'bacon' enclosed in the forward slashes.  
//The i indicates that this regular expression will be evaluated case insensitive.