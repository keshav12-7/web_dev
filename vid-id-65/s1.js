// creation of an object
const obj = {
    name:"keshav",
    acc_no:231,
    age: 22,
    "acc number":231231,
    1:420,
    undefined:30,
    null:12
    

}
console.log(obj,typeof obj,"\n",obj.age);
console.log(obj.name);
console.log(obj["acc_no"]);
console.log(obj["acc number"]);
console.log(obj["1"]);
console.log(obj.undefined);
console.log(obj.null);

const person = new Object();
// add property
person.name="keshav"
person.age=22
person.gender="male"
person.interest="hangout"

console.log(person);

// delete
delete person.interest
console.log(person);

// modify
person.age=23
console.log(person["age"]);


class people{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender
    }
}
let per1 = new people("keshav",22,"Male")
console.log(per1);







