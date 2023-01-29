import { Request } from "./request";
import {UI} from "./ui";

// Elements
const form = document.getElementById('employee-form');
const nameInput = document.getElementById('name');
const departmentInput = document.getElementById('department');
const salaryInput = document.getElementById('salary');
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");//local endpoint url that given when json-server run

const ui = new UI();

let updateState = null;

// EVENTS
eventListeners();
function eventListeners(){
    document.addEventListener("DOMContentLoaded",getAllEmployees);
    form.addEventListener("submit",addEmployee);
    employeesList.addEventListener("click",updateOrDelete);
    updateEmployeeButton.addEventListener("click",updateEmployee);
}
// GET EMPLOYEE
function getAllEmployees(){
    request.get()
    .then(employees =>{
        ui.addAllEmployeesToUI(employees);
    })
    .catch(err => console.log(err));
}

// ADD EMPLOYEE
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

// DELETE
function updateOrDelete(e){
    if(e.target.id === "delete-employee"){
        deleteEmployee(e.target);
    }
    else if(e.target.id === "update-employee"){
        updateEmpluyeeController(e.target.parentElement.parentElement);
    }
}
function deleteEmployee(targetEmployee){
    const id = targetEmployee.parentElement.previousElementSibling.previousElementSibling.textContent;
    request.delete(id)
    .then(message =>{
        ui.deleteEmployeeFromUI(targetEmployee.parentElement.parentElement);
    })
    .catch(err => console.log(err));
}

// UPDATE BUTTON - CONTROLLER
function updateEmpluyeeController(targetEmployee){
    ui.toggleUpdateButton(targetEmployee);
    if(updateState === null){
        updateState ={
            updateId : targetEmployee.children[3].textContent,
            updateParent : targetEmployee
        }
    }
    else{
        updateState = null; 
    }
}

// UPDATE BUTTON - EMPLOYEE
function updateEmployee(){
    if(updateState){
        // update

        const data ={name: nameInput.value.trim(), department: departmentInput.value.trim(), salary: salaryInput.value.trim()};
        request.put(updateState.updateId, data)
        .then(updatedEmployee =>{
            ui.updateEmployeeOnUI(updatedEmployee,updateState.updateParent);
        })
        .catch(error => console.log(err));

    }
}