//DATES

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());

// let mydates = new Date(2023 , 0 , 23)
// let mydates = new Date(2023 , 0 , 23, 5, 3)
let mydates = new Date("2023-01-14")

// console.log(mydates.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(mydates.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() +1);
// console.log(newDate.getDay());
// console.log(newDate.getSeconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getUTCHours());


newDate.toLocaleString('default', {
    weekday: "long",
  
})
console.log(newDate);

