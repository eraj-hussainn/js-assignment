// ----------- Chapter 4 VARIABLE NAMES: LEGAL & ILLEGAL ----------

// 1. Declare 3 variables in one statement

// var name,age,gender;

// 2. Declare 5 legal & 5 illegal variable names.
//Legal Variables
// var name;
// var birthYear;
// var $year;
// var name_of_student;
// var std123;

//var 10number;       // ❌ Starts with a number
//var 123student;     // ❌ Starts with a number
//var my name;        // ❌ Contains a space
//var first-name;     // ❌ Hyphen is not allowed
//var @year;          // ❌ @ is not allowed
//var #student;       // ❌ # is not allowed
//var student@123;    // ❌ @ is not allowed
//var 2ndPlace;       // ❌ Starts with a number
//var var;            // ❌ Reserved keyword
//var let;            // ❌ Reserved keyword
//var const;          // ❌ Reserved keyword
//var if;             // ❌ Reserved keyword
//var else;           // ❌ Reserved keyword
//var for;            // ❌ Reserved keyword
//var while;          // ❌ Reserved keyword

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______, ______ and ______.For example $my_1stVariable
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

 document.write("<h1>" + "Rules for naming JS variables" + "</h1>");
 document.write("Variable names can only contain numbers,letters, $ and _. For example: $my_1stVariable." + "<br/>");
 document.write("Variable must begin with a letter, $ or _. For example: $name, _name or name" + "<br/>");
 document.write("Variable names are case sensitive" + "<br/>");
 document.write("Variable names should not be JS keywords" + "<br/>");

