
const box1 = document.getElementById('box-1');
// box1.innerHTML = "<h1>hello </h1>"


// box1.style.backgroundColor = "red";

box1.classList.add('round-border');


classbox = document.getElementsByClassName("box");

for(let i=0;i<classbox.length;i++){
    classbox[i].classList.add('round-border');
}

box1.classList.remove('random');





//  const mybody = document.body;
// console.log(mybody);

// const box2 = document.getElementById('box-2')
// console.log(box2);

// boxes = document.getElementsByTagName("div");
// console.log(boxes);

// classbox = document.getElementsByClassName("random");
// console.log(classbox);

// const random = document.querySelectorAll('.container.random');
// console.log(random);


// const para = document.createElement("p");
// para. innerText = "this is brand new";
// const container = document.getElementById('container');
// container.appendChild(para);
// para.classList.add('box');
// para.classList.add('round-border');


// onclick event

function myFunction(){
    console.log("i was clicked");
}
function mouseover(){
    console.log("mouse over");
}

function keypressevent(){
    console.log("key was pressed");
}
function keyupevent(){
    console.log("key up");
}
function keydownevent(){
    console.log("key down");
}

// event listners

const firstbox = document.getElementById('box-1');
firstbox.addEventListener('mousemove',(e)=>{
    console.log("move by event",e.clientX,e.clientY);
})

firstbox.addEventListener('click',()=>{
    console.log("click by second event");
})


const input = document.getElementById('nameinput');
input.addEventListener('keydown',(e)=>{
    console.log("key ",e.key);

})
input.addEventListener('focus',(e)=>{
    console.log('key',e);

})

