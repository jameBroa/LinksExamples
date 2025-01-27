function add(a: number, b: number): number {
    return a + b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

// Calculate the product of the sum of a and b and c
function calculate(a: number, b: number, c: number): number {
    let sum = add(a, b);
    let product = multiply(sum, c);
    return product;
}

function main() {
    let result = calculate(2, 3, 4);
    console.log(`Result: ${result}`);
}

main();