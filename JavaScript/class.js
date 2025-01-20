class Employee {
  constructor() {
    this.id = 1;
    this.empName="shivam";
  }
  displayInfo(){
    console.log(this.id + " " + this.empName);
  }
}
let emp=new Employee();
emp.displayInfo();