function StudentData(name, age, dept, mobileNo) {
    this.name = name;
    this.age = age;
    this.dept = dept;
    this.mobileNo = mobileNo;

}

var s1 = new StudentData('Abhishek',20,'BCA',9334824703);
console.log(s1.name);
console.log(s1.mobileNo);