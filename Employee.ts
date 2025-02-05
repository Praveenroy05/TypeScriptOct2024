// Class
/* Syntax - class ClassName {

constructor(key1 :type, key2: type){
    this.key1 = key1
    this.key2 = key2
}

info(){
console.log("infor method")
}



let object = new ClassName(key1, key2)

}

*/

class Employee {

    i =10;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        }

    info(){
        console.log("info method")
        }
}
