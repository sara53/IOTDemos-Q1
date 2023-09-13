/** Agenda
 * -------------------------------
 * == var -- let -- const
 * == destructuring
 * == Spread Operator and Rest params
 * == default Values
 * == Arrow Functions
 * == Array API
 * ------------------------------------
 * == oop in es6
 */
/**===== Var
 * == reassign
 * == Redeclare
 * == Hoisting
 * == added to window Object
 * == function scope
/**===== Let
 * == reassign
 * == can't Redeclare
 * ==can't be  Hoisting
 * == not added to window Object
 * == Block scope
 *
 * ===== */
/**===== Const
 * == can't reassign
 * == can't Redeclare
 * ==can't be  Hoisting
 * == not added to window Object
 * == Block scope
 *
 * ===== */

// let fname = "mona";
// // console.log(window.fname);

// function show() {
// 	let test = "alaa";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 	}
// 	console.log("i outside loop , ", i);
// }

// show();

// const PI = 3.14;

// PI = 2;

// const arr = [];

// arr.push(3); // error
// console.log(arr);

/***------------------ */

// // let arr =

// function getArr(w) {
// 	return [
// 		w,
// 		function () {
// 			console.log(w);
// 		},
// 		"mona",
// 		"Ahmed",
// 	];
// }

// let [x, y] =useState(0)
// y();
// let [, , z] = arr;
// // let x = arr[0];
// // let y = arr[1];

// console.log(z);
/**---------------- */
// let person = { fname: "ali", color: "red", age: 30 };
// // let x = person.fname;
// // let y = person.color;

// // let { fname: fname, color: color } = person;
// let { fname, color } = person;

// console.log(fname);
// console.log(color);

/***--------------------- */
// let arr1 = [10, "ali", "ahmed", "ola"];
// let arr2 = [...arr1];

// let arr = [10, 20, 1, 5, 40];
// console.log(Math.min(...arr));

// arr1.push(true);
// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

/** functions */

// function show(x, ...w) {
// 	console.log(w);
// 	// console.log(arguments);
// 	console.log("Hello");
// }

// show("mona", "ali", 4, "alaa");

// function add(x = 0, y = 0) {
// 	console.log(x + y);
// }

// add(2, 6);

/** Arrow Functions
 * ------------------------
 *
 */

// function statement
// function add(x, y) {
// 	console.log(x + y);
// }

// // function expression
// let result = function (x, y) {
// 	console.log(x + y);
// };

// arrow function
// let show = (x, y) => "Hello from iti";

// let output = show(4, 5);
// console.log(output);

// this --> window
//
// window
// person
// var fname = "mona";
// let person = {
// 	fname: "ali",
// 	display: function () {
// 		setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();
/**------------Array API
 *  == find
 *  == findIndex
 *  == map
 *  == filter
 *  == some
 *  == every
 *  == foreach
 *
 * --------------- */

// let products = [
// 	{
// 		id: 1,
// 		productName: "Book",
// 		price: 300,
// 		cat: "school",
// 	},
// 	{
// 		id: 2,
// 		productName: "Watch",
// 		price: 300,
// 		cat: "elect",
// 	},
// 	{
// 		id: 3,
// 		productName: "Pen",
// 		price: 300,
// 		cat: "school",
// 	},
// 	{
// 		id: 4,
// 		productName: "window",
// 		price: 300,
// 		cat: "furniture",
// 	},
// ];

// var result = products.filter(function (item) {
// 	return item.id != 1;
// });

// console.log(result);
// let arr = [10, 2, 33, 50, 15];

// let result = arr.map((item) => {
// 	return { id: item };
// });

// console.log(result);
// var result = arr.find((item) => {
// 	console.log("item", item);
// 	return undefined;
// });
// console.log(result);

// function findElement(x, y, z) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log("z : ", z);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) return arr[i];
// 	}
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("----------------");
// }

// let arr = ["sd", "os", "iot"];

// arr.forEach((item, index) => {
// 	console.log(item, index);
// });
// var result = arr.some(function (item) {
// 	return item.startsWith("s");
// });

// console.log(result);
/**------- ------- */

// class Product {
// 	#id;
// 	constructor(id = "", productNam = "", price = "") {
// 		this.#id = id;
// 		this.productName = productNam;
// 		this.price = price;
// 	}

// 	discount() {
// 		return this.price * 0.2;
// 	}

// 	set setId(value) {
// 		this.#id = value;
// 	}

// 	get getId() {
// 		return this.#id;
// 	}
// }

// var product1 = new Product(1, "book", 400);

// product1.setId = "new id";
// product1.setId("new id");
// console.log(product1.getId());

// console.log("-----------");
// var product2 = new Product(2, "watch", 200);

// console.log(product1.discount());
// console.log(product2.discount());

// class Person {
// 	constructor(fname, lname, age) {
// 		if (this.constructor == Person) {
// 			throw "Can't take object from abstract class";
// 		}

// 		this.fname = fname;
// 		this.age = age;
// 		this.lname = lname;
// 	}

// 	display() {
// 		throw "Method not implemeted";
// 	}
// }

// class User extends Person {
// 	constructor(fname, lname, age, password) {
// 		super(fname, lname, age);
// 		this.password = password;
// 	}
// 	display() {
// 		console.log(this.fname);
// 	}
// 	showPassword() {
// 		console.log("This is a show password");
// 	}
// }

// var myUser = new User("mona", "ali", 20, "monaALI");
// myUser.display();
// // myUser.showPassword();
