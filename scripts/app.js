const studentName = 'May Thingyan Aung';
const studentNumber = '1214954';
const result = `${studentName} - ${studentNumber}`;

console.log(result);

const headingPrimaryContent = document.querySelector('h1');
console.log(headingPrimaryContent);

headingPrimaryContent.innerHTML = 'May Thingyan Aung - 1214954';

headingPrimaryContent.classList.add('headingPrimary');