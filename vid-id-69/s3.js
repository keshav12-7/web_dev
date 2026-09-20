const arr = [1,2,3,4];
arr.push(444)
console.log(arr);
for(let key in arr){
    console.log(key,arr[key]);
    
}
arr.name="keshav"
console.log(arr);
for(let key in arr){
    console.log(key,arr[key]);
    
}
