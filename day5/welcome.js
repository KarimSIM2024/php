// Get the URL parameters
let urlParams = new URLSearchParams(window.location.search);
let userName = urlParams.get('username');

// Check the username and print the welcome message
if (userName && userName !== "Enter your user name here") {
    document.write("<h1 style='font-size: 50px;'><b>Welcome " + userName + "</b></h1>");
} else {
    document.write("<h1 style='font-size: 50px; color: red;'><b>Welcome Guest</b></h1>");
}