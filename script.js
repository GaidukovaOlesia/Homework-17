
debugger;
function main (a = 2, b = 3, c) {
    debugger;
if(typeof c === "function") {
return c(sum(a,b))
} else {
    return sum(a, b)
}
}
function sum(a, b) {
    return a + b;
}
console.log(main(15, 10, function multiply(value){
    return value *= 1000;
}));