
// function foo(a: number, b: number, c: number) : number {
//     let x = a*a;
//     let y = b^c;

//     let z = (x + y / a * b) * a;
//     return z * (a/y);

//     // a shouldn't be highlighted here
// }

function foo(a: number, b: number, c: number) : number {
    let x = a*a;
    let y = b^c;
    return b*(a+y)/c;
    // a shouldn't be highlighted here
}