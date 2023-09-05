/** */

// var firstName = "ali"; // string
// var fname = "mona"; // redeclare
// console.log(fname);
// var num = 10.22558; // integer

// var flag = false; // boolean

// var test;
// test = "ali";
// console.log(typeof test);

/** Primitave datatype VS Refernce Datatype
 * ---------------------------------
 *  == string
 * == number
 * == boolean
 * == undefined
 * ==null
 * ----------------------
 *== Object
 *
 */

// var student = null;
// student = { fname: "lfo" };

// console.log(typeof student);
// var fname = 10;
// console.log(typeof fname); // number
// var fname = String(10);
// console.log(fname);

// console.log(typeof fname);

// NaN --> Not a number
// var num = 10;
// var num = Number("mona");

// console.log(num);
// console.log(typeof num);

/** Falsy Values
 *
 * false -- 0 -- ""-- null--undefined--NaN
 *
 */
// var flag = false;
// var flag = Boolean(" ");
// console.log(flag);
/**--------------------- */
// var fname; // Hoisting
// console.log(fname); // undefined-- error
// fname = "ali";
// console.log(fname);

// var fname;
// console.log(fname);
// fname = "alaa";
// console.log(fname);
// var fname = "ali";
// console.log(fname);
// console.log(fname);

// var test;
// console.log(test);
// test = "Ahmed";
// console.log(test);
/**----------------------
 * 1-Arthimatic (+,-,*,/)
 *
 * (+) ==> number + number --> Add
 *     ==> string + string --> concat
 * coercion ==> convert automatic fro datatype to anther datatype
 * ------------ */

// var num1 = 10; // number  --> string
// var num2 = "mona"; // string

// console.log(num1 - num2);
/**------------
 *[== ] --> Values Only
 * [===] --> (valued & datatype)
 *
 * ---------- */

// var num1 = undefined; // 0
// var num2 = ""; // 0

// console.log(num1 == num2);
/** And
 * true && false --> false
 * false && true --> false
 * true && false --> false
 * true && true --> true
 *
 *
 * Or
 * true || false --> true
 * false || true --> true
 * true || false --> true
 * false || false --> false
 * Not
 *
 * true -> false
 * false -> true
 */
// "mona" && "ali"; --> "ali"
//  true && true

// 0 && "alaa"
// "mona" || "ali";
// 0 || "ahmed";
/**--------------------- */
// for (var i = 0; i < 3; i++) {
// 	console.log(i);
// }
// var fname = prompt("Enter Your Name");
// console.log(fname);

// var num1 = Number(prompt("Enter Num 1", 300));
// var num2 = Number(prompt("Enter Num 2", 100));
// document.writeln(num1 + num2);
for (var i = 1; i < 7; i++) {
	document.writeln("<h" + i + " class='jsClass'>welcome from iti</h" + i + ">");
}
/** ternary Operator */
// color = "blue";

// color == "red"
// 	? document.writeln("Your fav color is : red")
// 	: console.log("You don't have any fav color");

// alert("you deleted this items");

// var result = confirm("Are you sure you want to delete this item");

// result
// 	? document.writeln("You deleted this item")
// 	: document.writeln("Operation cancelled");

// document.writeln("Hello");
// document.writeln("ITI");

document.writeln("<h1 class='myClass'>test</h1>");
