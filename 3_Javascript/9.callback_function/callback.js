const calculate = (a,b,operation)=>{
    return operation(a,b)
}



const subtraction = (num1,num2)=>{
    return num1-num2;
}

//method1

const result = calculate(3,7,function(num1,num2){
    return num1+num2

})

console.log(result);

//method 2
const subresult = calculate(7,2,subtraction);
console.log("subtraction is: ",subresult);

//method3

function multiply(num1,num2){
    return num1*num2;
}

const mulresult = calculate(2,2,multiply);
console.log("multiplication is:",mulresult);