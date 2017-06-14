//function employeeDate(arrStr) {
//    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
//
//    for (let arrS of arrStr) {
//        let match = pattern.exec(arrS);
//        if (match) {
//            console.log(`Name: ${match[1]}\n` + `Position: ${match[3]}\n` + `Salary: ${match[2]}`);
//        }
//    }
//}
//
//
//employeeDate([
//    "Isaac - 1000 - CEO",
//    "Ivan - 500 - Employee",
//    "Peter - 500 - Employee"
//]);


//2nd solution:

function eD(arrStr) {

    let pattern = /^([A-Z][a-zA-Z]*)\s\-\s([1-9][0-9]*)\s\-\s([a-zA-Z0-9 -]+)$/g;

    for (let arrS of arrStr) {
        let matches = pattern.exec(arrS);//to get the information from the group(s) - returns an array with all the groups in the match

        while (matches) {
            console.log(`Name: ${matches[1]}`);
            console.log(`Position: ${matches[3]}`);
            console.log(`Salary: ${matches[2]}`);
            matches = pattern.exec(arrS);
        }
    }
}

eD([
    "Isaac - 1000 - CEO",
    "Ivan - 500 - Employee dsdsd",
    "Peter - 500 - Employee"
]);