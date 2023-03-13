'use strict';

const allCv = [];
let c = 1000;



function FirstCon(Employee_ID,Full_Name,Department,Level,Salary,IMg) {


    this.Employee_ID = Employee_ID;

    this.Full_Name = Full_Name;

    this.Department = Department;

    this.Level = Level;

    this.Image_URL = IMg;

    this.Salary = 0;

    allCv.push(this);

}

FirstCon.prototype.render = function () {
    const empTable = document.getElementById("table");
    
    empTable.innerHTML = `<img class="rowTable" src=${this.Image_URL} alt="image">
    <table class="rowTable">
        <tr>
            <th>${this.Employee_ID}</th>
            <th>${this.Full_Name}</th>
        </tr>
        <tr>
            <th>${this.Department}</th>
            <th>${this.Level}</th>
        </tr>
    </table>`;
    
};

function runderEmp() {
    for(let i = 0 ; i < allCv.length ; i++){
        allCv[i].Employee_ID=getRandomId();
        allCv[i].Salary=salary(allCv[i].Level)
        allCv[i].render();
    }
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomId() {
    c+=1
    return c;
};

function salary(level) {

    switch (level) {
        case 'Junior':
            return taxCal(getRandomInt(500, 1000));

        case 'Mid-Senior':
            return taxCal(getRandomInt(1000, 1500));

        case 'Senior':
            return taxCal(getRandomInt(1500, 2000));

    }
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
btn.addEventListener("click", color)
function color(event) {
    let tab = document.getElementById("table");
    tab.style.backgroundColor = "silver";
};

emp.addEventListener("submit", sunBe);

function sunBe(event) {
    event.preventDefault();

    let full_name = event.target.fullname.value;
    let deparment = event.target.Department.value;
    let level = event.target.Level.value;
    let img = event.target.img.value;

    
    //let employees = { Full_Name: full_name, Department: deparment, Level: level, IMg: img };
    
    new FirstCon(0,full_name,deparment,level,0,img);

    runderEmp();
    storge(allCv);

};

function storge(data){
    let cvData = JSON.stringify(data);
    localStorage.setItem('CV',cvData);
}

getData();

function getData(){
    let reArr = localStorage.getItem('CV');
    let objArr = JSON.parse(reArr);
    for (let i=0;i<objArr.length;i++){
        new FirstCon(objArr[i].Employee_ID,
            objArr[i].Full_Name,
            objArr[i].Department,
            objArr[i].Level,
            objArr[i].Salary,
            objArr[i].IMg);
    }
    
}