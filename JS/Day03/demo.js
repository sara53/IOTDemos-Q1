/**
 * == Object
 * == DOM --- Attribute
 *
 * -----------------------------
 * Properties: key :value
 * ------------------------------
 * Dot Notation
 * Subscript Notation
 */

//

// var person = {
// 	fname: "ali",
// 	age: 30,
// 	show: true,
// 	colors: ["red", "green", "blue"],
// 	address: {
// 		city: "benha",
// 		street: "saad ",
// 		code: "1234",
// 	}, // method
// 	display: function () {
// 		console.log("Welcome from display");
// 		return "ITI";
// 	},
// };

// delete person.age;
// delete person.fname;
// console.log(person);

// var result = person.display();

// console.log(result);
// var city = person.address.city;
// var city = person["address"].city;
// var city = person["address"]["city"];
// console.log(city);
// var city = person.address["city"];
// console.log(city);

// person["gender"] = "male";

// console.log(person["age"]); // get , subscript notation
// console.log(person); // dot notation

// person.age = 40; // set // override

// person.gender = "male"; // add

// console.log(person.fname); //
// console.log(person.show);

// var fname = "welcome from iti";

// console.log(fname.length); // ;

// var result = fname.charAt(0); //
// console.log(result);

// var element = document.getElementById("h1 ");

// var div = document.getElementById("parent");

// var element = document.querySelector("p");
// console.log(element);
// for (var i = 0; i < elements.length; i++) {
// 	console.log(elements[i]);
// }
// function show() {
// 	console.log(elements[0].value); // get
// 	elements[0].value = "new Value"; // set
// 	for (var i = 0; i < elements.length; i++) {
// 		if (elements[i].checked) console.log(elements[i].value);
// 	}
// }
// Dom
/***----------
 * Events
 * -------------------
 * 1- add attribute on the element
 *----- How to select elements from dom ------
  1- getElementById --> return element
  2- querySelector --> return element
  3- getElementsByClassName --> return collection
  4- getElementsByTagName --> return collection
  5- getElementsByName --> return collection
  6- querySelectorAll --> return collection
  --------------------- Props  --------------------------
  1- document.body
  2- document.images
  2- document.forms
  3- firstChild
  4- firstElementChild
  5-lastChild
  6-lastElementChild
  6-children
  6-childNodes
  -------------- ChangeContent ---------------------
  1-innerText
  2-innerHTML
  3-textContent(search)
  -------------- ChangeStyle ---------------------
	1- style object
	2- className
	3-classList
		-- add
		--remove
		-- toggle
	4- setAttribute
  -------------- Attributes ---------------------

	1- getAttribute
	2- setAttribute
	2- hasAttribute
	2- removeAttribute
 * ---------- */

// console.log(document.links);

// var parent = document.getElementById("parent");
// console.log(parent.children);
// console.log(parent.childNodes);
// console.log(parent.firstChild);

// function changeContent() {
// console.log(p.innerText);
//  p.innerText = "<h1>Hello iot Track</h1>"; // set
// 	p.innerHTML = "Hello iot Track"; // set
// }
// function execute() {
// 	console.log(input1.value);
// 	output.innerHTML = input1.value + 100;
// }
var p = document.getElementsByClassName("content1")[0];
var input1 = document.getElementById("input1");
var output = document.getElementById("output");
var img1 = document.getElementById("img1");
var link1 = document.getElementById("link1");
function execute() {
	if (link1.hasAttribute("href")) {
		link1.removeAttribute("href");
	} else {
		link1.setAttribute("href", "#twitter");
	}
	// console.log(link1.hasAttribute("href"));
	// img1.setAttribute("alt", "new laptop");
	// img1.setAttribute("src", "./imgs/2.jpg");
	// img1.setAttribute("class", "new Class");
	// var result = img1.getAttribute("src");
	// console.log(result);
	// p.style.backgroundColor = "orange";
	// p.style.color = "#fff";
	// p.style.padding = "50px";
	// p.style.display = "none";
	// console.log(p.className);// get
	// p.className += " jsClass";
	// console.log(p.classList);
	// p.classList.add("jsClass");
	// p.classList.remove("myP");
	// p.classList.toggle("jsClass");
	// console.log(p.classList);
}
