

function fun1(name: string, age: number): number {
    console.log(`name: ${name}, age: ${age}`);
    return age*10;
}


function fun2(){
    let x = fun1("John", 25);
}

function fun3() {
    let x = fun1("John", 25);
}