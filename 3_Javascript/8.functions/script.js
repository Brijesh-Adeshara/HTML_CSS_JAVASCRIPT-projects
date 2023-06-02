const a = 12;
const b = 12;
const res = sum(a,b);
console.log("the result is: ",res);

function sum(a,b){
    const sum = a+b;
    console.log("the result is: ",a+b);
    return sum;
}


const square = function (num){
    return num*num;
}

console.log(square);
console.log(square(3));
