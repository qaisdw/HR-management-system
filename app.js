'use strict';



function FirstCon(employees) {


    this.Employee_ID = getRandomId();

    this.Full_Name = employees.Full_Name;

    this.Department = employees.Department;

    this.Level = employees.Level;

    this.Image_URL = employees.IMg;

    this.Salary = this.SalaryCal(this.Level);

}

FirstCon.prototype.SalaryCal = function salary(level) {

    switch (level) {
        case 'Junior':
            this.Salary = taxCal(getRandomInt(500, 1000));
            break;
        case 'Mid-Senior':
            this.Salary = taxCal(getRandomInt(1000, 1500));
            break;
        case 'Senior':
            this.Salary = taxCal(getRandomInt(1500, 2000));
            break;
    }
};

FirstCon.prototype.render = function () {
    const empTable = document.getElementById("empTable");
    const rowTable = document.getElementById("rowTable");
    const imgEL = document.createElement("img")
    imgEL.src=this.Image_URL;
    rowTable.appendChild(imgEL);
    empTable.innerHTML=`
    <tr>
        <th>${this.Employee_ID}</th>
        <th>${this.Full_Name}</th>
    </tr>
    <tr>
        <th>${this.Department}</th>
        <th>${this.Level}</th>
    </tr>
    `;
};

function runderEmp(emp){
    emp.render()
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomId(min = 1000, max = 2000) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function taxCal(number) {
    var tax = 7.5;
    var Sales_tax_rate = tax / 100;
    var Sales_tax = number * Sales_tax_rate;
    return (number - Sales_tax);
};

// function employeeGen(employee) {
//     let EmpData = [];
//     for (const object of employee) {
//         EmpData.push(new FirstCon(object));
//     }

//     return EmpData;
// };

// function renderEmp(emp) {
//     emp.render();
// }

let sec = document.getElementById('main');
let emp = document.getElementById("form1");
let btn = document.getElementById("btn");
btn.addEventListener("click",color)
function color(event){
    let tab = document.getElementById("table");
    tab.style.backgroundColor= "silver";
}
emp.addEventListener("submit", sunBe);
function sunBe(event) {
    event.preventDefault();
    let full_name = event.target.fullname.value;

    let deparment = event.target.Department.value;
    let level = event.target.Level.value;
    let img = event.target.img.value;

    let employees = { Full_Name: full_name, Department: deparment, Level: level, IMg: img };

    //employeeGen()
    let push = new FirstCon(employees);
    
    runderEmp(push);
};
