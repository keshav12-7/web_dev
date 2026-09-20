function test1() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("first promise resolve");
    }, 5000);
  });
  return p1;
}
function test2() {
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second promise");
    }, 5000);
  });
  return p2;
}
async function greet(){
    console.log("i greet you");
    
    const d1 = await test1();
    console.log(d1);
    console.log("i greet you second time");
    
    const d2 = await test2();
    console.log(d2);
    
    
}
greet()

console.log("hello");
console.log("jndkjwdc");

