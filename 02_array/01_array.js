// Arrays 

const myArr = [ 0,1,2,3,4,5]

const myHeros = ["shaktiman" , "naagraj"]

const myArr2 = [1,2,3,4,5,6]

// console.log(myArr[1]);


// Array methods 

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);



// Notes -- Slice , Splice 

// console.log("A" , myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B", myArr);





// const myn2 = myArr.splice(1, 3)
// console.log("c", myArr);
// console.log(myn2);


//Arrays 2 basic ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


 const marvel_heros = ["Thor", "Ironaman", "spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// // console.log(marvel_heros);
// // console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc_heros)
// // console.log(allheros);

const all_heros = [...marvel_heros,...dc_heros]
// console.log(all_heros);


const newArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]


const real_new_array = newArr.flat(Infinity)
console.log(real_new_array);


console.log(Array.isArray("Ansh"));
console.log(Array.from("Ansh"));
console.log(Array.from({name:"Ansh"})); // intresting 

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3));
