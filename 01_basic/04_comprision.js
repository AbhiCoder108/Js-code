//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2 < 1);
//console.log(2 == 1);
//console.log( 2 != 1);


//console.log("2" > 1);
//console.log("02" > 1);

console.log( null > 0);
console.log( null == 0);
console.log( null >= 0);

// The Reason is that an equality check == and comparision > < > = <= work differently.
// comprision convert null to a number, treating it as 0.
//Thats why (3) null >= 0 is true and (1) null > 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


//==

console.log("2"=== 2);// its check data type and converstion  its also check value or dataType strictly 