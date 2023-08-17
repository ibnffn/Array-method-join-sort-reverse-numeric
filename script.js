// Array Method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
// result
// Banana,Orange,Apple,Mango

// Array Method + Join
const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit.join("-"));
// result
// Banana-Orange-Apple-Mango

// Array Sort - sort a-z
const fruitss = ["Banana", "Lemon", "Grape", "Apple"];
const vege = ["Cucubmber", "Tomato"];
fruitss.sort();
console.log(fruitss);

// Array Reverse
const fruitsss = ["Banana", "Orange", "Apple", "Mango"];
fruitsss.reverse();
console.log(fruitsss);
//result : ["Mango","Apple","Orange","Banana"]

// Array Reverse + sort z-a
const fruitssss = ["Banana", "Orange", "Apple", "Mango"];
fruitssss.sort();
fruitssss.reverse();
console.log(fruitssss);
//result : ["Orange" , "Mango", "Banana" ,"Apple"]

// Sort Numeric - small -> big
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);
//result: [1,5,10,25,40,100]
