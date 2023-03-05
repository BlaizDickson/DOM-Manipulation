const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// create a new paragraph element
const newPara = document.createElement("p");

// set some content for the paragraph
newPara.textContent = "Hey I'm red!";

// get a reference to the div that was created previously
const parentDiv = document.querySelector("#container");

// insert the new paragraph before the existing content in the div
parentDiv.appendChild(newPara);
// create a new h3 element
const newHeader = document.createElement("h3");

// set some content for the header
newHeader.textContent = "I'm a blue h3!";

// add the header to the div
container.appendChild(newHeader);
newPara.style.color = "red";
newHeader.style.color = "blue"
const newDiv2 = document.createElement("div");

		// set some properties for the div
newDiv2.classList.add('newDiv2');
//newDiv2.textContent = "This is another new div!";

		// append the new div to the parent element
container.appendChild(newDiv2);
newDiv2.style.backgroundColor = "pink";
newDiv2.style.border = "1px solid black";

// create an h1 element and set its text content
const header = document.createElement('h1');
header.textContent = "I'm in a div";

// append the h1 element to the div element
newDiv2.appendChild(header);

// add the div element to the document
document.body.appendChild(newDiv2);

const lastDiv = document.querySelector('div:last-of-type');
// create a new paragraph element
const newPara1 = document.createElement('p');

// set some properties of the paragraph element
newPara1.textContent = 'ME TOO!';

// add the paragraph element to the last div element
newDiv2.appendChild(newPara1);

