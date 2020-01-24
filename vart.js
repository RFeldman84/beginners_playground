// IMPORTANT VOCABULARY:

// GLOBAL SCOPE:
// any thing outside of any local scopes
// can be accessed and used throughout the entire code

// LOCAL SCOPE:
// restricted to a certain "place" (function, if statement, loops, etc); not global
// variables could have same name and different values in local and global scope, not affecting each other's values
// can be nested -> "mother" scope will behave similarly to the global scope in relation to the inner scope
// global scope [ local scope [ local scope [ local scope ] ] ]
// a variable declared within a local scope cannot be accessed globally or in any "mother" scopes
// local scopes are split between BLOCK scopes and FUNCTION scopes

// FUNCTION SCOPE:
// existent since pre ES6 era
// only type of local scope recognized by VAR (won't become available in the "mother scopes"/ won't "leak")
// function names and returned values are available within the scope in which they are declared/called
// the content within a function's curly braces is restrict to its scope


// BLOCK SCOPE:
// introduced in ES6
// anything between curly braces, EXCEPT FOR FUNCTIONS
// VAR doesn't recognize block scope (it becomes available into the mother function/global scope)
// LET was also introduced with ES6; LET & CONST do recognize block scopes


// -------------

console.log(`before ES6: global scope [ local (function) scope ]`)
function doesSomething(){
  var something = 1;
  console.log(`1-inside function (function scope): ${something}`)
  if(something){
    var something = 2;
    console.log(`inside if statement (NOT A LOCAL SCOPE IN ES5): ${something}`)
  }
  console.log(`2-inside function - after (function scope): ${something}`)
}
doesSomething();
console.log(`----------------------------------------`)
console.log(`after ES6: global scope [ local (function) scope [ local (block) scope ] ]`)
function doesSomething1(){
  let something1 = 1;
  console.log(`1-inside function (function scope): ${something1}`)
  if(something1){
    let something1 = 2;
    console.log(`inside if statement (block scope): ${something1}`)
  }
  console.log(`2-inside function - after (function scope): ${something1}`)
}
doesSomething1()

// -------------

console.log(`--------------------`)
console.log(`Nested if statements with LET:`)
let c = 1;
console.log(`c in the global scope: ${c}`)
if (true) {
  let c = 2;
  console.log(`c in the outermost local scope: ${c}`)
  if (true) {
    let c = 3;
    console.log(`c in the second nested local scope: ${c}`)
    if (true) {
      let c = 4;
      console.log(`c in the innermost local scope: ${c}`)
    }
  }
}
console.log(`c in the global scope after nested if statements: ${c}`)
console.log(`--------------------`)
console.log(`Nested if statements with VAR:`)
var d = 1;
console.log(`d in the global scope: ${d}`)
if (true) {
  var d = 2;
  console.log(`d in the outermost local scope: ${d}`)
  if (true) {
    var d = 3;
    console.log(`d in the second nested local scope: ${d}`)
    if (true) {
      var d = 4;
      console.log(`d in the innermost local scope: ${d}`)
    }
  }
}
// console.log(`d in the global scope after nested if statements: ${d}`)
// console.log(`--------------------`)



function inputANumber(t){

  
  if (typeof t == "number") {
    console.log(`${t} is a number`)
    
    if (t > 5) {
      console.log(`${t} is > 5`)
      
      if (t < 6) {
        console.log(`${t} is > 5`)
      }
      
    }
    
  }
  
}

if (true) {
  // codecodecode
}
if (true) {
  // codecodecode
}
if (true) {
  // codecodecode
}
if (true) {
  // codecodecode
}



 function inputANumber1(t){
   
   
  if (typeof t == "number") {
    console.log(`${t} is a number`)
  }
  if (t > 5) {
    console.log(`${t} is > 5`)
  }
  if (t < 6) {
    console.log(`${t} is < 6`)
  }
  
}
// inputANumber1(2);



function inputANumber2(t){
  if (t == 'a' || t == 3 || t == 'guatemala'){
    console.log(`ok: ${t}`)
  } else {
    console.log(`not ok: ${t}`)
  }
}

inputANumber2('a')
inputANumber2(3)
inputANumber2('guatemala')
inputANumber2(1)
inputANumber2('z')






// function scope:


// console.log(`var pre-function: ${randomVariable}`);
// function localScope(){
//   var randomVariable = 1;
//   console.log(`var inside function: ${randomVariable}`);
// }
// localScope()
// console.log(`var post function: ${randomVariable}`);
// /////////////////////////////////////////////////////////////




// for (i=10;i<13;i++){
//   var randomVariable = i;
//   console.log(`var inside loop: ${randomVariable}`);
// }
// console.log(`var post loop: ${randomVariable}`);
// randomVariable = 9
// console.log(`var post reassignment: ${randomVariable}`);
// ////////////////////////////////////////////////
// console.log("--------------------------")
// let randomVariable2 = 100
// console.log(`let pre loop: ${randomVariable2}`);
// for (i=1000;i<1003;i++){
//   let randomVariable2 = i;
//   console.log(`let inside for loop: ${randomVariable2}`);
// }
// console.log(`let post loop: ${randomVariable2}`);





















// let something = 0;

// // console.log(something.toString());

// // console.log(typeof something.toString())
// var test = 1
// console.log(`first declaration: ${test}`)

// var pest = function(){
//   //this function does shit
//   var test = 3;
//   console.log(`inside the scope: ${test}`)
//   console.log("shit")
// }

// pest();

// console.log(`after function - console log function: ${test}`)

// // console.log(`after function - call function: ${test()}`)

// // console.log(test())
// // console.log("----------")

// // console.log(test.toString())
// console.log("----------")

// var test = 2;
// console.log(`after second declaration: ${test}`)
// // console.log(`after second declaration: ${test()}`)

// // test = test.toString()
// // console.log(test)

// console.log("----------")

// //  console.log(test())

// // test()

//   // test