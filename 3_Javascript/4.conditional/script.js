const age = 4;

if(age>= 18){
    console.log("you are inside if");
    console.log("you can vote");
    if(age>60){
        console.log('you can vote again');
    }
}
else{
    console.log("you cannot vote as of now")
    if(age<5){
        console.log("you must go to school");
    }
}

console.log("this will execute always");


const scoremarks = 92;
if(marks>90){
    console.log('A+');
}
else if(marks>80){
    console.log('A');
}
else if(marks>70){
    console.log('B+');
}
else if(marks>60){
    console.log('B');
}
else{
    console.log('low marks');
}


const score = 50;
const res = (score>=40) ? "Passed" : "Failed";
console.log(result);

let result;
const marks = 91;

if(marks>50){
    result = "passed";
    console.log(result);
}
else{
    result = "failed"
    console.log(result);
}