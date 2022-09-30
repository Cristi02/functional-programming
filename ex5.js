const findIndexesOfSum = (array, k) => {
    for (let i = 0; i < array.length; i++)
        for (let j = i + 1; j < array.length; j++)
            if (array[i] + array[j] === k) return [i, j];
    return [];
};

console.log(findIndexesOfSum([2, 1, -4, 5, 6, 7, 2, 3, 4], 5));
console.log(findIndexesOfSum([2, 1, -4, 5, 6, 7, 2, 3, 4], 2));
console.log(findIndexesOfSum([2, 1, -4, 5, 6, 7, 2, 3, 4], 100));
