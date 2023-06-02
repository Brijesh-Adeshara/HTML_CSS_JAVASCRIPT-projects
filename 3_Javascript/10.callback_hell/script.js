// console.log("hello");
// console.log("world");

// function greetings(){
//  console.log("dear user please log in for better experience");
// }
// console.log("heyy there");
// setTimeout(greetings,10000);


function getcheese(callback){
  setTimeout(() => {
    const cheese = '🐱‍💻';
    console.log('here is cheese: ',cheese);
    callback(cheese);

  }, 3000);
}

function makedough(cheese,callback){
  setTimeout(() => {
    const dough = cheese + '🎂';
    console.log("here is the dough ",dough);
    callback(dough);
  }, 3000);
}

function bakepizza(dough,callback){
  setTimeout(() => {
    const pizza = dough + '👌';
    console.log("here is the pizza ",pizza);
    callback(pizza);
  }, 3000);
}





getcheese((cheese)=>{
   makedough(cheese,(dough)=>{
    bakepizza(dough,function(pizza){
      console.log("got my pizza",pizza);
    })
   })
})


