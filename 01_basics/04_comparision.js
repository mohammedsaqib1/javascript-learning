// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);  => true   // converts string to number and outputs true 
// console.log("02" > 1); => true   // converts string to number and outputs true      

console.log(null > 0);    // false (0>0)
console.log(null == 0);    // false (undefined == 0)    
console.log(null >= 0);    // true (0>=0)

/*
The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
The == operator performs type coercion, but null is only equal to undefined when using ==
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

/*
When undefined is compared to a number using the >, < , >= or <= comparison operators
undefined is converted to NaN (Not-a-Number) and gives false. 
Any comparison involving NaN and a number returns false (except NaN != NaN and NaN !== NaN which returns true)
*/

// === (strict checks => checks value as well as its dataype)

console.log("2" === 2);  // no type conversion while comparing
