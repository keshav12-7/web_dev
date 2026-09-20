"use strict";
// rest parameter
Object.defineProperty(exports, "__esModule", { value: true });
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => {
        ans = ans + val;
    });
    console.log(ans);
}
total(1, 234, 2, 42, 4, 5, 3, 52, 2);
total(1, 2, 3);
const obj = {
    name: "ekta pandey",
    age: 34,
    salary: 100000,
    subject: "maths",
};
//# sourceMappingURL=s4.js.map