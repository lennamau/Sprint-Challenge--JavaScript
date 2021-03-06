// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume (p1, p2, cb) {
  return cb(p1,p2);
}
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns
  *  "Hello first-name last-name, nice to meet you!"
*/
const add = function(p1, p2) {
  console.log(p1 + p2);
}
const multiply = function(p1, p2){
  console.log(p1 * p2)
}

const greeting = function(p1, p2) {
   console.log(`Hello ${p1} ${p2}, nice to meet you!`)
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: The closure ability in Javascript allows the global variable "external" to be used in the function
// by keeping it in local memory and it allowes the nested variable to be used directly outside of the nested function 
//by keeping it in local memory.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();