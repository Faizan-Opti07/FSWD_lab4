function applyMath(fn, args) {
    if (args.length === 0) return 0;
    if (args.length === 1) return fn(args[0]);
    return args.map(fn);
}

function abs(...args) {
    return applyMath(Math.abs, args);
}

function ceil(...args) {
    return applyMath(Math.ceil, args);
}

function floor(...args) {
    return applyMath(Math.floor, args);
}

// Aliases
const absMe = abs;
const ceilMe = ceil;
const floorMe = floor;

// Tests
console.log("abs:", abs(), abs(-5), abs(-2, 3, -7));
console.log("ceil:", ceil(), ceil(4.2), ceil(4.2, 7.8));
console.log("floor:", floor(), floor(4.9), floor(4.9, 7.1));
