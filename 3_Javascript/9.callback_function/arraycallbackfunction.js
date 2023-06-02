const a = [4,1,6,-2,-5,3,2,-8,6,7];


// const firstneg = (num)=>{
//     return num<0;
// }

//  const res = a.find(firstneg);
//  const res1 = a.findIndex(firstneg);
//  console.log(res);
//  console.log(res1);

//method1 for "foreach function"
a.forEach((num)=>{
   console.log("array number",num);
})

//method 2 

function num(num,i){
    console.log("array number",num,i);
}
a.forEach(num);



