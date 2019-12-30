const nums = [1, 2, 4];
const ages = [12, 13, 17];
//const combs = nums.concat(ages);
const combs = [...nums, 5, 6, 7, 8, ...ages];
//console.log(combs);

function add(){
    const args = [...arguments];
    console.log(args);
}
add(3,4,5,8);