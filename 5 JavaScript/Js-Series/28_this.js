
function detail(name, id) {
    console.log(id);
    console.log(name);
}
 detail("Abhi", 123);
 detail("jai", 222);

// constructor function 
function consdetail(name, id) {
    this.name = name;
    this.id = id; //this talking about current contest
   
}

let obj1 =  new consdetail("Abhi", 123)
console.log(obj1);

let obj2 =  new consdetail("Abhishek", 1234)
console.log(obj2);