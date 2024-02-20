

class user {
    constructor(name, password) {
        this.name = name;
        this.password = password;

    }
    encryptPassword() {
        console.log(`123${this.password}abc`);
    }
    greet() {
        console.log(`Hey ${this.name} ,have a nice day`);
    }
}

let obj1 = new user("abhi", 7777);
obj1.greet();
obj1.encryptPassword();


// If classes doesnt exit in js then how we write the above code

function user(name, password) {
    this.name = name;
    this.password = password;

}
user.prototype.greet = function () {
    console.log(`Hey ${this.name} ,have a nice day`);
}
user.prototype.encryptpassword = function () {
    console.log(`123${this.password}abc`);
}

let obj = new  user("Abhii",1234)
obj.greet();
obj.encryptpassword();