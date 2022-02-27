// // variable initilisation
// a=10

// // typeof operator return integer type
// console.log(typeof a)
// console.log(a)

// // typeof operator return string type
// a="Hello Js"
// console.log(typeof a)
// console.log(a)

// // typeof operator return boolean type
// a=true
// console.log(typeof a)
// console.log(a)

// // typeof operator return object type
// a=null
// console.log(typeof a )
// console.log(a)

// Number
var num = 10;
var float = 3.4;
console.log(num);
console.log(float);

// Boolean
var t = true;
var f = false;
console.log(t);
console.log(f);

// String
var str = 'a';
console.log(typeof str);
str = "How you doin ?\nI'm fine how about you?";
console.log(str);

var str2 = 'Im dump and pathatic What do you think?';
console.log(str2)

// Output with variable and string using backtrick
var num = 100;
console.log(`half of ${num} is ${num/2}`);

// Var has some problem
//      > redeclaration allowed
// Overcome karne ke liye

// let keyword is used

let l = 100;
console.log(l);

// let l = 200;  //redeclration not allowed will give error "Identifier 'l' has already been declared"
console.log(l);

l = 300; // reinitialisation allowed


// loops in Js
var num =12;

for(var i=0; i<num;i++)
{
    if(i%2==0){
        console.log("Num is even");
    }
}


// const keyword 
// redeclaration and re initialisation both not allowed

const j=10;
console.log(j);

//const j=20; // redeclration not allowed error "Identifier 'j' has already been declared"
//j=40; // will trough error "Assignment to constant variable.at index.js:80:2"

//second problem with var keyword
// var keyword is function scoped in case of function else it is global scobe
//let keyword is block scoped

for (let i=0;i<6; i++)
{
    console.log(i);
}

// console.log(i)  -->will give error because let keyword use kia hai or ye block scoped hai.

for (var i=0;i<6; i++)
{
    console.log(i);
}

console.log(i)  //will print value of i kyuki var key globaly banata hai var

