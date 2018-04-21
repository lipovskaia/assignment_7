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

/*function Animal(type) {
    this.type = type;
}


Animal.prototype.displayType = function speak(){
    if (this.type == "cat") {
        window.console.log("The red " + this.type +  " is meowing!");
    } if (this.type == "dog") {
        window.console.log("The black " + this.type + " is barking!");
    }
}
var myAnimal = new Animal("dog");
myAnimal.displayType();
 */


// STEP 8
//Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
function Animal(type) {
    var type = type;
    var checkType = function (){
    if (type == "cat") {
        window.console.log(type +  " is cat");
    } if (type == "dog") {
        window.console.log(type +  " is dog");
    }
    
}
}
var myAnimal = new Animal("dog");


// STEP 9



