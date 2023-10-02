//# primitive Data Type

// 7 types : String ,number , Boolean, Null , undefined, symbol - symbol is used to make unique ,BigInt


const score = 100;
const scoreValue= 100.3;
const isLoggedIn = false;
const outSideTemp =null
let userEmail


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id=== anotherId)

const bigNumber = 356484321846543216843218n
// #Refrance Type /non permitive type 

//Array , objects, function

/*const heros = ["Shaktiman" , "naagRaj" , "doga"]

    let myObj ={
    name: "Ansh Rajput",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primative) , Heap (Non primative)

let myyoutube = "anshRajput.com"

let anothername = myyoutube
anothername = "coffeeorcode"

console.log(myyoutube);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@okaxis"
}

let userTwo = userOne

userTwo.email = "ansh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
