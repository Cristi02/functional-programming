const DUMMY_DATA = [1, 2, 3, 4, 5];

const mapImplementation = (array, callback) => {
    return array.reduce((acc, val) => {
        acc.push(callback(val));
        return acc;
    }, []);
};

const filterImplementation = (array, callback) => {
    return array.reduce((acc, val) => {
        if (callback(val)) acc.push(val);
        return acc;
    }, []);
};

const everyImplementation = (array, callback) => {
    return array.reduce((acc, val) => {
        if (!callback(val) && acc) return false;
        return acc;
    }, true);
};

const someImplementation = (array, callback) => {
    return array.reduce((acc, val) => {
        if (callback(val) && !acc) return true;
        return acc;
    }, false);
};

const findImplementation = (array, callback) => {
    return array.reduce((acc, val) => {
        if (callback(val) && !acc) return val;
        return acc;
    }, undefined);
};

const indexOfImplementation = (array, searchedElement) => {
    return array.reduce((acc, val, index) => {
        if (searchedElement === val && acc === -1) return index;
        return acc;
    }, -1);
};

console.log(
    "Map (double the values):",
    mapImplementation(DUMMY_DATA, (v) => v * 2)
);

console.log(
    "Filter (only even numbers):",
    filterImplementation(DUMMY_DATA, (v) => v % 2 === 0)
);

console.log(
    "Every (value<10 ->  true): ",
    everyImplementation(DUMMY_DATA, (v) => v < 10)
);
console.log(
    "Every (value<4 -> false): ",
    everyImplementation(DUMMY_DATA, (v) => v < 4)
);

console.log(
    "Some (value%5===0 -> true ): ",
    someImplementation(DUMMY_DATA, (v) => v % 5 === 0)
);
console.log(
    "Some (value>10 -> false): ",
    someImplementation(DUMMY_DATA, (v) => v > 10)
);

console.log(
    "Find (value>3 -> 4): ",
    findImplementation(DUMMY_DATA, (v) => v > 3)
);
console.log(
    "Find (value>10 -> undefined): ",
    findImplementation(DUMMY_DATA, (v) => v > 10)
);

console.log(
    "IndexOf (value 5 -> index 4): ",
    indexOfImplementation(DUMMY_DATA, 5)
);
console.log(
    "IndexOf  (value 2 -> index 1): ",
    indexOfImplementation(DUMMY_DATA, 2)
);
console.log(
    "IndexOf  (value 7 -> not found (-1) ) : ",
    indexOfImplementation(DUMMY_DATA, 7)
);
