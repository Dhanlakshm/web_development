// console.error("JavaScript is working");

//let var, const


//var  ---> you can redclare the variable again and again, and also update the value of the variable

var a=10;
console.log(a);
var a=20;
console.log(a);

//let  ---> you can update the variable but cannot redeclare it 

let b=30;
console.log(b);

b=40;
console.log(b);

//const
//canot redeclare and cannot update the value of the variable
const c=50;
console.log(c);

//Arrow functions 

function add(a,b)
{
    return a+b;
}
add(10,20);

const sum=(a,b)=> console.log(a+b);

sum(10,20);


const student_details=(name, age, branch)=>{
    console.log("Name: "+name);
    console.log("Age: "+age);
    console.log("Branch: "+branch);
};

student_details("John", 20, "CSE");
student_details("John", 20, "CSE");
student_details("John", 20, "CSE");



//map(), filter(), reduce()


let arr=[10,20,30,40,50];
//arr[0] ---> 10, 
let result=arr.map(v =>v*2);
console.log(result);

let name=["john", "jane", "jack", "jill"];
var result2=name.map(v=>v.toUpperCase());
console.log(result2);

//filter()   ---> 
let filtered=arr.filter(v=>v%20);
console.log(filtered);

//reduce()
let result3=arr.reduce((sum, currentValue)=>sum+currentValue, 0);
console.log(result3);





//

let branches=["CSE", "ECE", "MECH", "CIVIL"];

const [first, , third]=branches;

console.log(first);
// console.log(second);
console.log(third);
// console.log(fourth);


const student={
    name2:"John",
    age:20,
    branch:"CSE"    
};
// console.log(student.name);


const {name2, age, branch}=student;

console.log(name2);
console.log(age);
console.log(branch);


const user={
    id:1,
    name3:"John",
    age3:20,
    email:"john@gmail.com"
};

const {id, name3, age3, email}=user;
console.log(id);
console.log(name3);
console.log(age3);
console.log(email);

//

let ar=[1,2,3,4,5,6,7,8,9,10];


let br=[...ar, 11,12,13,14,15];

console.log(br);


let frontend=["html", "css", "javascript"];

let backend=["java","node.js", "python"];

let fullstack_technologies=[...frontend, ...backend];
console.log(fullstack_technologies);


const person={

    name:"divya",
    age:20,
    email:"divya@gmail.com"
};

console.log(person);

const updated_details={
    ...person,
    phone:"1234567890"

};
console.log(updated_details);



const n=[10,20,30,40,50];

const [f,s, ...remaining]=n;
console.log(f);
console.log(s);
console.log(remaining);



// employee details

const employee=[

    {
        name:"divya",
        salary :50000,
        department:"IT"
    },
    {
        name:"john",
        salary :60000,
        department:"HR"
    },

    {
         name:"ganesh",
        salary :100000,
        department:"HR"
    },
    {
         name:"riya",
        salary :70000,
        department:"IT"
    },
    {
         name:"john",
        salary :80000,
        department:"HR"
    }
];

employee.filter(n => n.department=="IT").map(n=>console.log(n.name));

//print all the name of employees in UpperCase ---> toUperCase()
//


let totalSalary=employee.reduce((sum, c)=>sum+c.salary,0);
console.log(totalSalary);