/**
 *Events
 --------------------------------
  1- Add attribute on element 
  2- attach function on the element -- js engine call your function
  3- addEventListerner
  ------------------------------
  -- call -- bind --apply
  -- Factory Pattern
  -- function constructor (native oop in js) // Pending

  */

// var myBtn = document.getElementById("btn");
// var p = document.getElementById("result");

// function show(e) {
// 	// console.log(e.target); // undefined
// 	console.log("Show");
// }
// function changeStyle(color) {
// 	p.style.backgroundColor = color;
// }

// myBtn.addEventListener("click", function () {
// 	p.style.backgroundColor = "red";
// });

// myBtn.addEventListener("click", function (e) {
// 	console.log(e.target); // event object
// 	p.innerHTML = "Hello IOT";
// });

// setTimeout(function () {
// 	console.log("settimeout called");
// 	myBtn.removeEventListener("click", function (e) {
// 		console.log(e.target);
// 		p.innerHTML = "Hello IOT";
// 	});
// }, 3000);
// myBtn.onclick = changeContent; // call back js

// myBtn.addEventListener("click", changeContent);
// myBtn.addEventListener("click", function () {
// 	changeStyle("red");
// });
// myBtn.onclick = changeStyle; // set .. override
// myBtn.onclick = changeContent; // set -- override

/**  */

// var person = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	onclick: function () {
// 		console.log(person.fname);
// 	},
// };

// person.onclick = function () {
// 	console.log(person.lname);
// }; // override
// console.log(person.onclick());

// function changeStyle(myObject) {
// 	console.log(myObject);
// 	console.log("Test");
// }

// changeStyle({ fname: "Ali", age: 30 }); // js Engine ,
/**---------------------- */

// function first() {
// 	console.log("First");
// }
// function second(e) {
// 	e.stopPropagation();
// 	console.log("Second");
// }
// function third(e) {
// 	e.stopPropagation();
// 	console.log("Third");
// }

/**--------- */
// var input1 = document.getElementById("input1");
// var errorMsg = document.getElementById("errorMsg");

// input1.addEventListener("focus", function (e) {
// 	input1.style.border = "3px solid blue";
// });
// input1.addEventListener("input", function (e) {
// 	if (input1.value.length >= 3) {
// 		input1.style.border = "3px solid green";
// 		errorMsg.style.display = "none";
// 	} else {
// 		input1.style.border = "3px solid red";
// 		errorMsg.style.display = "block";
// 	}
// });

// function login(e) {
// 	e.preventDefault();
// 	console.log("Login");
// }
/**------------------------------- */
// var person = {
// 	fname: "Ali",
// 	lname: "ahmed",
// 	display: function () {
// 		console.log(this.fname);
// 	},
// };

// var person2 = {
// 	fname: "mona",
// 	lname: "alaa",
// };

// var result = person.display.bind(person);
// result();
// result.call(":)");
// person.display(":) ", " :( ");
// person.display.call(null, "first"); // caller
// person.display.apply(null, ["first"]); // caller
// // person.display(); // call
/**---------- */

// var fname = "mona";

// function getName() {
// 	console.log(this.fname);
// }

// var person = {
// 	fname: "ahmed",
// 	display: function () {
// 		getName.call(this);
// 	},
// };

// person.display();

/**-------------------- */
// var p1 = { fname: "ali", lname: "ahmed" };
// var p2 = { fname: "mona", age: 30 };

// factory --> creation objects in js
// function person(fname, lname, age, address) {
// 	return {
// 		fname: fname || "",
// 		lname: lname || "",
// 		age: age || "",
// 		address: address || "",
// 		display: function () {
// 			console.log(this.fname);
// 		},
// 	};
// }

// var p1 = person("ali", "ahmed", 30, "alex");
// var p2 = person("mona", "kareem", 10, "cairo");
// var p3 = person();
// console.log("p1 ", p1);
// console.log("p2 ", p2);
// console.log("p3 ", p3);

/**----------- function constructor
 * -----------------New KeyWord -------------------
 * 1- create {}
 * 2- this ---> {}
 * 3- return {}
 * ------------ */

// function Product(productName, price, qunatity) {
// 	this.productName = productName || "";
// 	this.price = price || "";
// 	this.display = function () {
// 		console.log(this.productName);
// 	};
// 	// this.qunatity = qunatity || "";
// }

// var product1 = new Product("Book", 300);
// var product2 = new Product("Watch", 2000);

// product1.display();
// product2.display();

// var person = {}; // convert

// var person = new Object(); // function contructor
