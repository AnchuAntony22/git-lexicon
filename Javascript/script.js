console.log("Hi welcome!");

let textToWrite = "The script has been loaded and run";
console.log(textToWrite);

textToWrite = "Now, the variale has a new value";
console.log(textToWrite);

const moreTextToWrite = "This text cannot change";
//moreTextToWrite = "This will cause an error";
console.log(moreTextToWrite);

const logsToConsole = (a) => { console.log(a); }

logsToConsole("test the function");
const changeDom = () => {
    let target = document.getElementById("target");
    let newElement = document.createElement("p");
    target.appendChild(newElement);
}
changeDom();
//1. Write a function that takes no parameters and logs the text 
//“Bernadette had a boat” to the console. 

const noPara = () => {console.log("Bernadette had a boat");}
noPara();

//2. Write a function that takes one parameter (vehicle) and logs the 
//text “Bernadette had a [boat]”, where [boat] should be replaced 
//with the parameter vehicle. 

const onepara = (vehicle) => {
     console.log("Bernadette had a " + vehicle);
   
  }
  
onepara("boat");


//3. Write a function that takes two parameters (balance, cost), 
//calculates the new balance by subtracting cost from balance and 
//logs the result to the console in the form of a message like this 
//(change [1300] to your calculated difference) – “Your new balance 
//is [1300]kr”

const calculateBalance = (balance, cost) => {
    let newBalance = balance - cost;
    console.log("Your new balance is " + newBalance + "kr");
}

calculateBalance(1500, 200);

//4. Write a function that takes one parameter (radius) and returns the 
//area of a circle. Use the formula radius * radius * π. In JavaScript, 
//Math.PI gets you the value of π

const calculatedArea = (radius) =>{
    return radius*radius* Math.PI;
}

console.log(calculatedArea(5));

//5. Write a function that takes three parameters (x, y, z) and returns 
//the sum of the three parameters. Call the method three times. 
//The first time, use three numbers as arguments. The second time, 
//use two numbers and a text as arguments. The third time, use a 
//text and two numbers as arguments. What difference do you 
//notice between the results returned? 

const threePara = (x, y, z) => {
    return x + y + z;
}

console.log("first time " + threePara(1, 2, 3));
console.log("second time " + threePara(2, 3, "Hi"));
console.log("third time " + threePara("Hi", 6, 7));

//What difference do you notice between the results returned? 
// The first time the results get sum of the 3 numbers returned
// The second time the results get sum of the 2 numbers returned and the text is concatenated
// The third time the results get all the arguments are concatenated

//try to display the html page

const disHtml = document.getElementById("target");
disHtml.innerHTML += "First time: " + threePara(1, 2, 3) + "<br>";
disHtml.innerHTML += "Second time: " + threePara(2, 3, "Hi") + "<br>";
disHtml.innerHTML += "Third time: " + threePara("Hi", 6, 7) + "<br>";