//loop - Loop will execute the same block of code {} multiple times

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("******************")
for(let i=0; i<=5; i++){
    console.log(i) // 0 0<=5 0++ = 0+1 = 1++ = 1+1=2
}

// for loop
// 1. for loop
// 2. for ..of loop
// 3. for ..in loop

// while loop
// do while loop


console.log("********for loop**********")


// 1. for loop 
// Syntax

/*

for(initilization; condition; increment/decrement)
{
    //code
}

initilization - initialize the variable to start the execution of loop. Ex: - let i=0
condition - condition to check whether the loop should execute or not. Ex: - i<=5
increment(++)/decrement(--) - increment or decrement the variable after each execution of loop. Ex: - i++

*/

for(let i=0; i<=5; i++){ // 0 0<=5 0++ = 0+1 = 1++ = 1+1 = 2++ = 3....5++ 5+1 = 6
    console.log(i) // 0 1 2 3 4 5
}

for(let i=10 ; i>0; i--){ // 10-- = 10-1 = 9-- =8 1-- 1-1 = 0
    console.log(i) // 10 9 8 7 6 5 4 3 2 1
}

console.log("********for of loop**********")

// for of loop - Will be used to iterate over the values of iteratable object like Array, String etc

// syntax

/*
for(variable of iteratable)
{
    // code
}
    variable - this will have the idea of the values available inside the iteratable

*/

let array = [1,2,3,4,5, "4", true] // [0:1, 1:2, 2:3, 3:4, 4:5, 5:"4", 6:true]
//array.length
// for(let i=0; i<array.length; i++){
//     console.log(array[i]) // array[0]
// }

//let str = "This is a session of loop"


for(let element of array){
    console.log(element)
}


console.log("********for in loop**********")
// for in loop
// for in loop - will be used to iterate over the properties of an object

//ClassName obj = new ClassName()

// Syntax: - 
/*
for(variable in Object)
{
    // code
}
    variable - 

*/


let object = {name : "Tom", age : 30, city: "NY"}

// console.log(object.name)
// console.log(object["age"])

for(let key in object){
    console.log(key + ": "+ object[key])
}


console.log("**********While loop*********")
// while loop
// Syntax
/*

initilization;

while(condition){
// code
increment/decrement
}

*/


// for(let i=0; i<=5; i++){ // 0 0<=5 0++ = 0+1 = 1++ = 1+1 = 2++ = 3....5++ 5+1 = 6
//     console.log(i) // 0 1 2 3 4 5
// }


let j=0
while(j<=5){
    console.log(j)
    j++
}

// Print only the even number values from 20 to 0 // j+2 = j+2

// while - if we do not know the number of times the iteration has to execute
// 1. FB, linkedLin  - Praveen 
// infinite scroll 
// 2. lazy loading / pagination  - Previous 1 2 3 .... next
// 3. login page - fill username and password

console.log("**********do While loop*********")

// Do -while - It guratee the loop will run at least one time before validating the condition
// Syntax

/*

initilization;

do{
    // code
    increment/dec
}while(condition);

*/

// let j=0
// while(j<=5){
//     console.log(j)
//     j++
// }

let l = 0
do{
    //cgl
    console.log(l) //0
    l++
}while(l>=5);

// 1. To find out the element by checking the visibility and then scroll
// 2. username and password
// 3. 1. withdraw, 2. transfer, 3. account checking








