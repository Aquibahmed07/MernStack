class Employee
{
    constructor(){
        this.id=10;
        this.name="sampath";
    }
    displayInfo(){
        console.log(this.id+"   "+this.name);
    }
}
let emp=new Employee();
emp.displayInfo();