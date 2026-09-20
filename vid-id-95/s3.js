"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(a) {
    console.log("hello");
    return a + 4;
}
console.log(greet(4));
function meet(msg) {
    console.log(msg);
}
function neet(msg = "keshasv") {
    console.log(msg);
}
neet();
function gate(person) {
    console.log(person || "mohan");
}
gate("jdeddkd");
// arrow function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(23, 3));
// callback function
function placeorder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeorder(10, (amount) => {
    console.log(amount);
});
function placeorder2(order, callback) {
    const amt = order + 24;
    callback(amt);
}
placeorder2(12, (amt) => {
    console.log(amt + 32);
});
// rest parameter
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans + val);
    console.log(ans);
}
total(1, 234, 2, 42, 4, 5, 3, 52, 2);
total();
//# sourceMappingURL=s3.js.map