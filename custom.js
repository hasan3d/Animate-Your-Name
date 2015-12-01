
var red = [0, 100, 63]; // Declaring individual color with variables such as red, green etc. 
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "Hasan Ahmed"; // Replace the string with your name to animate it.
letterColors = [red, orange, green, blue, purple]; // I have stored different colors in variables before. Here i am combining all of them with one variable.
if(10 > 3) {
    bubbleShape = "circle"; // I have used logic so for instance, if 10 is greater than 3 then bubbleShape will be circle otherwise square.
}
else {
    bubbleShape = "square";
}

drawName(myName, letterColors); // Here i am calling the function with arguments myName and letterColors.
bounceBubbles(); // Here I am invoking the function by calling it name with parenthesis bounceBubbles.