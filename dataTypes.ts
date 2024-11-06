// Data Type - Which defines what kind of data a variable is storing

//let num = 10// "String", false, null //(integer)

// 2 Types of data types

/*
1. Primitive data type

1. number
2. string
3. boolean
4. null
5. undefined
6. any

2. Non-primitive Data types

1. Array
2. Object
3. Function


*/


// number - Represent both integer(123, 45) and floating point value (100.56)
// float/double b = 34.56

// keyword(var, let , const) variableName :datatypes = value

let num = 30 // Type inference
//num = "TS"
let num1 : number = 34.23 // Type annotation
console.log(num, num1)

// string - Text value or a combination of characters
/*
1. Single Quote - String Literal
2. Double quote - String literal
3. backtick (``) - String template - When we try to use a string variable inside another sting value ${variable}

*/

let singleQuote : string = 'TypeScript' 
let doubleQuote : string = "TS"

let firstName :string = "John"

let greet :string = `Hello ${firstName}`
console.log(greet)

// boolean - true or false

let isAdmin:boolean = true
let isNum:boolean = false

// 4. null
let name2 :null = null //no value

// 5. undefined
let name3 :undefined = undefined // no value
let name4
console.log(name4)

// 6. any (Special datatype)
// any can hold any data type

let variable1 :any = 30
variable1 = "TS"
variable1 = true

let variable2 = true 








