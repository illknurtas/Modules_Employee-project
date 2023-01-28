import { Request } from "./request";
import {UI} from "./ui";

// Elements
const form = document.getElementById('employee-form');
const nameInput = document.getElementById('name');
const departmentInput = document.getElementById('department');
const salaryInput = document.getElementById('salary');
const employeesList = document.getElementById("employees");
const updateEmployeebuttons = document.getElementById("update");


const request = new Request("http://localhost:3000/employees");//local endpoint url that given when json-server run
// GET
// request.get()
// .then(employees => console.log(employees))
// .catch(err => console.log(err));

// POST 
// request.post({name:"İlknur", department:"IT", salary:6000})
// .then(employee => console.log(employee))
// .catch(err => console.log(err));

// PUT
// request.put(1,{name:"İlknur", department:"IT", salary:6000})
// .then(employee => console.log(employee))
// .catch(err => console.log(err));

// DELETE
// request.delete(2)
// .then(message => console.log(message))
// .catch(err => console.log(err));
const ui = new UI();
eventListeners();
function eventListeners(){
    document.addEventListener("DOMContentLoaded",getAllEmployees);
    form.addEventListener("submit",addEmployee);
}
function getAllEmployees(){
    request.get()
    .then(employees =>{
        ui.addAllEmployeesToUI(employees);
    })
    .catch(err => console.log(err));
}
function addEmployee(e){

    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();

    if(employeeName === ""||employeeDepartment === ""||employeeSalary === ""){
        alert ("Please fill all fields");
    }
    else{
        request.post({name:employeeName, department:employeeDepartment, salary: employeeSalary})
        .then(employee => {
            ui.addEmployeeToUI(employee);
        })
        .catch(err => console.log(err));
    }
    ui.clearInputs();
    e.preventDefault();
}