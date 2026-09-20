const map1 = new Map();
map1.set(3,90);
map1.set("name","keshav") 
map1.set("salary",1000000)
console.log(map1);
map1.set("salary",123345655)
console.log(map1);
console.log(map1.delete(3),map1)
console.log(map1.has("keshav"),map1.has("name"),map1);
console.log(map1.size);

const m2 = new Map([
    [4,"mohit"],
    ["mohan","rohan"],
    [39,9]
])
console.log(m2);
for(let x of m2){
    console.log(x);
    
}

for(let [x,y] of m2){
    console.log(x,y);
    
}

