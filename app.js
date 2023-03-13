'use strict';

function renderTable(arr){
    let table1=document.getElementById("table1");
    let teEl = document.createElement("tr");
    table1.appendChild(teEl);

    let tdEl = document.createElement("td");
    tdEl.textContent=arr.Department;
    table1.appendChild(tdEl);

    let tdEl1 = document.createElement("td");
    tdEl1.textContent=numbCal1(arr.Department);
    table1.appendChild(tdEl1);

    let tdEl2 = document.createElement("td");
    tdEl2.textContent=avgSalaCal(arr);
    table1.appendChild(tdEl2);

    let tdEl3 = document.createElement("td");
    tdEl3.textContent=totalSal(arr);
    table1.appendChild(tdEl3);

};

let sumJ=0,sumMid=0,sumS=0;
function totalSal(salArr1){
    switch (salArr1.Level) {
        case 'Junior':
            return sumJ+=salArr1.Salary;

        case 'Mid-Senior':
            return sumMid+=salArr1.Salary;

        case 'Senior':
            return sumS+=salArr1.Salary;

    }
}

let junCal=0,midCal=0,senCal=0;

function salCal(jun,sal){
    let sum=0;
    sum+=sal;
    return sum/jun;
}


function avgSalaCal(salArr){
    switch (salArr.Level) {
        case 'Junior':
            junCal+=1;
            return salCal(junCal,salArr.Salary);

        case 'Mid-Senior':
            midCal+=1;
            return salCal(midCal,salArr.Salary);

        case 'Senior':
            senCal+=1;
            return salCal(senCal,salArr.Salary);

    }
}

let admCon=0,marCon=0,devCon=0,finCon=0;

function numbCal1(arr2){
    switch (arr2){
        case "Administration":
            return admCon+=1;
        case "Marketing":
            return marCon+=1;
        case "Development":
            return devCon+=1;
        case "Finance":
            return finCon+=1;
        }
}

function runderEmp(objAr) {
    for(let i = 0 ; i < objAr.length ; i++){
        renderTable(objAr[i]);
    }
};

function renderData(){
    let reArr = localStorage.getItem('CV');
    let objArr = JSON.parse(reArr);
    console.log("reArr ",reArr);
    console.log("objArr :",objArr);
    runderEmp(objArr);
};
renderData();
