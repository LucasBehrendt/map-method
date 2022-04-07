  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);


// Using map()
const multByTwo = function(num) {
  return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);


// Simplified w/ map()
const simplified = nums.map(function(num) {return num * 2});
console.log(simplified);


// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(arrow);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

// const studentsWithIds = students.map(student => [student.name, student.id]);
// const studentsWithIds = students.map(student => {delete student.name});
// console.log(studentsWithIds);

// let finish = [];
// for (student of students) {
//   delete student["profession"];
//   delete student.skill;
//   finish.push(student);
// }
// console.log(finish)

// const mapping = function(student) {
//   delete student.profession;
//   delete student.skill;
//   return student
// }

// const mappingResult = students.map(mapping);
// console.log(mappingResult);

const simple = students.map(function(student) {
  delete student.profession; delete student.skill; return student;
})

console.log(simple);

const simpleArrow = students.map(student => delete student.skill);

console.log(simpleArrow);
