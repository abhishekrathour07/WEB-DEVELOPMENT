const user = {
    name: 'Abhisehk',
    id: 1234,
}
const teacher = {
    lacture: true,
}
const teachingSupport = {
    isAvilable: true,
    chat: true,
    waitingTime: "20min"

}
const callSupport = {
    fullTime: true,
    support: "24/7",
    __proto__: teachingSupport,
}
console.log(callSupport.isAvilable);


// kisko            kiska
// teacher.__proto__ = user ;
// console.log(teacher.name);



// Modern Syntax to write this 
Object.setPrototypeOf(user,teacher)
console.log(user.lacture);