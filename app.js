'use strict';

// let department = ['Administration','Marketing','Development','Finance'];

// let level = ['Junior','Mid-Senior','Senior'];

//let emp = [];

function FirstCon (ID,name,deparment,level,image,salary){
    

   this.Employee_ID = ID;

   this.Full_Name = name;

   this.Department = deparment;

   this.Level = level;

   this.Image_URL = image;

   this.Salary = salary;

   //emp.push(this);

}

FirstCon.prototype.Salary = function salary(major){
    if (this.level == 'Junior'){
        return this.Salary = taxCal(getRandomInt(500,1000));
    }else if (this.level == 'Mid-Senior'){
        return this.Salary = taxCal(getRandomInt(1000,1500));
    }else{
        return this.Salary = taxCal(getRandomInt(1500,2000));
    }
};

FirstCon.prototype.render = function(){
    document.write(`<table><tr><th>Employee_ID</th>  <th>Full_Name</th>  <th>Department</th>  <th>Level</th></tr>
    <tr><th>${this.Employee_ID}</th>  <th>${this.Full_Name}</th>  <th>${this.Department}</th>  <th>${this.Level}</th></tr></table>`);
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function taxCal (number){
    var tax = 7.5;
    var Sales_tax_rate = tax / 100;
    var Sales_tax = number * Sales_tax_rate;
    return (number - Sales_tax);
};

let firstEmp = new FirstCon(1000 ,'Ghazi' ,'Samer','Administration' ,'Senior');
firstEmp.render();