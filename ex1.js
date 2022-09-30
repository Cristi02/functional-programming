const DUMMY_DATA = [
    { name: "Eugen", age: 30 },
    { name: "Marius", age: 42 },
    { name: "Eva", age: 20 },
];

const sortImplementation = (array, criteria, asc) => {
    return [...array].sort((a, b) => {
        const result = a[criteria] > b[criteria] ? 1 : -1;
        return asc ? result : -result;
    });
};

console.log(sortImplementation(DUMMY_DATA, "name", true));
console.log(sortImplementation(DUMMY_DATA, "name", false));
console.log(sortImplementation(DUMMY_DATA, "age", true));
console.log(sortImplementation(DUMMY_DATA, "age", false));
