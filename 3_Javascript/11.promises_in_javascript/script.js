const ticket = new Promise(function (resolve,reject){
    const isBoarded = false;
    if(isBoarded){
        resolve('you are not in the flight')
    }
    else{
        reject("your flight has been cancelled")
    }
})


ticket.then((data)=>{
    console.log('wohoo ',data);
}).catch((data)=>{
    console.log('oh no ',data);
})
.finally(()=>{
    console.log("i will always be executed");
})
