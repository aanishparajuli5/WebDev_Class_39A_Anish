// const students = [
//   { name: "Ram",  marks: 90, age: 20 },
//   { name: "Sita", marks: 85, age: 21 },
//   { name: "Hari", marks: 55, age: 19 },
//   { name: "Gita", marks: 65, age: 22 }
// ];
// const toppers=students.filter
// console.log(toppers)

// const everyIsTopper=students.every(
//   student=>student.marks>70
// )
// console.log(everyIsTopper)

// const someIsTopper=students.some(
//   student=>student.marks>70
// )
// console.log(someIsTopper)

// const total=studenys.reduce(
//   (total,student)=> total+student.marks, 0
// )
// console.log(total)


// const numbers=[0,1,2,3,4,5]
// numbers.forEach(number => console.log(number));





// wap using for loop,slice,and toUpperCase




// const names = ['ram', 'sita', 'hari'];

// for (let i = 0; i < names.length; i++) {
//     let newName = "Dr. " + names[i][0].toUpperCase() + names[i].slice(1);

//     console.log(newName);
//     console.log(`Hello ${newName}, Welcome to the clinic`);
// }




// function countDown(n) {
//   console.log(n);
//   return countDown(n - 1);
// }
// countDown(5);



function countDown(n) {
  console.log(n);
  if (n > 0) {
    return countDown(n - 1);
  }
}
countDown(5);