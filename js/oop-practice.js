/* eslint-env browser */

// STEP 1
/* function Cat () {};
var Dog = function (){};
*/
// STEP 2
/* function Cat () {}
var meow = new Cat();

var Dog = function (){}
var woof = new Dog();
*/
 
// STEP 3
/* function Animal(){
    window.console.log("The Animal has been created");
}
var pet = new Animal(); */


// STEP 4
/* function Animal(type, age){
    this.type = type;
    this.age = age;
    window.console.log( "This " + this.type + " is " + this.age + " years");
}
var pet = new Animal("dog", 5); */
// STEP 5
/* function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    
    window.console.log( "This " + this.type + " is " + this.breed + " color " + this.color + "." + " Which is " + this.height + " tall and " + this.length + " long." );

}
var pet = new Animal("dog", "pitbull", "black", 2, 3); */


// STEP 6
/* function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    
    

}
var pet = new Animal();
for (var property in pet) {
     window.console.log(property);
}

*/

// STEP 7
function Animal(type) {
    "use strict";
    this.type = type;
}
var myAnimal = new Animal("Cat");
Animal.prototype.displayType = function speak(){
    if (type == "Cat") {
        window.console.log("The <color> cat is meowing!");
    } if (type == "Dog") {
        window.console.log("The <color> cdog is barking!");
    }
}

myAnimal.displayType();
 

// STEP 8

// STEP 9



