//Objects - Objects are collection of key-value pair. {} 

// ClassName obj = new ClassName() - An object in Java

// 1. Literal Object - Directly define the values for variable
// 2. Inline Type Object - We also define the datatype of the keys
// 3. Using type aliases
// 4. interface
// 5. Using the classes



// 1. Using Optional Parameter
// 2. Readonly property - 


// 1.Literal Object

const obj = {name1 : "Rahul", age : 30, city : "NY", isEmployee : true}
// Syntax to fetch the value for a key from object

// objectname.key
// objectname["key"]

console.log(obj.name1)
console.log(obj["name1"])
console.log(obj.age);
obj.age = 31
console.log(obj.age);



// 2. Inline Types Object:

let person :{name: string, age :number, address :string} = {name : "Rahul", age : 30, address : "NY"}

console.log(person.name)
console.log(person["address"]);
person.age = 31
console.log(person.age);

// Using type Aliases

//Car  - color, brand, model
// {color :"Red", brand : "BMW", model : "Q4"}




// let employee :{name: string, age :number, address :string} = {name : "Rahul", age : 30, address : "NY"}

let Car :{name: string, age :number, address :string} = {name : "Rahul", age : 30, address : "NY"}


// 3. Using type aliases way of declaring Object structure in TS

// Syntax - 
type Car = {name : string, color: string, model : string, YOM : number}


let car : Car = {name: "BMW", color :"white", model :"C Series", YOM : 2024}

let car1 : Car = {name: "BMW", color :"white", model :"C Series", YOM : 2024}

let car2 : Car = {name: "BMW", color :"white", model :"C Series", YOM : 2024}

// let car3 = {}
// car3.name = "BMW"


// 4.  Using an interface
// Syntax - interface name { properties }

interface Cars {name : string, color: string, model : string, YOM : number}

let objectName :Cars = {name : "string", color: "string", model : "string", YOM : 2023}

let objectName1 :Cars = {name : "string", color: "string", model : "string", YOM : 2023}

// 5. Using Classes


// 1. Optional Property in Object

let employee : {name? :string, age : number, department : string, salary? : number}

 = {age : 20, department : "Tech"}

 console.log(employee);
 employee.department = "Sales"
 console.log(employee);


 // 2. readonly property  - it cannot be modified after declaration
 //let objectName : {readonly name : string, age : number, department : string, salary? : number}

 let employee1 : {readonly name :string, age : number, department : string, salary? : number}

 = {name : "John", age : 20, department : "Tech"}

 console.log(employee1);
 employee1.name = "Peter"
 console.log(employee1);






