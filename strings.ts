// Strings in TypeScript

// string - Text value or a combination of characters
/*
1. Single Quote - String Literal ('SingleQuote')
2. Double quote - String literal ("DoubleQuote")
3. backtick (``) - String template - `When we try to use a string variable inside another sting value ${variable}`

// index in string starts with 0


'' or "" or ``(backtick)
*/

let singleQuote1 :string = 'This is a single quote string' 
let doubleQuote1 :string = "This is a double quote string" 

let backtickString :string = `This is a backtick string`


console.log("****** Mthods of String*********")

// 1. length - Return numbers of characters available in string
// Syntax:-
// stringname.length

let str : string = "Hello, TypeScript" // H - 0th index e - 1st
console.log(str.length)

// 2. charAt(index) - Return the character at the specified index in an string
// Syntax:-
// stringname.charAt(index)

// Find out the duplicate character available inside a string
// index is a 0 based index in string

console.log(str.charAt(5));
console.log(str.charAt(6));

for(let i =0; i<str.length; i++){
    console.log(str.charAt(i));
}

// 3. concat(string1....)  - Joins 2 or more string and return a new string
// Syntax:-
// stringname.concat(string1, string2, string3...)

let str1 = "Hello "
let str2 = "TypeScript"
let str3 = "JavaScript"

console.log(str1 + str2);
console.log(str1.concat(str2));
console.log(str1.concat(str2, str3));
console.log(str1); // Hello

// 4. includes(searchString, position)
// Syntax:-
// stringname.includes(searchString, position(optional))
// Return true or false


let str4 = "This is a string in TypeScript"
console.log(str4.includes("TypeScript"))

console.log(str4.includes("u", 10));

// 5. startsWith(searchString) - Check if a string starts eith the specified character or word
// Syntax:-
// stringname.startsWith(searchString)
// Return true or false

console.log(str4.startsWith("This")); // true
console.log(str4.startsWith("t")); // false

//6. endsWith(searchString) - Check if a string ends with the specified character or word
// Syntax:-
// stringname.endsWith(searchString)
// Return true or false
console.log(str4.endsWith("TypeScript")); // true
console.log(str4.endsWith("p")); // false

//7. indexOf(string or character) - Returns the index of the first occurance of the specified value in string
// Syntax:-
// stringname.indexOf(string or character)
// Return index of the first occurance of the specified value in string
console.log(str4.indexOf("is", 3)); // 2

// 8. lastIndexOf(string or character) - Returns the index of the last occurance of the specified value in string
// Syntax:-
// stringname.lastIndexOf(string or character)
// Return index of the last occurance of the specified value in string
console.log(str4.lastIndexOf("is")); // 8

// 9. replace(searchValue, newvalue) - Replaces the first ocuurances of a specified value and Returns a new string with the replaced values in the string
// Syntax:
// stringName.replace(searchValue, newValue)

let str5 = "This is a TS string"
console.log(str5.replace("TS", "JS"))
console.log(str5.replace("i", "u"))

console.log((str5));

// 10. slice()
// slice(startIndex, endIndex) - Portion of an string

// Syntax:
// stringName.slice(startIndex, endIndex)
// StartIndex - Starting index of portion of string (index starts with 0 in string)
// EndIndex(optional) - Ending index of portion of string - This will be exclusive


console.log(str5.slice(10));
console.log(str5.slice(0,4)); // 0-4-1
console.log(str5.slice(-6, -1)); // -6 , -6+1 = -5, -4, -3


// 11. substring(startIndex, endIndex) - Extract characters from string between the specified index
// Syntax:-
// stringName.substring(startIndex, endIndex)

console.log((str5.substring(0,10)));

// 12. toLowerCase() - Converts a string to a lowercase letter
// Syntax:-
// stringName.toLowerCase()
let str6 = "This is a TS string"

console.log(str6.toLowerCase());

// 13. toUpperCase() - Converts a string to a uppercase letter
// Syntax:-
// stringName.toUpperCase()

console.log(str6.toUpperCase());

//14. trim() - Remove the whitespace from the beginning and end of the string
// Syntax:-
// stringName.trim()
let str7 = "   This is a TS string   "
console.log(str7);
console.log(str7.trim());

//15. trimStart(), trimEnd()
// Syntax:-
// stringName.trimStart()
let str8 = "   This is a TS string    "
console.log(str8.trimStart());
console.log(str8.trimEnd());








