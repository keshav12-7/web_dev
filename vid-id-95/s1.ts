console.log("hello");
interface person{
    name:string,
    age:number,
    gender:boolean,
    aadhar?:number
    readonly pan:string;

}

const obj:person={
    name:"keshav",
    age:22,
    gender:true,
    pan:"23khjb"
}

interface customer{
    name:string,
    acc_no:number,
    balance:number
}

let user:Partial<customer>={
    name:"keshav"
}

let user2:Required<customer>={
    name:"keshav",
    
    balance:1234432,
    acc_no:420,
}


