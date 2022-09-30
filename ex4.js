const sortImplementation = (array) => {
    return [
        ...array.filter((x) => x % 2 === 0).sort((a, b) => (a > b ? 1 : -1)),
        ...array.filter((x) => x % 2 !== 0).sort((a, b) => (a < b ? 1 : -1)),
    ];
};

console.log(sortImplementation([4, 5, 3, 6, 7, 1, 2, 9, 8]));
