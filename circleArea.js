// This JavaScript program prompts the user for their name and favorite number,
// calculates the area of a circle based on their favorite number as the radius,
// and then displays all the information to the webpage.

// Declare a variable to store the user's first name.
let Fname = prompt("Please enter your first name:");

// Display a welcome message that includes the user's name.
alert("Welcome, " + Fname + "!");

// Create a constant to store the value of Pi (π) to 7 significant digits.
const piValue = 3.1415926;

// Ask the user for their favorite number and store it in a variable.
let myFavNum = prompt("Enter your favorite number:");

// Convert the input from string to number to ensure accurate calculations.
myFavNum = parseFloat(myFavNum);

// Calculate the area of a circle using the user's favorite number as the radius.
let myArea = piValue * myFavNum * myFavNum; // A = πr^2

// Prepare a message to display the results.
let message = "Hello " + Fname + ", you entered " + myFavNum + 
              " as your favorite number. If that was the radius of a circle, " +
              "the circle’s area would be " + myArea.toFixed(6) + ".";

// Display the message to the webpage by inserting it into an HTML element.
document.write(message);