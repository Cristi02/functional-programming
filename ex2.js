const DUMMY_DATA = [1, 2, 3, 4, 5];

Array.prototype.mapImplementation = function (callback) {
    return this.reduce((acc, val, index) => {
        acc.push(callback(val, index));
        return acc;
    }, []);
};

Array.prototype.filterImplementation = function (callback) {
    return this.reduce((acc, val, index) => {
        if (callback(val)) acc.push(val, index);
        return acc;
    }, []);
};

Array.prototype.everyImplementation = function (callback) {
    return this.reduce((acc, val) => {
        if (!callback(val) && acc) return false;
        return acc;
    }, true);
};

Array.prototype.someImplementation = function (callback) {
    return this.reduce((acc, val) => {
        if (callback(val) && !acc) return true;
        return acc;
    }, false);
};

Array.prototype.findImplementation = function (callback) {
    return this.reduce((acc, val) => {
        if (callback(val) && !acc) return val;
        return acc;
    }, undefined);
};

Array.prototype.indexOfImplementation = function (searchedElement) {
    return this.reduce((acc, val, index) => {
        if (searchedElement === val && acc === -1) return index;
        return acc;
    }, -1);
};

console.log(
    "Map (double the values):",
    DUMMY_DATA.mapImplementation((v) => v * 2)
);

console.log(
    "Filter (only even numbers):",
    DUMMY_DATA.filterImplementation((v) => v % 2 === 0)
);

console.log(
    "Every (value<10 ->  true): ",
    DUMMY_DATA.everyImplementation((v) => v < 10)
);
console.log(
    "Every (value<4 -> false): ",
    DUMMY_DATA.everyImplementation((v) => v < 4)
);

console.log(
    "Some (value%5===0 -> true ): ",
    DUMMY_DATA.someImplementation((v) => v % 5 === 0)
);
console.log(
    "Some (value>10 -> false): ",
    DUMMY_DATA.someImplementation((v) => v > 10)
);

console.log(
    "Find (value>3 -> 4): ",
    DUMMY_DATA.findImplementation((v) => v > 3)
);
console.log(
    "Find (value>10 -> undefined): ",
    DUMMY_DATA.findImplementation((v) => v > 10)
);

console.log(
    "IndexOf (value 5 -> index 4): ",
    DUMMY_DATA.indexOfImplementation(5)
);
console.log(
    "IndexOf  (value 2 -> index 1): ",
    DUMMY_DATA.indexOfImplementation(2)
);
console.log(
    "IndexOf  (value 7 -> not found (-1) ) : ",
    DUMMY_DATA.indexOfImplementation(7)
);
