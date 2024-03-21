// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  let response = '';
  let firstName = '<FN_Blank>';
  let lastName = '<LN_Blank>';
  let salary = 0;
  let cancelPressed = false;
  let isValidInfo = true;
  let addMoreEmployees = true;
  // Get the Employee's First Name from the user
  do {
    do {
      salary = 0;
      isValidInfo = true;
      response = window.prompt("What is the First Name of the Employee?");
      if (response === '') {
        isValidInfo = false;
        response = window.alert("The string you entered is NOT valid.  Please try again.");
      }
      else if (response === null) {
        cancelPressed = true;
        window.alert(`Employee will be entered as ${firstName} ${lastName} with a $${salary} annual salary.`);
      }
      else {
        firstName = response;
      } 
      if (cancelPressed)
        break;
    }
    while (!isValidInfo)
    // Get the Employee's Last Name from the user
    if (!cancelPressed) {
      do {
        isValidInfo = true;
        response = window.prompt("What is the Last Name of the Employee?");
        if (response === '') {
          isValidInfo = false;
          response = window.alert("The string you entered is NOT valid.  Please try again.");
        }
        else if (response === null) {
          cancelPressed = true;
          window.alert(`Employee will be entered as ${firstName} ${lastName} with a $${salary} annual salary.`);
        }
        else {
          lastName = response;
        } 
        if (cancelPressed)
          break;
      }
      while (!isValidInfo)
    }
    // Get the Employee's Salary from the user
    if (!cancelPressed) {
      do {
        isValidInfo = true;
        response = window.prompt("What is the Annual Salary of the Employee?");
        if (response === '' || isNaN(response)) {
          response = window.alert("The value you entered is NOT a valid number.\n$0.00 will be used as the Annual Salary for this employee.");
        }
        else if (response === null) {
          cancelPressed = true;
          window.alert(`Employee will be entered as ${firstName} ${lastName} with a $${salary} annual salary.`);
        }
        else {
          salary = parseInt(response);
        }
        if (cancelPressed)
          break;
      }
      while (!isValidInfo)
    }
    // Add new Employee to the employeesArray array
    let newEmployee = {firstName: firstName, lastName: lastName, salary: salary};
    employeesArray.push(newEmployee);
    // Ask user if they want to enter another Employee
    response = window.confirm("Do you want to add another Employee?");
    if (response === false)
      addMoreEmployees = false;
  }
  while (addMoreEmployees)  
  // Return the employeesArray array
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let sumSalaries = 0;
  let avgSalary = 0;
  let employeeString = 'employee(s)';
  // Loop through all employees to get the SUM of ALL salaries
  for (let i=0; i<employeesArray.length; i++) {
    sumSalaries += employeesArray[i].salary;
  }
  // Calculate the Average Salary
  avgSalary = sumSalaries / employeesArray.length;
  if (employeesArray.length === 1)
    employeeString = 'employee';
  // Log Average Salary to the Console
  console.log(`The average employee salary between our ${employeesArray.length} ${employeeString} is ${avgSalary.toLocaleString("en-US",{style:"currency",currency:"USD"})}.`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let randomIndex = 0;
  // Get a Random number between 0 and the COUNT of Employees
  randomIndex = Math.floor(Math.random()*employeesArray.length);
  // Log Random Employee to the Console
  console.log(`Congratulations to ${employeesArray[randomIndex].firstName} ${employeesArray[randomIndex].lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
