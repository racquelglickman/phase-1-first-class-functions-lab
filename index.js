// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2);
}

const random = ['driver1', 'driver2', 'driver3'];


const returnLastTwoDrivers = function (array) {
    return array.slice(-2);
}

console.log(returnLastTwoDrivers(random));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function multiplier(fare) {
        console.log("fare:" + fare);
        return fare * integer;
    }
}

console.log(createFareMultiplier(3)(4));

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
}

console.log(selectDifferentDrivers(random, returnLastTwoDrivers));
// console.log(returnFirstTwoDrivers(['racquel', 'dennis', 'mohammad']));


