/**
 * == Object New Features
 * == Object.values
 * == Object.keys
 * == Object.entries
 * == Object.assign (search)
 * == Async code execution in memory
 * == Promises
 * == async -- await [then -- catch]
 * == fetch
 * == Modules
 */

// var fname = "Ali";
// let lname = "ahmed";
// let myKey = "age";

// let person = {
// 	fname, // fname:fname
// 	lname,
// 	[myKey]: 35,
// 	display() {
// 		console.log(this.fname);
// 	},
// };

// console.log(person);

// person.display();

// let product = {
// 	id: 1,
// 	productName: "Book",
// 	price: 300,
// };
// // var result = Object.keys(product);
// var result = Object.values(product);
// var result = Object.entries(product);
// var result = Object.assign(product); // search

// console.log(result);
/** ----------------------- */

// setTimeout(() => {
// 	console.log("First");
// }, 0);
// console.log("Second");
// function first() {
// 	console.log("First");
// 	second();
// 	console.log("End");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("Second");
// 	}, 2000);
// 	console.log("After set time out");
// }

// first();
/**------------  ----------- */

// var products;

// setTimeout(() => {
// 	products = [100, 200, 400];
// 	setTimeout(() => {
// 		var product = {
// 			id: products[0],
// 			productName: "Book",
// 			price: 300,
// 		};

// 		setTimeout(() => {
// 			var price = product.price;
// 			console.log(price);
// 		}, 500);
// 	}, 1000);
// }, 2000);
/**---------- */

// var myPromise = new Promise(function (x, y) {
// 	//x("mona");
// 	y("Error on calling p");
// });
// myPromise
// 	.then(function (data) {
// 		console.log(data);
// 		console.log("Hello from then");
// 	})
// 	.catch(function (myError) {
// 		console.log(myError);
// 		console.log("Hello from catach");
// 	});
/**
 * Pending
 * fulfilled
 * rejected
 *
 */

// function getProductsList() {
// 	var myPromise = new Promise(function (x, y) {
// 		var products;
// 		setTimeout(() => {
// 			products = [100, 200, 400];
// 			if (products) {
// 				x(products);
// 			} else {
// 				y("Error on getting products list");
// 			}
// 		}, 2000);
// 	});

// 	return myPromise;
// }

// function getProduct(productId) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(() => {
// 			var product = {
// 				id: productId,
// 				productName: "book",
// 				price: 300,
// 			};
// 			product ? resolve(product) : reject("Error on getting product data");
// 		}, 1000);
// 	});
// }

// function getPrice(product) {
// 	return new Promise((resolve, reject) => {
// 		var price = product.price;
// 		price ? resolve(price) : reject("Error on getting price");
// 	});
// }

// async function execute() {
// 	try {
// 		let productsList = await getProductsList();
// 		let product = await getProduct(productsList[1]);
// 		let price = await getPrice(product);
// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();
// getProductsList()
// 	.then(function (productsList) {
// 		return getProduct(productsList[0]);
// 	})
// 	.then(function (product) {
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch(function (myError) {
// 		console.log(myError);
// 	});

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function execute() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// execute();
/** ---------- [] ------- */
// import show, { add, square } from "./main.js";

// console.log(add(4, 6));
// console.log("--------");
// console.log(square());

// test();

// import * as all from "./main.js";
// console.log(all.add(2, 3));
// console.log(all.square(2, 3));

// console.log(all.fname);

// console.log(all.default());

// let person1 = { fname: "ali", age: 30 };

// let person2 = { color: "red", fname: "mona" };

// var result = Object.assign(person2, person1);
// console.log("Person1 ", person1);
// console.log("Person2 ", person2);

// function showDetails(options = {}) {
// 	let defaultValues = {
// 		fname: "default fname",
// 		lname: "default lname",
// 		age: "default age",
// 	};
// 	Object.assign(defaultValues, options);
// 	console.log(
// 		`fname= ${defaultValues.fname} , lname=${defaultValues.lname} , age=${defaultValues.age}`
// 	);
// }

// showDetails();

// let person = {
// 	fname: "Ali",
// 	lname: "ahmed",
// };

// for (let i of person) {
// 	console.log(person[i]);
// }
// let arr = [10, 20, 40];

// for (let value of arr) {
// 	console.log(value);
// }
// for (let test in arr) {
// 	console.log(arr[test]);
// }
