// 1. Arithmetic Op - An Operation which performs mathematical Operations
// 2. Comparison Op
// 3. Logical Op
// 4. Assignment Op (=)

// Arithmetic Operator - Arithmetic Op are used to perform mathematical calculations
// Arithmetic Operators are used to perform mathematical operations like addition, subtraction, multiplication, division etc.

// + (addition) - adds 2 or more data
// Numeric - adds the values
// String - concatenates the strings

let ar1 = "10"
let ar2 = "20"
console.log("Addition", ar1 + ar2) // 30 "10" , "20" // 1020

// - (Subtraction)
// Numeric - subtracts the values

let sb1 = 20
let sb2 = 15
console.log("Subtraction", sb1 - sb2)

// * (multiplication)

let mp1 = 3
let mp2 = 5
console.log("Multiplication", mp1 * mp2)

// / (division)
// Numeric - divides the values
let dv1 = 30
let dv2 = 4
console.log("Division", dv1 / dv2)

// %(Modulus) - (Remainder of division)
let m1 = 30
let m2 = 3
console.log("Modulus", m1 % m2)

// ++ (Increment Operator)
let increment = 10

// Post increment - First Action will be performed and then the value will be incremented
console.log(increment++) // 10++ = 10+1 = 11
console.log(increment) // 11

// Pre-increment - First the value will be incremented and then the action will be performed
let increment1 = 5
console.log(++increment1) // ++5 = 5+1 = 6

// -- (Decrement Operator)
// Post Decrement - First Action will be performed and then the value will be decremented
let decrement = 10
console.log(decrement--) // 10-- = 10-1 = 9
console.log(decrement) // 9

// Pre-increment - First the value will be decremented and then the action will be performed
let decrement1 = 5
console.log(--decrement1) // --5 = 5-1 = 4

console.log("*************************************************")
//2. Comparison Op - Compares two values and return the result as boolean (true or false)

// Equal to (==) // it will just compare a values are same or not without checking the data types of variables
let num2 :number = 10
let num3 :number = 11
console.log(num2 == num3) // true

// let num4  = "10"
// let num5 = 10
// console.log(num4 == num5) // true

// Not equal to (!=) 
console.log(num2 != num3)
console.log("< and >")
// >, <, >=, <=
console.log(num2 > num3) // 10>11
console.log(num2 < num3) // 10<11
console.log("<= and >=")

let num6 = 20
let num7 = 20
console.log(num6 >= num7) // 20 >=20
console.log(num6 <= num7) // 20 <= 20

// Strict Equality (===) - it will compare a values are same or not by checking the data types of variables as well
console.log("*******Strict Equality**********")
let num9 = '10'
let num10 = 10

console.log("Equal to", num9==num10)
console.log(num9 !=num10)

console.log("Strict Equal To", num9===num10)
// Not Strict Equality (!==) - it will compare a values are same or not by checking the data types of variables as well
console.log(num9 !==num10) //true

// == and ===
// == - It conpares the values of the variable without checking the types of the variable
// === - It compares the values of the variable and also checks the types of the variable

console.log("*************************************************")
// 3. Logical Operators - Evaluates a boolean(true or false) expression
// AND (&&) - Both the conditions should be true
// OR (||) - One of the conidtion have to be true to return the true as a result
// NOT (!) - Negates the boolean value (true to false and false to true)

console.log((5>4) && (3>2))// (true && true)  - false
console.log((1>4) || (3>4)) // false || true - true

console.log(!(5>10)) // !(false) - true
console.log("****Assignment Op*********")
// 4. Assignment Operator (=) Assigns the value to a variable

let var1  = "Name"

let num8 = 10
console.log(num8)

// num8 = num8+2 // 12
num8 += 2
console.log(num8)

num8 -= 5 // num8 = num8-5
num8 *=3 // num8 = num8 *3
num8 /= 2 // num8 = num8/2








