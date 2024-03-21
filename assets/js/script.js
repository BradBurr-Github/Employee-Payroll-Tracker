// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  debugger;
  employeesArray.push(['Trent', 'Burr', 50000]);
  employeesArray.push(['Kylie', 'Herrmann', 85000]);
  employeesArray.push(['Lindsi', 'Amussen', 64000]);

  return employeesArray;

  let response = window.prompt("Select Rock(r), Paper(p) or Scissors(s):");
  window.alert(`You chose an invalid entry.  Please try again.`);

  // let addMoreEmployees = true;
  // do {

  // }
  // while (addMoreEmployees)
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let sumSalaries = 0;
  let avgSalary = 0;
  // Loop through all employees to get the SUM of ALL salaries
  for (let i=0; i<employeesArray.length; i++) {
    sumSalaries += employeesArray[i][2];
  }
  // Calculate the Average Salary
  if (employeesArray.length > 0)
    avgSalary = (sumSalaries / employeesArray.length).toFixed(2);
  // Log Average Salary to the Console
  console.log(`Employee Average Salary: $${new Intl.NumberFormat('en-US').format(avgSalary)}.`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let randomIndex = 0;
  let randomEmpString = 'The Random Winning Employee is:  ';
  let randomEmployee = '<No Employees Exist>.';
  // Get a Random number between 0 and the COUNT of Employees
  if (employeesArray.length > 0) {
    randomIndex = Math.floor(Math.random()*employeesArray.length);
    randomEmployee = employeesArray[randomIndex][0] + ' ' + employeesArray[randomIndex][1] + '.';
  }
  // Log Random Employee to the Console
  console.log(`${randomEmpString}${randomEmployee}`);
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
