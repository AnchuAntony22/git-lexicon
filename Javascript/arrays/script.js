const countries = [34, "United States", "Canada", 89]
console.log(countries.length);

countries[0] = "UK";
countries.push("Belgium");
console.log(countries.length);
console.log(countries);

console.log(countries[countries.length - 1]);
let country = countries.shift();

console.log(countries);
console.log(country);

//1. Make (initialize) an array with the seven days of the week. Write to 
//the console using the index notation so that the output becomes 
//“Thursday”. 

const sevenDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(sevenDays[4]);

//2. Initialize an array with five posts and change the value of the 
//third post

const posts = ["red", "green", "blue", "yellow", "white"];
console.log("orginal array:- "+ posts);

posts[2] = "orange";
console.log("updated array:- "+ posts);

//3.Initialize an array with four posts and write code that manages to 
//swap the values of the first and the second post. Anyway you 
//accomplish this is good.

const num = [1,2,3,4];
console.log("Number array "+num);

let temp = num[0];
num[0] = num[1];
num[1] = temp;

console.log("Number array swap "+ num);

//4.Initialize an array that has no posts and add three posts with the 
//push method. 

const hobbies = [];
hobbies.push("Walking", "Driving", "Cooking");
console.log("arry of hobbies " +hobbies);

//5.The shift and pop methods both return the value of the post 
//while removing it. If you were making a task manager application 
//with a list of tasks ordered in level of priority, what could be the 
//role of the shift and pop methods?

const taskManager = ["high", "medium", "low"];
let tasks = taskManager.shift();

console.log("priority: " + tasks);

let priority = taskManager.pop();
console.log("priority: " + priority);

// shift() is removes and returns the first element of an array like FIFO.
// pop() removes and returns the last element of an array like LIFO.