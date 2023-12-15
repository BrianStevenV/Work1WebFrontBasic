const nameEmployee = prompt("Enter name of employee.")
const basicSalaryPerHour = parseFloat(prompt("Enter basic salary per hour."))
const numbersHoursWorksPerMonth = parseFloat(prompt("Enter numbers hours works per month."))

const monthlySalary = basicSalaryPerHour * numbersHoursWorksPerMonth
const transportationSubsidy = monthlySalary <= 700000
console.log("The name of employe is: " + nameEmployee + " their monthly salary is: " + monthlySalary + " and the transportation subsidy is " + transportationSubsidy);