function username(name){
    this.name = name;
}

function user(name ,id,passworrd){
    username.call(this,name)
    this.id =id;
    this.passworrd = passworrd

}

let obj1 = new user("Abhi", 7103, 1234)

console.log(obj1);