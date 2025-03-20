var WAGE_PER_HOUR = 20;
var IS_PART_TIME = 1;
var IS_FULL_TIME = 2;
var PART_TIME_HOURS = 4;
var FULL_TIME_HOURS = 8;

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
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
       totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let dailyCntr = 0;
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7F - Check If Any Part Time Wage: " + 
    mapDayWithWageArr.some(isAnyPartTimeWage));