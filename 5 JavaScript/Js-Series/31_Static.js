class user{
    constructor(name,password){
        this.name =name;
        this.password =password;
    }
  
    log(){
        console.log("Your details are ");
        console.log("username :" ,  this.name);
        console.log("password :" ,  this.password);
    }

  static  createdId(){
        console.log(Math.floor(Math.random()*10000) +1);
    }

}
const user1 = new user ("Abhi",1223);
user1.log();
// user1.createdId();