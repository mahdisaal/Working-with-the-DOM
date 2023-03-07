// Working with the Document Object Model

//Question 1
document.body.children[0].textContent= 'Learning about the Document Object Model';
//Question 2
document.getElementById("mainTitle").style.cssText = `
   display: flex;
   align-items: center;
   justify-content: center;
`;

//Question 3
document.getElementById("image1").title = 'JavaScript 1';

//Question 4
document.getElementById("image1").style.cssText = `
float: right;
`

//Question 5
var list = document.querySelector('#list')
var myNewListElement = document.createElement("li");

var newText = document.createTextNode("1.8.2 June 22, 2009");
myNewListElement.appendChild(newText);

list.insertBefore(myNewListElement,list.children[1]);

//Question 6
var x = document.createElement("li");
var y = document.createTextNode("1.8.2 June 22, 2009");
x.appendChild(y);
document.getElementById("list").appendChild(x);

//Question 7
var mainTitle = document.querySelector('#forth_item');
var myText = '1.6 November 2005';
document.querySelector('#forth_item').innerText = myText;

//Question 8
var length = document.getElementById('list').getElementsByTagName('li').length;
document.write ("length is " + length);




