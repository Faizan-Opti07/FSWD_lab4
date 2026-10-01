
function createPhoneNumber(numbers) {
    let format = "(xxx) xxx-xxxx";

    // Replace each 'x' with array elements sequentially
    for (let num of numbers) {
        format = format.replace('x', num);
    }

    return format;
}

// Test case from the task requirements
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));