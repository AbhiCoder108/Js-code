const  name = "ansh"
const repoCount = 50

//console.log(name + repoCount + " value"); out dated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const myName = new String('anshrajput')

console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.split());
console.log(myName.charAt(6));
console.log(myName.indexOf('r'));

const newString = myName.substring(0,5)
console.log(newString);

const anotherString = myName.slice(-6 , 2)
console.log(anotherString);

const newname =  "   ansh        "
console.log(newname);
console.log(newname.trim());


const url = "https://ansh.com/anshprofile%20Rajput"

console.log(url.replace('%20', '-'));
console.log(url.includes('singh'));
console.log(myName.split('-'));

