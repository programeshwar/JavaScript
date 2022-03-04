// Array-> is a collection of elements

let cars = ['BMW','AUDI','MG', 1,2,3, true];
// in Js we can store diff values of diff types in an array

console.log(cars);

//accessing the element of an array
console.log(cars[0]);
console.log(cars[3]);

//replacing element in array
cars[3] = 'Mahindra';
console.log(cars[3]);

//adding elements in an array
cars[7]='Honda';
console.log(cars); //will add Honda to the array

//methods of and array

// 1) this method removes the element from the last of array

cars.pop();
console.log("array after poping the element"+cars); // honda will removed

// 2) method -> it pushes a new element at the end of array
cars.push("TATA");
console.log("array after pushhing TATA"+cars);

// 3) unshift method-> this method adds element at the starting of array of array
cars.unshift("JLR");
cars.unshift("Alpha");
console.log(cars);

// 4) shift method -> removes element from the 0th index of array
cars.shift();
cars.shift();
console.log(cars)

console.log(cars.length)


// 2D array

let array2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(array2d);
console.log(array2d);

console.log(array2d[1][2])