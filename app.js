'use strict';

let employeeInfos = [
    {
        ID: 1000,
        name: "Ghazi Samer",
        deparment: "Administration",
        level: "Senior",
    },
    {
        ID: 1001,
        name: "Lana Ali",
        deparment: "Finance",
        level: "Senior",
    },
    {
        ID: 1002,
        name: "Tamara Ayoub",
        deparment: "Marketing",
        level: "Senior",
    },
    {
        ID: 1003,
        name: "Safi Walid",
        deparment: "Administration",
        level: "Mid-Senior",
    },
    {
        ID: 1004,
        name: "Omar Zaid",
        deparment: "Development",
        level: "Senior",
    },
    {
        ID: 1005,
        name: "Rana Saleh",
        deparment: "Development",
        level: "Junior",
    },
    {
        ID: 1006,
        name: "Hadi Ahmad",
        deparment: "Finance",
        level: "Mid-Senior",
    }
]

function FirstCon (employeeInfos){
    

   this.Employee_ID = employeeInfos.ID;

   this.Full_Name = employeeInfos.name;

   this.Department = employeeInfos.deparment;

   this.Level = employeeInfos.level;

   this.Image_URL = null;

   this.Salary = this.SalaryCal(this.Level);

}

FirstCon.prototype.SalaryCal = function salary(level){

    switch(level){
        case 'Junior':
            this.Salary = taxCal(getRandomInt(500,1000));
            break;
        case 'Mid-Senior':
            this.Salary = taxCal(getRandomInt(1000,1500));
            break;
        case 'Senior':
            this.Salary = taxCal(getRandomInt(1500,2000));
            break;
    }
};

FirstCon.prototype.render = function () {
    document.write(`
    <table>
    <tr>
        <th>Employee_ID</th>
        <th>Full_Name</th> 
        <th>Department</th> 
        <th>Level</th>
    </tr>
    <tr>
        <th>${this.Employee_ID}</th>
        <th>${this.Full_Name}</th>
        <th>${this.Department}</th>
        <th>${this.Level}</th>
    </tr>
    </table>`);
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function taxCal (number){
    var tax = 7.5;
    var Sales_tax_rate = tax / 100;
    var Sales_tax = number * Sales_tax_rate;
    return (number - Sales_tax);
};
function employeeGen(employee){
    let EmpData =[];
    for (const object of employee){
        EmpData.push(new FirstCon(object));
    }
    
    return EmpData;
};

function renderEmp(emp){
    for (const evEmp of emp){
        evEmp.render()
    }
}

let employees = employeeGen(employeeInfos);
renderEmp(employees);
console.log(employees);