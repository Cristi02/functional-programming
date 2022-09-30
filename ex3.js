const objExemple = {
    name: "Alex",
    age: 31,
    jobs: ["freelancer", "photograph", "journalist"],
    children: [
        {
            name: "Amy",
            age: 6,
        },
        {
            name: "Mark",
            age: 11,
        },
    ],
    greet() {
        console.log("Hello");
    },
};

const deepClone = (input) => {
    if (typeof input !== "object") return input;

    const newObject = Array.isArray(input) ? [] : {};
    for (let key in input) {
        newObject[key] = deepClone(input[key]);
    }
    return newObject;
};

const copyObj = deepClone(objExemple);
console.log(copyObj);
