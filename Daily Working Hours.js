// UC 3
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
var WAGE_PER_HOUR = 20;
var IS_PART_TIME = 1;
var IS_FULL_TIME = 2;
var PART_TIME_HOURS = 4;
var FULL_TIME_HOURS = 8;
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);
