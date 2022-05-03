/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* NUMBERS:
   This include integer and decimal numbers. They are used to perform mathematical equations or just used as a count of value.

   BOOLENS:
   This only have two value; True or False. So only data that can be represented in two states is used here.

   UNDEFINED:
   This is a value given to a variable that was not explicitly assigned a vslue. It means that it has no defined data value that was given to it.

   NULL
   This is the value given to a variable when its value was explicitly emptied out. This means the variable had a defined value then becomes null when it goot emptied out.
   
   STRINGS:
   These are collections of characters and symbols used to represent text. For example names.  

   SPECIAL NUMBERS:
   These are special values that are considered as numbers but do not behave as numbers do, for example NaN.

 */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/*  
   A variable is used to store information to be referenced and manipulated during programming. They are also
   used to label data containers with descriptive names so that that can be referred to by ourselves and the 
   computer during programming. 
*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let numberOne = 12
let numberTwo = 20

let sum = numberOne + numberTwo

console.log(sum)


/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12

console.log(x)




/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe"

console.log(name)


/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let subtraction = 12 - x

console.log(subtraction)

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/