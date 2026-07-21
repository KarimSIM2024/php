// 1 1-On your page, show alert for the user that say “Welcome to my site”, then show him prompt 
// ask him to enter his name and write to the page  “ welcome + his name”. 

alert("Welcome to my site");

let userName = prompt("Please enter your name:");

if (userName) {
    document.write("<h2>" + "welcome " + userName + "</h2>");
}



// 2-Write a JavaScript function to convert temperatures from Celsius, to Fahrenheit 
// [ Formula : c/5 = (f-32)/9] 
// [where c = temperature in Celsius and f = temperature in Fahrenheit]

function convertToFahrenheit(c) {
    let f = (c * 9 / 5) + 32;
    return f;
}

console.log("30°C in Fahrenheit is: " + convertToFahrenheit(30));


// 3. Greatest of Three Numbers

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));

function getGreatest(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Please enter valid numbers only!");
} else {
    let result = getGreatest(num1, num2, num3);
    alert("The greatest number is: " + result);

    document.write("<p>The greatest number between your inputs is: <b>" + result + "</b></p>");
}

// 4. Multiplication Table of 5

console.log("Multiplication Table of 5:");

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}


// 5. Personal Information JSON Object

let myInfo = {
    "name": "Karim Wael Balbaa",
    "address": "Alexandria, Egypt",
    "phone": "01280000000",
    "age": 21,
    "track": "Cyber Security"
};
console.log("Personal Information:");
console.log("Name: " + myInfo.name);
console.log("Address: " + myInfo.address);
console.log("Phone: " + myInfo.phone);
console.log("Age: " + myInfo.age);
console.log("Track: " + myInfo.track);