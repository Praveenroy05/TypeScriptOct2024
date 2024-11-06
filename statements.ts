// STatements or conditions
// Condition/Statements in TS allow us to execute different block {} of code based on different conditions.


// if statement
// if else statement
// if else if else statement
// switch statement

// if statement - If statement is used to execute a block {...} of codeif the specified constion is true

// Syntax - 
/*
 if (condition) {
     // code to be executed if condition is true
 }

*/
// Ex:- 

if(5>10){
    console.log("5 is greater than 10");
}

if(15>10){
    console.log("15 is greater than 10");
}

// If else
// If else statement is used to execute a block {...} of code if the specified condition is true
// and another block {...} of code if the specified condition is false

// SYntax:-
/*

if (condition) { true or false
// code to be executed if condition is true
} 
else {
 // code to be executed if condition is false
}

 */

if(6>10){
    console.log("6 is greater than 10");
}
else{
    console.log("6 is not greater than 10");
}

console.log("*****if else if else***********")
// if() else if()... else

// Multiple condition will be validated on inside if()
// if the first condition is false then the second condition will be validated and so on.

// Syntax:
/*

if (condition1) {
// code to be executed if condition1 is true
} 
else if (condition2) {
 // code to be executed if condition1 is false and condition2 is true
 } 
else if (condition3) {
  // code to be executed if condition1 and condition2 are false and condition3 is true
  } 
else {
   // code to be executed if all conditions are false
}
*/


let browser = "edge"

if(browser === "chrome"){
    console.log("You are using chrome browser");
}
else if(browser === "firefox"){
    console.log("You are using firefox browser");
} 
else if(browser === "safari"){
    console.log("You are using safari browser");
}
else{
    console.log("You are using other browser");
}   

// Switch statement
// Switch statement is used to execute different blocks of code based on the value of a variable.

//Syntax
/*

switch (expression) {
case value1:
    // code to be executed if expression is equal to value1
    break;
case value2:
    // code to be executed if expression is equal to value2
    break;
case value3:
    // code to be executed if expression is equal to value3
    break;
default :
// code to be executed if expression does not match any of the above values
break;

}
*/


console.log("************Switch Statement**************")

let browserName = "edge"

switch (browserName) { // switch("chrome"){
    case "chrome":
        console.log("You are using chrome browser");
        break;
    case "firefox":
        console.log("You are using firefox browser");
        break;
    case "safari":
        console.log("You are using safari browser");
        break;
    default:
        console.log("You are using other browser");
        break;
}

console.log("***********")



