// let newElement = document.createElement("div");
// let target = document.getElementsById("site-title");

// newElement.setAttribute("id","title");
// newElement.setAttribute("class","section");

// let newHeading = document.createElement("h2");
// let headingText = document.creaateTextNode("This is a site");
// newHeading.appendChild(headingText);
// newElement.appendChild(newHeading);

// target.appendChild(newElement);

// let newGreeting = document.getElementById("site-welcome");
// newGreeting.innerText = "Bienvenue";

//document.body.appendChild(newElement);

//1. Make an ordered list with three list items and with text in each list 
//item in JavaScript and insert it in an HTML page. 

let orderedList = document.createElement('ol');
let listItem1 = document.createElement('li');
listItem1.textContent = 'First item';

let listItem2 = document.createElement('li');
listItem2.textContent = 'Second item';

let listItem3 = document.createElement('li');
listItem3.textContent = 'Third item';

orderedList.appendChild(listItem1);
orderedList.appendChild(listItem2);
orderedList.appendChild(listItem3);

let listContainer = document.getElementById('list-container');
listContainer.appendChild(orderedList);

//2.Make a div element containing an h2 element and a p element. 
//The h2 and p element should contain text. Insert the div element 
//in an HTML page. 

let divElement = document.createElement('div');

let headingElement = document.createElement('h2');
headingElement.textContent = 'Heading';

let pElement = document.createElement('p');
pElement.textContent = 'This is a paragraph';

divElement.appendChild(headingElement);
divElement.appendChild(pElement);

let contant = document.getElementById('contant');
contant.appendChild(divElement);

//3. Make four div elements and insert them in an HTML page. 

let divElements = document.getElementById('divelements');

let div1 = document.createElement('div');
div1.textContent = 'First div';
divElements.appendChild(div1);

let div2 = document.createElement('div');
div2.textContent = 'Second div';
divElements.appendChild(div2);

let div3 = document.createElement('div');
div3.textContent = 'Third div';
divElements.appendChild(div3);

let div4 = document.createElement('div');
div4.textContent = 'Fourth div';
divElements.appendChild(div4);
