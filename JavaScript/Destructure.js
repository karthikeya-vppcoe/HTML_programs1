const Person={
    name:"John",
    age:30,
    email:"123@gmail.com"
}
console.log(Person.name+" "+Person.age+" "+Person.email);  //John 30
const {name,age,email}=Person;
console.log(name+" "+age+" "+email);  //John 30
