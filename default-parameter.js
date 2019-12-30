function add(a, b = 100){
    return a + b;
}

var total = add(2);
console.log(total);

var total = add(2, 5);
console.log(total);