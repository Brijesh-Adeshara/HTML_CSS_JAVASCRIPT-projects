function getcheese(){
    return new Promise((resolve,reject)=>{
    
        setTimeout(() => {
            const cheese = "🐱‍💻";
             resolve(cheese);
    },2000);
});
}

function makedough(cheese){
    return new Promise((resolve,reject)=>{
    
        setTimeout(() => {
            const dough = cheese +  "🐱‍💻";
           
            resolve(dough);
            // reject("bad cheese");
    },2000);
});
}

function bakepizza(dough){
    return new Promise((resolve,reject)=>{
    
        setTimeout(() => {
            const pizza = dough + "🐱‍💻";
           
            resolve(pizza);
    },2000);
});
}

async function orderpizza(){
    try{
    const cheese = await getcheese();
    const dough = await makedough(cheese);
    const pizza = await bakepizza(dough);
    console.log("here is your pizza sir: ",pizza);
    }
    catch(error){
        console.log("error occured",error);
    }
    console.log("order completed successfully");
}

orderpizza();






// getcheese()
// .then((cheese)=>{
//     console.log("here is the cheese",cheese);
//     return makedough(cheese)
// }).then((dough)=>{
//     console.log("here is the dough",dough);
//     return bakepizza(dough)

// }).then((pizza)=>{
//     console.log("here is the pizza",pizza);
// }).catch((data)=>{
//      console.log("error occured ",data);
// })
// .finally(()=>{
//     console.log("process ended");
// })