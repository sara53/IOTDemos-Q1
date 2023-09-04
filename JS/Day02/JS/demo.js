/**
 * Agenda
 * --------------
 *  Function
 * 		-- built in functions
 * 		-- user defined functions
 * 			-- function statement
 * 			-- function expression
 * 				[Ayonymous function]
 * 				-- call back functions
 *
 * == How are functions executes in memory?
 * -- String Object
 * -- Array
 * -- Math Object
 * -- Date (self study)
 */

// params

/*function 
	== built in function
	== user defined function
		-- function statement
	    -- function expression
 */

// function statement
// function add(x, y) {
// 	x = x || 0;
// 	y = y || 0;

// 	console.log(x + y);
// 	return true;
// }

// var result = add(2, 3);
// console.log(result);

// parseInt();

// console.log(add(3, 7));
// var result = add(5, 6);
// console.log(result);
// add([1, 2, 3], 3);

// add();

// add(3);
// add(4, 5);
// add(2, 4, 67);// 3 argumnets

// // arguments
// add(2, 4);
// console.log("-------------");
// add(5, 7);

// function expression
// var result = function (x, y) {
// 	x = x || 0;
// 	y = y || 0;
// 	return x + y;
// };

// var output = result(3, 4);
// console.log(output);

// show();
// // console.log(show);
// var show = function () {
// 	console.log("hello from show");
// };

// var fname = "mona";

// function mearn() {
// 	console.log("Welcome mearn track");
// }

// greet(function () {
// 	console.log("Hello iot track");
// });
// console.log("---------");

// greet(function () {
// 	console.log("Hello mearn track");
// });

// var iot = function (y) {
// 	console.log(y);
// 	console.log("Welcome iot track");
// };

// function greet(myFun) {
// 	myFun(function () {
// 		console.log("inner function");
// 	});
// 	console.log("Hello from iti");
// }

// greet(function (y) {
// 	console.log(y);
// 	y();
// 	console.log("Welcome iot track");
// });
/**------------- */

// function showDetails(myFunc) {
// 	myFunc(
// 		function () {
// 			console.log("CB  1");
// 		},
// 		function () {
// 			console.log("CB 2");
// 		}
// 	);
// }

// showDetails(function (x, y) {
// 	x();
// 	y();
// 	console.log("First");
// });
/**----------------------- */
// var test = "mona";
// function add(x, y) {
// 	var gtt = "ali";
// 	console.log(test);
// 	return x + y;
// }

// var result = add(4, 5);
// console.log(test);
// console.log(result);

// function sayHello(trackName) {
// 	console.log("welcome " + trackName);
// 	return "Success Action";
// }
// function greet() {
// 	sayHello("Dot net track");
// 	console.log("Welcome from iti");
// }

// var result = greet();

// console.log(result);

/**
 * length
 * -------------------
 * == charAt
 * == indexOf
 * == lastIndexOf
 * == concat
 * == startsWith
 * == endWith
 * == includes
 * == toUpperCase
 * == toLowerCase
 * == trim
 * == trimStart
 * == split
 *
 */
// var str = "hello from iti";
// var result = str.split("");

// console.log(result);
// console.log(`welcome
// 						iot track ${str} ${str}`);
// var result = str.lastIndexOf("h");
// var result = str.concat(",iot track");
// var result = str.toUpperCase();
// var result = str.trimEnd() + "IOT";
// console.log(result);
// console.log(str.length);
// for (var i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }
/**--------- Array
 * length -->
 * ---------------------
 * == push
 * == unshift
 * == pop
 * == shift
 * == reverse
 * == sort
 * == join
 * == concat
 *
 * ---------- */

// var arr = [10, 8, 3, 5];
// var result = arr.join(" == ");
// console.log(result);
// arr.sort(function () {});
// arr.reverse();

// arr.unshift("alaa");
// arr.unshift("pet");
// arr.push("alaa");
// arr.push([1, 2]);
// arr.push(true);

// console.log(arr);

// arr[0] = "mona"; // set
// arr[1] = "ali";
// arr[0] = "alaa"; // override

// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }
/**------------ */

// var fname = "alaa"; // reverse aala

// var result = fname.split("").reverse().join("");
// console.log(result);
/**-----------
 * PI
 *---------------
 * -- sqrt
 * -- max
 * -- min
 * -- pow
 * -- abs
 * -- sign
 * -- round
 * -- floor
 * -- ceil
 * -- random
 * - sin
 * cos
 * --------- */

// console.log(Math.PI);

// console.log(Math.sqrt(16));
// console.log(Math.pow(2, 3));
// console.log(Math.abs(-20));
// console.log(Math.max(20, 10, 5, 2, 3));
// console.log(Math.min(20, 10, 5, 2, 3));
// console.log(Math.round(5.5));
// console.log(Math.floor(5.1));
// console.log(Math.ceil(5.9));
// (1234.23568).toFixed(2);
// console.log(Math.sin((90 * Math.PI) / 180));
