// Why we cant change the value of math.PI


 let mathValue = Object.getOwnPropertyDescriptor(Math,"PI")
 console.log(mathValue);

//  just because of its writable is false we can not reinitialize the value again


const detail ={
    name:"Abhishek",
    dept: "AIGS",
    Auid: '0026',
    isAvilable: true
};

// property of this object
console.log(Object.getOwnPropertyDescriptor(detail,"name"));

// Changing property 
Object.defineProperty(detail,"name",
{
    writable: false,
    enumerable: false,
    configurable: true

}) 
console.log(Object.getOwnPropertyDescriptor(detail,"name"));

detail.name = "hjhsdkj"
console.log(detail.name);

for (let [key,value] of Object.entries(detail)) {
   console.log(value);
}


