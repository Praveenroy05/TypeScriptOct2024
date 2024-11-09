//Functions - {}

// --> 2 Types of functions
// 1. Named function
// 2. Anonymous function (Unnamed function)
    // a. Anonymous function
    // b. Arrow Function => Fat arrow

console.log("*****Named Function**********")
// Named Function - A function which will be declared along with the name - A function which will have a name
// Function Declaration
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

console.log("**********Anonymous Function*************")
// Anonymous function - A function which will not have any name 

// Function Expression - We declare a function without providing any name and assign it to a variable. That varaible becomes the name of the function

// Syntax: -

/*

const variable  = function(parameter){
    // block of code
}

variable()

*/

const sum1 = function(a:number,b:number,c:number):void{
            console.log(a+b+c)
        }

sum1(12,56,45)

// Arrow Function => fat arrow

// Syntax:-
/*


const variable = (parameter) => {
    // block of code
}

variable()

*/


const greatest = (a:number,b:number)=> {

    if(a>b){
        console.log("A is greater than b");
    }
    else{
        console.log("B is greater than a");
    }

}

greatest(9,17)


// Optional parameter and default parameter


function add1 (a:number,b:number,c:number=1){
    console.log(a+b+c);
}

add1(5,6,15)


function add2 (a:number,b:number,c?){
    console.log(a+b);
    console.log(c)
}

add2(5,6,10)















