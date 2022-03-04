// 1. function
function calculator(str,a,b){
    if(str == 'add'){
        return function add(){
            console.log(a+b);
        }
    }
}

//2. Function Expression

let sayHi = function()
{
    console.log("I'm function expression");
}

sayHi();
// Name of variable is used to invoke the function
// sayHi is is a variable containg all the function as a variable 

console.log(" "+sayHi)  

/*will return as below 
function(){
    console.log("I'm function expression");
}*/

sayHi(); // using () after variable name will invoke the function.


//example of function expression


let returnedFun = calculator('add', 2, 3);

console.log("returned function is \n"+ returnedFun); //this will return as below

/*
returned function is 
calculator('add', 2, 3)
*/

returnedFun(); // this will return 5 the sum of two and three