// var parent = document.getElementById("result");

// var p = document.createElement("p");
// var span = document.createElement("span");
// var text = document.createTextNode("Hello iot track");
// span.innerHTML = "Hello span";
// p.appendChild(text); //
// // span.append("Hello span"); // string
// // span.append("Hello span"); // string
// // p.append(text);
// console.log(p);
// console.log(span);
// // parent.before(p);
// parent.after(p);

// var result = document.body.append(p, span);
// console.log(result);
// var result = document.body.appendChild(p);
// console.log(result);
// function addNewElement() {
// 	console.log("Test");
// 	p.innerHTML = "Hello IOT Track";

// 	console.log(p);

// 	// parent.appendChild(p);
// }

// function first() {
// 	var p = document.createElement("p");
// 	p.setAttribute("class", "jsClass");
// 	p.setAttribute("id", "pFromJs");
// 	console.log(p);
// 	p.innerHTML = "Hello IOT Track";

// 	document.body.appendChild(p);
// }

/**----------- BOM
 * == Window
 * == Screen // self study
 * == history
 * == location
 * == navigator
 *  --------- */

// var person = {
// 	fname: "ahmed",
// 	display: function () {
// 		console.log("Hello display");
// 	},
// };

// display();
// alert("Hello");
// console.log(window.alert("Test Alert"));
/**---------- Window ------------------- */
// var myWin;
// function openNewTab() {
// 	myWin = window.open("./about.html", "", "width=200,height=200");
// }
// function closeTab() {
// 	myWin.close();
// }
// function moveToTab() {
// 	myWin.moveTo(400, 400);
// }
// function moveByTab() {
// 	myWin.moveBy(-100, -100);
// }
// function resizeToTab() {
// 	myWin.resizeTo(400, 400);
// }
// function resizeByTab() {
// 	myWin.resizeBy(100, 100);
// }

// window.setTimeout()
// setTimeout(function () {
// 	window.open("./about.html");
// }, 2000);

// var i = 0;

// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// setTimeout(function () {
// 	clearInterval(myInterval);
// }, 5000);

// var p = document.getElementById("result");
// function downloadLink() {
// 	p.style.display = "block";
// 	setTimeout(function () {
// 		p.innerHTML = '<a href="#google">Link1</a>';
// 	}, 3000);
// }
// console.log("------------");
// function execute() {
// 	console.log(history);
// 	// console.log(location);
// 	// location.reload();
// 	// location.assign("https://www.google.com.eg/");
// 	// location.replace("https://www.google.com.eg/");
// 	// location.href = "https://www.google.com.eg/";
// 	// console.log(location.pathname); // get
// 	// location.pathname = "/about.html";
// }
/**-------------------------- */

// function successFun(x) {
// 	console.log(x.coords.longitude);
// 	console.log(x.coords.latitude);
// 	console.log("Allow");
// }

// function errorFun(myError) {
// 	console.log("error");
// }
// navigator.geolocation.getCurrentPosition(successFun, errorFun);

/** ---------------- search ------------- */
// var fname = "mona";

// function getName() {
// 	console.log(this.fname);
// }

// // getName();
// /// window
// var person = {
// 	fname: "alaa",
// 	display: function () {
// 		getName();
// 	},
// };

// person.display();
/** ---------------- search ------------- */

// /// window
// var person = {
// 	fname: "alaa",
// 	display: function () {
// 		var that = this;

// 		setTimeout(function () {
// 			// this --> window
// 			console.log(that.fname);
// 		}, 2000);
// 	},
// };

// person.display(); // person
