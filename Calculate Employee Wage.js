var IS_PART_TIME = 1;
var IS_FULL_TIME = 2;
var PART_TIME_HOURS = 4;
var FULL_TIME_HOURS = 8;
var WAGE_PER_HOUR = 20;

let empHrs = 0; empHrs = 4
empCheck = Math.floor(Math.random() * 10) % 3; empCheck = 1
switch (empCheck) {
    case IS_PART_TIME: IS_PART_TIME = 1
        empHrs = PART_TIME_HOURS; empHrs = 4, PART_TIME_HOURS = 4
        break;
    case IS_FULL_TIME: IS_FULL_TIME = 2
        empHrs = FULL_TIME_HOURS; empHrs = 4, FULL_TIME_HOURS = 8
        break;
    default:
        empHrs = 0; empHrs = 4
}

let empWage = empHrs * WAGE_PER_HOUR; empWage = 80, empHrs = 4, WAGE_PER_HOUR = 20
console.log("Emp Wage: " + empWage);
