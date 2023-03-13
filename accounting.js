'use strict';

function GetDataCon(Employee_ID,Full_Name,Department,Level,Salary,IMg) {


    this.Employee_ID = Employee_ID;

    this.Full_Name = Full_Name;

    this.Department = Department;

    this.Level = Level;

    this.Image_URL = IMg;

    this.Salary = Salary;

};
GetDataCon.prototype.renderTable=function(){
    let table1=document.getElementById("table1");
    let teEl = document.createElement("tr");
    table1.appendChild(teEl);

    let tdEl = document.createElement("td");
    tdEl.textContent=this.Department;
    table1.appendChild(tdEl);

    let tdEl1 = document.createElement("td");
    tdEl1.textContent=this.Full_Name;
    table1.appendChild(tdEl1);

    let tdEl2 = document.createElement("td");
    tdEl2.textContent=this.Salary;
    table1.appendChild(tdEl2);

};

renderData();

function runderEmp(objArr) {
    for(let i = 0 ; i < objArr.length ; i++){
        objArr[i].renderTable();
    }
};
function renderData(){
    let reArr = localStorage.getItem('CV');
    let objArr = JSON.parse(reArr);
    console.log(objArr);

    for (let i=0;i<objArr.length;i++){
        new GetDataCon(objArr[i].Employee_ID,
            objArr[i].Full_Name,
            objArr[i].Department,
            objArr[i].Level,
            objArr[i].Salary,
            objArr[i].IMg);
    }
    runderEmp(objArr);
};
