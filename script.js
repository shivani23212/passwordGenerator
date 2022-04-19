var slider = document.getElementById("sliderInput");
var output = document.getElementById("value"); // text showing slider value
var passwordTextInput = document.getElementById("password-field");

const lowercase ='abcdefghijklmnopqrstuvwxyz'.split('');
const uppercase = lowercase.map(function(x) {return x.toUpperCase();});
const numbersArr = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialChars = ['!', '£', '$', '%', '&', '*', '(', ')'];

// need to make copy button function and add footer, then upload to stackoverflow
// don't forget to message about zerogravity


output.innerHTML = slider.value; // update value with slider input val

// Update number showing current slider value
slider.oninput = function() {
    output.innerHTML = this.value;
}

// Changes percentage of colour on bar according to slider value
slider.addEventListener("mousemove", function() {
    var percentage = (slider.value*100.0)/25.0;
    var color = `linear-gradient(90deg, var(--title-colour) `+ percentage +`%, 
    rgb(31, 27, 27) `+ percentage + `%)`;
    slider.style.background = color;
}); 


createPassword = function() {
    var myPassword = "";
    var charOptions = [];
    var letters = document.getElementById("letters").checked;
    var numbers = document.getElementById("numbers").checked;
    var chars = document.getElementById("chars").checked;
    var caps = document.getElementById("caps").checked;

    if (letters == true) {
        charOptions = charOptions.concat(lowercase);}
    if (caps == true) {
        charOptions = charOptions.concat(uppercase);}
    if (numbers == true) {
        charOptions = charOptions.concat(numbersArr);}
    if (chars == true) {
        charOptions = charOptions.concat(specialChars);}
    
    if ((letters || numbers || chars || caps) == false) {
        alert("Please select at least one password option.");
        return;
    }

    for (let i = 0; i < slider.value; i++) {
        var randElement = charOptions[Math.floor(Math.random()*charOptions.length)];
        myPassword += randElement;
    }

    // console.log("Randomly generated password is "+myPassword);
    passwordTextInput.value = myPassword;
}

copyText = function() {
    var passwordText = passwordTextInput.value;
    passwordTextInput.select();
    navigator.clipboard.writeText(passwordText);
}


