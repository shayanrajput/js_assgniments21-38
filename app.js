// chaper 21 to 25

// Task 1
// var fistname = prompt("Enter your first name");
// var secondname = prompt("Enter your second name");
// var c = fistname + " " + secondname;
// alert(c)

// Task 2
// var a = prompt("Enter your length");
// var b = a.length;
// alert(b)

// Task 3
// var a = "pakistani"
// var b = a.indexOf("n");
// alert("the index of n in pakistani is " + b)

// Task 4
// var a = "hello world"
// var b = a.lastIndexOf("l");
// alert("last index of L in hello world " + b)

// Task 5
// var a = "pakistani"
// var b = a.charAt(3);
// alert("the 3 index of pakistani " + b)

// Task 6
// var a = "hyderabad"
// var b = a.replace("hyder", "islam")
// alert(b)

// Task 7
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var b = message.replace(/and/g, "&")
// alert(b);

// Task 8
// var a = "472"
// var b = Number(a)
// alert(typeof(a))
// alert(typeof(b))

// Task 9
// var a = "peanuts"
// var b = a.toUpperCase();
// alert(b)

// Task 10
// var a = "javasrcipt"
// var b = a.charAt(0)
// b = b.toUpperCase() + a.slice(1)
// alert(b)

// Task 11
// var a = "university of Karachi"
// for (var i = 0; i < a.length; i++) {
//     document.write(a[i] + "<br>")
// }

// Task 12
// var a = prompt("enter your value")
// var b = a.charAt(a.length -1)
// alert(b)

// Task 13
// var d = 0;
// var a = prompt("Enter Text");
// for (var i = 0; i < a.length; i++) {
//     var c = a.slice(i, i + 3)
//     if (c == "the" || c == "The") {
//         d = d + 1;
//     }
// }
// alert("The total the in Text is " + d)

// chapter 26 to 30

// task 1
// var integer = prompt("enter your positive integer");
// integer = Number(integer)
// console.log(Math.round(integer));
// console.log(Math.floor(integer));
// console.log(Math.ceil(integer));

// task 2
// var integer = prompt("enter your negative integer");
// integer = Number(integer)
// console.log(Math.round(integer));
// console.log(Math.floor(integer));
// console.log(Math.ceil(integer));

// task 3
// var integer = prompt("enter your number");
// integer = Number(integer)
// console.log(Math.abs(integer));

// task 4
// var a = Math.random() * 6;
// a = Math.ceil(a);
// alert("random dice number: " + a)

// task 5
// var a = Math.random() * 2;
// a = Math.ceil(a);
// if (a === 1) {
//     alert("head is winner ")
// } else {
//     alert("tail in winner")
// }

// task 6
// var a = Math.random() * 100;
// a = Math.ceil(a);
// alert("random number between 1 to 100 " + a)

// task 7
// var a = prompt("enter your number");
// a = Number(a);
// var b = Math.random() * 9;
// b = Math.ceil(b);
// if (a === b) {
//     alert("your winner " + b);
// } else {
//     alert("your lose " + b);
// }
// Chapter 31-34

// Task 1
// var a = new Date();
// alert(a)

// Task 2
// var a = new Date();
// var month = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
// alert("Current Month is " + month[a.getMonth()]);

// Task 3
// var a = new Date();
// var month = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// alert("Today is " + month[a.getDay()]);

// Task 4
// var a = new Date();
// var month = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// if (a.getDay === "0" || a.getDay === "6") {
//     alert("Today is Funday")
// } else {
//     alert("Today is " + month[a.getDay()])
// }

// Task 5
// Miss

// Task 6
// var a = new Date();
// var c = a.getTime();
// console.log(c)
// b = a.getTime() / (1000 * 60 * 60);
// console.log(b)

// Task 7
// var a = new Date();
// var b = a.getHours();
// var c = a.getMinutes();
// console.log(b)
// console.log(c)
// if (b === 12) {
//     alert("Its " + 12 + ":" + c + " PM")
// } else if (b === 13) {
//     alert("Its " + 01 + ":" + c + " PM")
// } else if (b === 14) {
//     alert("Its " + 02 + ":" + c + " PM")
// } else if (b === 15) {
//     alert("Its " + 03 + ":" + c + " PM")
// } else if (b === 16) {
//     alert("Its " + 04 + ":" + c + " PM")
// } else if (b === 17) {
//     alert("Its " + 05 + ":" + c + " PM")
// } else if (b === 18) {
//     alert("Its " + 06 + ":" + c + " PM")
// } else if (b === 19) {
//     alert("Its " + 07 + ":" + c + " PM")
// } else if (b === 20) {
//     alert("Its " + 08 + ":" + c + " PM")
// } else if (b === 21) {
//     alert("Its " + 09 + ":" + c + " PM")
// } else if (b === 22) {
//     alert("Its " + 10 + ":" + c + " PM")
// } else if (b === 23) {
//     alert("Its " + 11 + ":" + c + " PM")
// } else {
//     alert("Its " + b + ":" + c + " AM")
// }

// Task 8
// var a = new Date("December 31, 2020")
// alert(a);

// Task 9
// var a = new Date("June 18, 2015");
// a = a.getTime();
// var b = new Date();
// b = b.getTime();
// var c = b - a;
// alert(Math.round(c / (1000 * 60 * 60 * 24)) + " Days have passed since 1st Ramzan, 2015")

// Task 10, 11, 12
// Miss

// Task 13
// var b = prompt("Enter Your Year of Birth", "e.g 1999")
// b = Number(b);
// var a = new Date();
// a = a.getFullYear();
// var c = a - b;
// alert("Your age is " + c)

// Task 14
// var a = prompt("Enter Your February Units");
// document.write("<h1>K-Electric Bill</h1>")
// document.write("Customer Name: <b>ABC Customer</b> <br>")
// document.write("Month: <b>February</b> <br>")
// document.write("Number of Units: " + "<b>" + a + "</b> <br>")
// document.write("Charges per Unit: <b>16</b> <br><br>")
// a = a * 16;
// document.write("Net Amount Payable (within due date) : " + "<b>" + a + "</b> <br>")
// document.write("Late Payment Surcharge: <b>350</b> <br>")
// document.write("Gross Amount Payable (after due date) : " + "<b>" + ((+a) + 350) + "</b> <br>")

// Chapter 35-38

// Task 1
// var a = new Date();
// document.write("Current Date is " + a)

// Task 14
// function calcCircumference(radius) {
//     var a = 3.142;
//     var b = 2 * a * radius;
//     return b
// }
// var a = calcCircumference(8);
// alert("The circumference is " + a)

// function calcArea(radius) {
//     var a = 3.142;
//     var b = a * radius * radius;
//     return b
// }
// var a = calcArea(8);
// alert("The Area is " + a)