const myFullName = 'Vrajesh' + ' ' + 'Patel';
const myStudentNumber = 1236658;

const result = `${myFullName} ${'-'} ${myStudentNumber}`
console.log(result);

const element = document.querySelector("h1");
element.innerHTML = result;

element.classList.add ("primaryHeading")

console.log(element);

