const sayHi=(name)=>{
  console.log("It is sayHi function");
}

const sayHello=(name)=>{
    console.log("Begining of sayHello function");
         sayHi();
console.log("End of the sayHello function");
}

sayHello("shivam");  //Begining sayHello function