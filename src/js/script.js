//cw 1

const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];

// function femaleNames() {
//      const newArray = [];
//      names.map((name) => {
//         console.log(name);
//         if(name[name.length-1] == 'a') {
//             newArray.push(name);
//         }
//      })
//      console.log(newArray);
//      return newArray;
// }

// femaleNames();

// function femaleNamesWithSlice() {
//     const newArray = [];
//     names.map((name) => {
//         if(name.slice(-1) === 'a') {
//             newArray.push(name);
//         }
//     })
//     console.log(newArray);
//     return newArray;
// }

// femaleNamesWithChartAt();

// function femaleNamesWithSlice() {
//     const newArray = []; 
//     names.map((name) => {
//         if(name.charAt(name.length-1) == 'a') {
//             newArray.push(name);
//         }
//     })
//     console.log(newArray);
//     return newArray;
// }

// femaleNamesWithSlice();

// const employees = {
//     john: {
//         name: 'John Doe',
//         salary: 3000
//     }, 
//     amanda: {
//         name: 'Amanda Doe', 
//         salary: 4000
//     }, 
// }

// function employeesArray() {
//     const lastNames = [];
//     const salaries = [];
//     for(let employee in employees) {
//         //const employeeSingle = employee.name.split(",",2)
//         //const lastName = lastNames.push(employees[employee]);
//         lastNames.push(employees[employee].name.split(' ')[1]);
//         salaries.push(employees[employee].salary);
//     }
//     console.log(lastNames);
//     console.log(salaries);
// }

// employeesArray();

// function employeesArrayWithId() {
//     const lastNames = [];
//     const salaries = [];

//     for(let employeeId in employees) {
//         const employee = employees[employeeId];

//         lastNames.push(employee.name.split(' ')[1]);
//         salaries.push(employee.salary);
//     }
//     console.log(lastNames);
//     console.log(salaries);
// }

// employeesArrayWithId();

// const persons = {
//     john: 2000, 
//     amanda: 3000, 
//     thomas: 1500, 
//     james: 6000, 
//     claire: 3000
// };

// function salaries() {
//     let highestSalary = 0;
//     let lowestSalary = 999999999999;
//     let salarySum = 0;

//     for (let person in persons) {
//         const salary = persons[person];
//         salarySum += salary;
//         if(highestSalary < salary) {
//             highestSalary = salary;
//         } 
//         if(salary < lowestSalary) {
//             lowestSalary = salary;
//         }
    
//         console.log(salary);
//     }
//     console.log('salarySum', salarySum);
//     console.log('lowestSalary', lowestSalary);
//     console.log('highestSalary', highestSalary);
// }

// salaries();

// function salaryOptions() {
//     const salaries = Object.values(persons);
//     let sumSalaries = 0; 
//     let highestSalary = 0; 
//     let lowestSalary = 99999999999; 
//     salaries.map(salary => {
//         sumSalaries += salary;

//         if(salary > highestSalary) {
//             highestSalary = salary;
//         }

//         if(salary < lowestSalary) {
//             lowestSalary = salary;
//         }
//     }) 
//     console.log('sumSalaries', sumSalaries);
//     console.log('highestSalary', highestSalary);
//     console.log('lowestSalary', lowestSalary);
    
// }

// salaryOptions();

// function salaryOptionsObj() {
//     let sumSalaries = 0; 
//     let highestSalary = 0; 
//     let lowestSalary = 999999999999; 

//     for (let person in persons) {
//         const salary = persons[person];

//         sumSalaries += salary;
//         if(salary > highestSalary) {
//             highestSalary = salary;
//         }
//         if( salary < lowestSalary) {
//             lowestSalary = salary;
//         }
//     }
//     console.log('sumSalaries', sumSalaries);
//     console.log('highestSalary', highestSalary);
//     console.log('lowestSalary', lowestSalary);
// }

// salaryOptionsObj();

// const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];

// function uniqueTagsObj() {
//     const uniqueTags = {};
//     tags.map((tag) => {
//         if(!uniqueTags[tag]) {
//             uniqueTags[tag] = { apperances: 1 };
//         } else {
//             uniqueTags[tag].apperances++
//         }
//     })

//     console.log(uniqueTags);
// }

// uniqueTagsObj();


// const employees = [
//     { name: 'Amanda Doe', salary: 3000 },
//     { name: 'John Doe', salary: 4000 },
//     { name: 'Claire Downson', salary: 2000 },
//     { name: 'Freddie Clarkson', salary: 6000 },
//     { name: 'Thomas Delaney', salary: 8200 }
// ];


// function filterEmployees(employees, min, max) {
//     const employeeArray = [];
//     employees.map((employee) => {
//         if(employee.salary >= min && employee.salary <= max) {
//             employeeArray.push(employee.name);
//         }
//     });
//     console.log(employeeArray);
// }

// filterEmployees(employees, 2000, 6000);

// const obj = {
//     firstName: 'John',
//     lastName: 'Doe'
//   }


// function displayAllProperties(obj) {
//     for(const objectId in obj) {
//         const param = obj[objectId]; // jak zrobię obj[objectId] wyświetli się właściwość przypisana do tego klucza (tutaj zapisze się w stałej param)
//         console.log(objectId + ': ' + param);
//     }
// }

// displayAllProperties(obj);

// function forEach(array, cb) {
//     array.map((element) => {
//         cb(element);
//     })
// }

// forEach(['John', 'Amanda', 'Thomas'], function(item) { console.log(item); });

// function formatName(name) {
//     const nameArray = name.split(' ');
//     const singleNameArray = [];
//     nameArray.map(name => {
//         singleNameArray.push(name.charAt(0).toUpperCase()+name.substr(1).toLowerCase());
//     });

//     console.log(singleNameArray.join(' '));
// }

// formatName('aMAnDa dOE');

// function getEvensInRange(min, max) {
//     for(let i = min; i <= max; i++ ) {
//         if(i % 2 == 0) {
//             console.log(i);
//         } 
//     }
// }

// getEvensInRange(10, 90);

// function filter(array, cb) {
//     const newArray = [];
//     array.map((element) => {
//         if(cb(element)) {
//             newArray.push(element);
//         }
//     });
//     console.log(newArray);
//     return newArray;
// };

// filter([5,6,7], function(item) { return item%2 === 0});

