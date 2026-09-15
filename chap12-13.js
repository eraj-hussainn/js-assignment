
        // Question 1:
        // Write a program that takes a character and checks whether
        // the given input is a number, uppercase letter or lowercase letter.

        var character = prompt("Enter a character:");

        var code = character.charCodeAt(0);

        if (code >= 48 && code <= 57) {
            alert("It is a number");
        }
        else if (code >= 65 && code <= 90) {
            alert("It is an uppercase letter");
        }
        else if (code >= 97 && code <= 122) {
            alert("It is a lowercase letter");
        }
        else {
            alert("It is a special character");
        }


        // Question 2:
        // Write a JavaScript program that accepts two integers
        // and displays the larger. Also show if the two integers are equal.

        var num1 = +prompt("Enter first number:");
        var num2 = +prompt("Enter second number:");

        if (num1 > num2) {
            alert(num1 + " is larger");
        }
        else if (num2 > num1) {
            alert(num2 + " is larger");
        }
        else {
            alert("Both numbers are equal");
        }


        // Question 3:
        // Write a program that takes input a number from user
        // and states whether the number is positive, negative or zero.

        var number = +prompt("Enter a number:");

        if (number > 0) {
            alert("The number is positive");
        }
        else if (number < 0) {
            alert("The number is negative");
        }
        else {
            alert("The number is zero");
        }


        // Question 4:
        // Write a program that takes a character and returns
        // true if it is a vowel, false otherwise.

        var letter = prompt("Enter a character:");

        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" ||
            letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U") {

            alert(true);
        }
        else {
            alert(false);
        }


        // Question 5:
        // Store correct password in a JS variable.
        // Ask user to enter password.
        // Check if password is empty.
        // Check if both passwords are same.

        var password = "12345";

        var userPassword = prompt("Enter your password:");

        if (userPassword == "") {
            alert("Please enter your password");
        }
        else if (userPassword == password) {
            alert("Correct! The password you entered matches the original password");
        }
        else {
            alert("Incorrect password");
        }
 // Question 6:
        // This if/else statement does not work. Try to fix it.

        var greeting;
        var hour = 13;

        if (hour < 18) {
            greeting = "Good day";
        }
        else {
            greeting = "Good evening";
        }

        alert(greeting);


        // Question 7:
        // Write a program that takes time as input from user in
        // 24 hours clock format like: 1900 = 7pm.
        // Implement the following case using if, else & else if statements.

        var time = +prompt("Enter time in 24 hours format:");

        if (time >= 0 && time < 1200) {
            alert("Good morning");
        }
        else if (time >= 1200 && time < 1700) {
            alert("Good afternoon");
        }
        else if (time >= 1700 && time < 2100) {
            alert("Good evening");
        }
        else if (time >= 2100 && time <= 2359) {
            alert("Good night");
        }
        else {
            alert("Invalid time");
        }

    