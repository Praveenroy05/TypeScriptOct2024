//Functions - {}

// --> 2 Types of functions
// 1. Named function
// 2. Anonymous function (Unnamed function)
    // a. Anonymous funtion
    // b. Arrow Function => Fat arrow

console.log("*****Named Function**********")
// Named Function - A function which will be declared along with the name - A function which will have a name

// Syntax
/*

function functionName(parameter) :returnType{
    // block of code
}

functionName(arguments)

*/

// parametrised function
// void function  - which is not returning anything
function addition(a:number, b:number) :void{
    console.log(a+b);
}

addition(10,20) // call by value



function add(a:number, b:number):number{
    return (a+b);
}



// 3, 5 = 8

if(add(3,5) ===8){
    console.log("The sum is correct");
}else{
    console.log("The sum is incorrect");
}

const sum = add(30, 10)
console.log(sum);


function info(){
    console.log("Welcome to TS");
}

info()

//login page 

// fill user name 
// fill password 
// click on login 










