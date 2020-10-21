//comment for hello
console.log('Hello from script');
let name = 'Saurabh';
console.log(name);
let firstName = 'Saurabh';
let lastName = 'Yadav';
console.log(firstName,lastName);
//constant
const interestRate = 5;
//interestRate = 6;
console.log(interestRate);
//Primitive types valraibale and reference types
//Primitive types: String Literal, Number, Boolean, undefined, null
let age = 30;
let isChecked = true;
let city = undefined;
let country = null;
console.log(age,isChecked,city,country);
//
//
// Dynamic Language : variable types can change in run time based on the value assigned
//
//Reference Types Varaibbles: object, Array, Function
// object : key value pair
let person = {
    firstName : 'Gaurav',
    lastName : 'Yadav',
    age : 35
};
console.log(person);
// dot notation
person.firstName='Saurabh';
console.log(person.firstName);
//Array : storing a list of items, they can be differenct types
let shoppingList = ['bread','sugar'];
console.log(shoppingList);
shoppingList[2]='salt';
console.log(shoppingList);
console.log(shoppingList[1]);
//while loop on array items
let iterator=0;
while (iterator<shoppingList.length) {
    console.log(shoppingList[iterator]);
        iterator++;
}
//Functions
// Either perform a task or calculate a value
//Performing task
function displayHello(){
    console.log('Hello from funcition');
}
displayHello();
//
function helloWithName(name){
    console.log('Hello ' + name);
}
helloWithName('Saurabh');
helloWithName('Gaurav');
helloWithName('Aksh');
helloWithName('Disti');
helloWithName('Suman');
helloWithName('Mummy');
//
function helloFullName(firstName,lastName){
    console.log('Hello '+ firstName+ ' '+ lastName);
}
helloFullName('Aksh','Yadav');
//
// Peroforming a calclualation
function cube(number){
    return number*number*number;
}
let num=2;
console.log(cube(num));
console.log(cube(4));
// Done