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

console.log("Exr. 1")

/* 
   Main data type:

   1. NUMBERS:
   This include integer and decimal numbers. They are used to perform mathematical equations or just used as a 
   count of value.

   2. BOOLENS:
   This only have two value; True or False. So only data that can be represented in two states is used here.

   3. UNDEFINED:
   This is a value given to a variable that was not explicitly assigned a vslue. It means that it has no defined 
   data value that was given to it.

   4. NULL
   This is the value given to a variable when its value was explicitly emptied out. This means the variable had a defined value
   then becomes null when it goot emptied out.

   5. STRINGS:
   These are collections of characters and symbols used to represent text. For example names.

 */


/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

console.log("Exr. 2")

/*  
   A variable is used to store information to be referenced and manipulated during programming. They are also
   used to label data containers with descriptive names so that that can be referred to by ourselves and the 
   computer during programming. 
*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

console.log("Exr. 3")

let numberOne = 12
let numberTwo = 20

let sum = numberOne + numberTwo

console.log(sum)


/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

console.log("Exr. 4")

let x = 12

console.log(x)


/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

console.log("Exr. 5")

let name = "John Doe"

console.log(name)


/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

console.log("Exr. 6")

let subtraction = 12 - x

console.log(subtraction)


/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

console.log("Exr. 7")

let name1 ="john"
let name2 = "John"

console.log(name1, name2)

let equalityOfJohns = name1 === name2

console.log(equalityOfJohns)

let toLowerCase = name1.toLowerCase === name2.toLowerCase

console.log(toLowerCase)

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

console.log("Exr. 8")

let x8 = 5

if (x8 === 1) {
   console.log("one")
} 
   else {
      if (x8 === 2) {
      console.log("two")
   } 
   else {
      if (x8 === 3) {
         console.log("three")
      } 
   else {
      if(x8 === 4){
         console.log("four")   
      }
   else {  
      if (x8 === 5) {
         console.log("five")
      } 
   else {
      if (x8 === 6) {
         console.log("six")
      } 
   else {
      if (x8 === 7) {
         console.log("seven")
      } 
   else { 
      if (x8 === 8) {
         console.log("eight")
      } 
   else {
      if (x8 === 9) {
         console.log("nine")
      } 
   else {
      if (x8 === 10) {
         console.log("ten")
      } 
   
   }
    }
     }
      }
       }
        }
         }
          }
}
           
   
/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

console.log("Exr. 9")


let age = 26
let eligibility

if (age > 26) {
   eligibility = "Acceptedd"
} else {
   eligibility = "Not Accepted"
}

console.log(eligibility)

console.log("THE END")