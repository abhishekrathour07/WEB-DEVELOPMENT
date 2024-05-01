function one(){
    let username ="Abhishek";
    function two(){
        let data = 1234;
        console.log(data);
        console.log(username);

    }
    // console.log(data); gives error because of scope of varible
    two();
}
one();
