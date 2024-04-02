function checkSquaredArray(arr1, arr2) {
    // Check if the arrays are not the same length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Create a map to store the frequency of each value and its square
    const frequencyMap = new Map();

    // Count the frequency of each value in the first array
    for (const value of arr1) {
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
    }

    // Check if every value in the first array has its corresponding value squared in the second array
    for (const value of arr2) {
        const squareRoot = Math.sqrt(value);
        if (!frequencyMap.has(squareRoot) || frequencyMap.get(squareRoot) === 0) {
            return false;
        }
        frequencyMap.set(squareRoot, frequencyMap.get(squareRoot) - 1);
    }

    return true;
}

// Example usage:
const arr1 = [1, 2, 3, 2];
const arr2 = [1, 4, 9, 4];

console.log(checkSquaredArray(arr1, arr2)); // Should return true


