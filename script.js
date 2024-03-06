// Given datasets
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringsArray = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Function 1: Write a JavaScript function to check if an input is an array or not.
function isArray(input) {
    return Array.isArray(input);
}

// Function 2: Write a JavaScript function to clone an array.
function cloneArray(arr) {
    return arr.slice(0);
}

// Function 3: Write a JavaScript function to get the first element of an array.
function getFirstElement(arr) {
    return arr[0];
}

// Function 4: Write a JavaScript function to get the last element of an array.
function getLastElement(arr) {
    return arr[arr.length - 1];
}

// Function 5: Write a JavaScript function to join all elements of an array into a string.
function joinArrayElements(arr) {
    return arr.join(',');
}

// Function 6: Write a JavaScript function to get the maximum number from an array.
function getMaxNumber(arr) {
    return Math.max(...arr);
}

// Function 7: Write a JavaScript function to get the minimum number from an array.
function getMinNumber(arr) {
    return Math.min(...arr);
}

// Function 8: Write a JavaScript function to get a random element from an array.
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function 9: Write a JavaScript function to find duplicate elements in an array.
function findDuplicates(arr) {
    const duplicates = {};
    const result = [];

    arr.forEach(item => {
        if (duplicates[item]) {
            if (duplicates[item] === 1) {
                result.push(item);
            }
            duplicates[item]++;
        } else {
            duplicates[item] = 1;
        }
    });

    return result;
}

// Function 10: Write a JavaScript function to remove duplicate elements from an array.
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}