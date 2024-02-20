// Finding the true length after removing the leading and trailing spaces

let name = "  Abhi   "

String.prototype.trueLength = function(){
    console.log(`True Length : ${this.trim().length}`);
}

console.log(name.length);
name.trueLength()

//  Examples of prototype

let hero = ['krish','thor'];

let heroPower ={
    krish:"Mask",
    thor:'Hammer',
    getThorPower: function(){
        console.log(`THor power is ${this.thor}`);
    }
}

Object.prototype.sayHello = function(){
    console.log("Object  is avilable for all");
}

Array.prototype.heyBuddy = function(){
    console.log("Array are avilable for only array");
}

hero.sayHello()
heroPower.sayHello()
hero.heyBuddy()
// heroPower.heyBuddy() ---> error bcz this is not perform operation with object 
