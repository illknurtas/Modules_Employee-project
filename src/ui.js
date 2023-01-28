export class UI{
    constructor(){
        this.employeeList = document.getElementById("employees");
        this.updateButton = document.getElementById("update");
        this.nameInput = document.getElementById("name");
        this.departmentInput = document.getElementById("department");
        this.salaryInput = document.getElementById("salary");

    }
    addAllEmployeesToUI(employees){
        let result ="";
        employees.forEach(employee => {
            result += `
                <tr>                          
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                    <td>${employee.id}</td>
                    <td><a href="#" id = "update-employee" class= "btn btn-danger">Update</a></td> 
                    <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delet</a></td>
                </tr>
            `;
        });
        this.employeeList.innerHTML = result;
    }
    clearInputs(){
        this.nameInput.value="";
        this.departmentInput.value="";
        this.salaryInput.value="";
    }
    addEmployeeToUI(employee){
        this.employeeList.innerHTML += `
            <tr>                          
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Update</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delet</a></td>
            </tr>
        `;
    }
}