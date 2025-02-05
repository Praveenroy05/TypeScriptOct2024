// array - A special type of variable in TS which stores more than one values. The values can be of same data type or of a different data type.
// To declare an array in TS/JS we use []
// index in array starts from 0
// Array is a ordered collection


// 2 way in which we can declare an array in TS

// Array literal

const array2 :any= [10,20,30,40, true, "TS"] // [0:10, 1:20, 2:30, 3:40, 4: true, 5:"TS"] // 6 [0-5]
console.log(array2[6])
console.log(array2)

const arrayVaraible:number[]  = [10,20,40,50]
console.log(typeof arrayVaraible)

// Generic way
const array1 : Array<number | string |boolean> = ["TS", "JS", 10, true]
const array3 : Array<any> = ["TS", "JS", 10, true, null, undefined]

// Using Type Inference
const array4 = [10, 20, 30, 40, true, "TS", null]

const array5 = ["TS", "JS", "Java", "Python"]
console.log(typeof array5);


const array6 = "TS"
console.log(typeof array6);

const array7 :number[] = []
array7[0] = 10
array7[1] = 20
console.log(array7)


const array8:any = [78,34,56,"TS", "JS", "blue", "Apple", true] //8
console.log(array8) 
// console.log(array8[0])
// console.log(array8[1])
// console.log(array8[2])
// console.log(array8[3])

// for ..of loop
for(let data of array8){
    console.log(data)
}

// Property of an array - length - Number of elements available inside an array
// Syntax:-
// array.length
console.log(array8.length)

// Traditional for loop
for(let i=0; i<array8.length; i++){
    console.log(array8[i]); // 0 array8[2]
}

console.log("**********Methods in array***********");
// Methods of array in TS

const array9:any = [5,4,3,2,1, "fruits", "colour"]
console.log(array9);
// 1. push(paramter) - Adds one or more element at the end of an array
// Syntax:
// arrayName.push(element1, element2, element3, ....)

array9.push(50, "Apple", "blue")
console.log(array9);

// 2. pop() - Removes the last element from an array and it also return the values that it has removed
// Syntax:  
// arrayName.pop()
console.log(array9.pop());
 console.log(array9);

// 3. unshift(parameter(s)) - Adds one or more element at the beginning of an array
// Syntax:
// arrayName.unshift(element1, element2, element3, ....)
array9.unshift(100, "red")
console.log(array9);

// 4. shift() - Removes the first element from an array and it also return the values that it has removed
// Syntax:
// arrayName.shift()
console.log(array9.shift());
console.log(array9);
console.log(("*****************"));
// 5. slice(startIndex, endIndex) - Portion of an array
// Syntax:
// arrayName.slice(startIndex, endIndex)
// StartIndex - Starting index of portion of array (index starts with 0 in array)
// EndIndex - Ending index of portion of array - This will be exclusive

console.log(array9.slice(5,)) // 3-1 = 2nd index
console.log(("*****************"));

// 6. splice() - The splice() is used to Insert and Remove elements in between the Array.
// Syntax:
// arrayName.splice(startIndex, deleteCount, item1, item2, item3, ....)

const array10 = [34,45,23,"TS", "JS", "Apple", "Orange"]
console.log(array10)

array10.splice(2, 3, "Pink", "Red")
console.log(array10);

// indexof, inclued(), foreach(function), filter, map, reduce, some, every


// 7. indexOf(paramter) - Return us the first index at which the given parameter element is matching if not match then it will return -1
//Syntax
// arrayName.indexOf(searchElement, startIndex)
const array11 = [23,12,13,14,25,26,14]

console.log(array11.indexOf(14)); //3
console.log(array11.indexOf(14, 4)); //6


// 8. includes(parameter) - Checks whether an array includes the searchElement
// Syntax:
// arrayName.includes(searchElement, fromIndex)
console.log(array11.includes(14))

// 9. toString() - Use to convert an array into String
// Syntax:
// arrayName.toString()
console.log(array11); // 
console.log(array11.toString());//

// 10. forEach(function) - Execute a function once for each and every element of an array
// Syntax: 
// arrayName.forEach(function(currentValue, index, array){})

// currentValue - The current element being processed in the array
// index(optional) - The index of the current element being processed in the array
// array(optional) - The array the current element belongs to, or any object that implements the Array

let array12 = ["blue", "TS", "JS", "red", "apple"] // array12[0]
for (let a in array12){
    console.log(a, array12[a])
}
console.log("********************");
array12.forEach(function(currentValue, index){
    console.log(currentValue, index);
})

array12.forEach(function(currentValue){
    console.log(currentValue);
})

// map, filter and reduce

//11. map(function) - Create a new array with the result of calling the function on every element of an array
// return the exactly similar number of element that we have in original array
// Syntax: 
// arrayName.map(function(currentValue, index, array){})

// currentValue - The current element being processed in the array
// index(optional) - The index of the current element being processed in the array
// array(optional) - The array the current element belongs to, or any object that implements the Array


let array13 = [1,2,3,4,5] // [1,4,9,16,25]

for(let i =0; i<array13.length; i++){
    console.log(array13[i] * array13[i]) // 1*1 , 2*4
}
// const maparray = array13.map((element)=>{
//     return(element * element); 
// })

const maparray = array13.map(element => element * element)

console.log(maparray); 

// 12. filter(function) - Create a new array with all the elements that passes/satifies the function that we provide as a parameter
// Either returns the exactly similar number of element that we have in original array or less than the number of element

// Syntax:

// arrayName.filter(function(currentValue, index, array){})

const filterarray = array13.filter(function(element) {
    return element % 2 == 0
})

console.log(filterarray);

// 13. reduce(function) - Function will apply on every element of an array and return as a single value

// Synatx:
//arrayname.reduce(function(accumulator, currentValue, index, array){}, initialvalue)

// accumulator - The accumulated value that we got from previous iteration
// currentValue - The current element being processed in the array
// index(optional) - The index of the current element being processed in the array
// array(optional) - The array the current element belongs to, or any object that implements the Array

let array14 = [10,20,30,40,50] // 10+20+30+40+50 // 

let total = 0
for(let i=0; i<array14.length; i++){
    total = total + array14[i] //0+10 = 10 +20 = 30+30 = 60 +40 ....
    
}
console.log(total);

const reduceResult = array14.reduce(function(sum, element){
    return sum * element
})
console.log(reduceResult);

// 14. some(function) - Check whether at least on elemet in the array passes the function that we have provided as a parameter (true or false)
// Either returns true or false
// Syntax:
// arrayname.some(function(currentValue, index, array){})

let array15 = [1,2,3,4,5]
const some = array15.some(function(element){
    return element > 5
})
console.log(some);

// 15. every(function) - Check whether all the elemets in the array passes the function that we have provided as a parameter then retun true or false
// Either returns true or false

// Syntax:
// arrayname.every(function(currentValue, index, array){})

let array16 = [1,2,3,4,5]
const every = array16.every(function(element){
    return element > 0
    })
    console.log(every);


















