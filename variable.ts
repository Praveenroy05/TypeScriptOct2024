// variable - Storage - which store either a single value or multiple

/*
1. var - In Modern JS/TS we do not use this
2. let - Whenever we know that the value of the varaible can be changed
3. const - Which is use to declarare constant varaible
*/

// // DataType variableName = value
// int i = 10

// keyword(var, let, const) variableName = value
var i = 10 // Global variable

//var
//1. Scope - Global or Functional
// Global - Whenever we declare a variable outside of a function
// Functional - Whenever we declare a variable inside a function
//2. Variable declared using var can be redeclared and reinitialized
// 3. It is not mandatory the assign the value to a variable at the time declaration

var variable = "Rahul"
variable = "Test"

var name1 = "JS"
var name1 = "TS"
var name1 = "Java"
var name1 = "Test"
var name1 = "Team"
var name1 = "Name"

console.log(name1)

var flag = true  // Global
var k =10
    if(k>5){
        var flag = false 
        console.log(flag)
    }


console.log(flag) // false



function print(){
    var j = 10 // Functional scope
    console.log(j)
}
print()
//console.log(j)
console.log(i)


// let

//1. Scope - block {}

//2. Variable declared using let cannot be redeclared and can be reinitialized
// 3. It is not mandatory to assign the value to a variable at the time declaration


let b
b = 20

let a = 10
// let a = 30
a=20
console.log(a)

let flag1 = true  // Global
let k1 =10

    if(k1>5){
        let flag1 = false //local 
        console.log(flag1) // false
    }

    console.log(flag1) //true


    // const

//1. Scope - block {}

//2. Variable declared using const cannot be redeclared and cannot be reinitialized
// 3. It is mandatory to assign the value to a variable at the time declaration

const c = 25
//const c = 30

const d = 30


//var
//1. Scope - Global or Functional
//2. Variable declared using var can be redeclared and reinitialized
//3. It is not mandatory the assign the value to a variable at the time declaration

//let
//1. Scope - block {}

//2. Variable declared using let cannot be redeclared and can be reinitialized
// 3. It is not mandatory to assign the value to a variable at the time declaration

//const

//1. Scope - block {}

//2. Variable declared using const cannot be redeclared and cannot be reinitialized
// 3. It is mandatory to assign the value to a variable at the time declaration
