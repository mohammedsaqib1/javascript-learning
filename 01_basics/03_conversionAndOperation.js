/****Conversion of values using Number()****/
let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33 
// "33abc" => NaN 
//  true => 1; false => 0
//  NaN => NaN             // because console.log(typeof NaN) => number
//  null => 0              //(dont use null because temp 0 deg.C is different in deg.F)
//  undefined => NaN

/****Conversion of values using Boolean()****/
let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// "" => false
// "hitesh" => true

/****Conversion of values using String()****/
let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);  // resulting type is always "string"

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);  // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  //power
// console.log(2/3);
// console.log(2%3);

// console.log("1" + 2);        // 12     
// console.log(1 + "2");        // 12
// console.log("1" + 2 + 2);    // 122
// console.log(1 + 2 + "2");    // 32

// console.log(+true);    // 1
// console.log(+"");      // 0

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
