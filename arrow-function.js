// function doubleIt (x){
//     return x * 2;
// }

const doubleIt = x => x*2;
const fiveTimes = a => a*5;
const add = (a, b) => a+b;
const doStuff = (x, y) => {
    const sum = x+y;
    const deduct = x-y;
    const result = sum* deduct;
    return result;
}

const result = doStuff(4, 44);
// console.log(result);

const nums = [3, 5, 7, 8, 9];
const output = [];
for(let i = 0; i<nums.length; i++){
    const element = nums[i];
    const res = element * element;
    output.push(res);
}

const mapOutput = nums.map( x => x*x);
console.log(mapOutput);

