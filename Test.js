/* TEST JS */
/*
    1. Problem 1 - (A)
    Create an Object with a "hello" method that writes "Hello <name> in the console"
*/

const greeter = {
    hello: function(name) {
        console.log(`Hello ${name}`);
    }
};
greater.hello("World"); // Hello World

/*
    2. Problem 1 - (B)
    How would you make name immutable?
    (Can write or just describe)
    Answer: You can make the name parameter immutable by using Object.freeze() on an object containing the name.
*/
greeter.hello = function(name) {
    const frozenName = Object.freeze({ value: name });
    console.log(`Hello ${frozenName.value}`);
};

greeter.hello("World"); // Hello World

/*
    3. Problem 2
    Write a function that logs the 5 cities that occur the most in the array below in
    order from the most number of occurrences to least.
*/

function logTopCities(cities) {
    const cityCount = cities.reduce((acc, city) => {
        acc[city] = (acc[city] || 0) + 1;
        return acc;
    }, {});

    const sortedCities = Object.entries(cityCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    sortedCities.forEach(([city, count]) => {
        console.log(`${city}: ${count}`);
    });
}

logTopCities(citiesList);

const citiesList = [
    "nasville",
    "nasville",
    "los angeles",
    "nasville",
    "Madrid",
    "memphis",
    "barcelona",
    "los angeles",
    "sevilla",
    "Madrid",
    "canary islands",
    "barcelona",
    "Madrid",
    "Madrid",
    "nasville",
    "barcelona",
    "london",
    "berlin",
    "Madrid",
    "nasville",
    "london",
    "Madrid",
    "Madrid",
]