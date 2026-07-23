// Task 1: Letters Only Textbox
document.getElementById("lettersOnly").addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});

// Task 2: Clock
let clockInterval;
document.getElementById("startClockBtn").addEventListener("click", function () {
    if (!clockInterval) {
        clockInterval = setInterval(() => {
            let now = new Date();
            document.getElementById("clockDisplay").innerText = now.toLocaleTimeString();
        }, 1000);
    }
});

// Task 3: Advertisement Window
let adWindow;
document.getElementById("openAdBtn").addEventListener("click", function () {
    setTimeout(() => {
        adWindow = window.open("", "AdWindow", "width=400,height=400");
        adWindow.document.write("<h2>Special Offer!</h2>");
        adWindow.document.write("<p>" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque corporis modi dolorem id ullam inventore, quod sed nemo aperiam ex perspiciatis impedit saepe doloremque est ipsum. Veritatis, ratione possimus!".repeat(100) + "</p>");
    }, 3000);
});

document.getElementById("closeAdBtn").addEventListener("click", function () {
    if (adWindow) {
        adWindow.close();
    }
});

// Task 4: Login Form Textbox Behavior
let userInput = document.getElementById("usernameInput");
userInput.addEventListener("focus", function () {
    if (this.value === 'Enter your user name here') {
        this.value = '';
    }
});
userInput.addEventListener("blur", function () {
    if (this.value === '') {
        this.value = 'Enter your user name here';
    }
});

// Bonus 2: Graduation Countdown
let gradDate = new Date("July 7, 2027 00:00:00").getTime();

setInterval(() => {
    let now = new Date().getTime();
    let distance = gradDate - now;

    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdownDisplay").innerText =
        months + " Months, " + days + " Days, " + hours + " Hours, " + minutes + " Mins, " + seconds + " Secs";
}, 1000);

// Bonus 3: Unload Event
let leaveLink = document.getElementById("leaveLink");

leaveLink.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Thanks for Visiting My Website");
    window.location.href = this.href;
});

