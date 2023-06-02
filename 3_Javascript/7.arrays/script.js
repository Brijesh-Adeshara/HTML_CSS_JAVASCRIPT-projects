const nums = [4,1,2,8,2,8,6]
console.log(nums.indexOf(8));
console.log(nums.includes(8));
nums.push('Brijesh')
console.log(nums);
nums.unshift('Soni');
console.log(nums);
nums.pop();
console.log(nums);
nums.shift();
console.log(nums)
nums.sort();
console.log(nums);
const subarray = nums.slice(2,5);
console.log(subarray);

// const words = ['apple','banana','cherry',12,12,12,true,{name:'brijesh'}];
// const newwords =words;
// newwords[6] = "kiwi";
// console.log(words)
// console.log(newwords)