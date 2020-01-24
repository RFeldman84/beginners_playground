// // 1. STRING
// // string = a data type that is a series of characters

// // multilane strings with/without backticks:
// console.log("with quotes double\"\" or single'':")
// console.log("rachel is inappropriate")
// console.log("\n")
 //console.log("---with the \\n escape character:---")
// console.log("rachel\nis\ninappropriate" )
 //console.log("\n")
// console.log("-----with `bacticks` and press enter each line-------")
// console.log(`rachel 
// is 
// inappropriate`)

// console.log("\n")
// console.log("----interpolation  ${placeholder} (only works with backtics `` )----")
// let strangIsThatSpelledRight = "I am a bad teacher who can't spell"
// let itIsSpelledStringDumbAss = "Dr. Talu"
// let aNumbver= "5"
// let aRealNum = 6
//  console.log(`Sorry bro ${strangIsThatSpelledRight + " rachel sux"} let me refer you to a non dumbass named ${itIsSpelledStringDumbAss}`)
// console.log(`lets to simple math ${aNumbver}`)
// console.log(`${(itIsSpelledStringDumbAss + " ").repeat(aNumbver)}funny hahahah`)
// let blah = aRealNum + ""
// let aNumbverAsAString = Number(aNumbver)
// console.log(`type of aNumbver: ${typeof aNumbver}`)
// console.log(`aNumbver = ${aNumbver}`)
// console.log(`typeof aNumbverAsAString: ${typeof aNumbverAsAString}`)
// console.log(`aNumbverAsAString: ${aNumbverAsAString}`)
// console.log(`${aNumbverAsAString == typeof boolean}`)
// console.log(`change number to string using \+ "": ${blah}`)

// let bleh = 'false';
// let blih = Boolean(bleh);
// console.log(`typeof bleh: ${typeof bleh}`)
// console.log(`typeof blih (after type conversion): ${typeof blih}`)




// -> string properties and methods:


// create a function that takes a name as a parameter and returns the capitalized version of it:

// function capitalNAme (name){
//   name = name[0].toUpperCase() + name.slice(1)
//   //return console.log(name[0].toUpperCase() + name.slice(1))
//  console.log(name)
//  return name
//   } 

// capitalNAme("poop")

//fat arrow shit
//fat arrows in differnt uses have different syntax 
//.method(  ()=>{}     ) remove outer () when function
//  functions  syntax = ()=>{} 
// array.map( function goes here )
// snytax like this : .(()=>{})
//.method(  ()=>{}     )
//.method(function)
//hence higher order functions like map filter reduce etc...

// let capitalNAme = (name)=>
// return name[0].toUpperCase() + name.slice(1)


// const capitalName = name => name[0].toUpperCase() + name.slice(1)





console.log("---WTF? ARE YOU HIDING FROM ME TALU!?----")
//YO!! found this out when commented out 1st let devil = by accident for next devil to run
why = 123
console.log(why)
console.log(`So.. on repl.it & VSCode stuff will print without declaring with VAR LET CONST see...${why}`)

// --> strict mode: 'use strict'


 // LENGTH
console.log("-----length-------") 
let anger  = "repl.it"
console.log(anger.length)

// // ADDITION OR CONCATENATION:
console.log("-----addition & concatenation:-------") 
let devil = anger.length - 1 //number method
console.log(devil)

console.log("This way you can talk shit about " + anger + " #" + devil + "" + 66 + " but, lots of plus signs") //string method

console.log(`Or, this way you can talk shit about ${anger} #${devil + "" + 66} with less plus signs using interpolation`)

devil = devil.toString() + 6 + 6 
console.log(devil)

devil = anger.length-1 + "" + 6 + 6 
console.log(devil)

console.log(devil + " " + 666)


// get character by index:
 console.log("-----character by index:-------")
console.log(anger.charAt(3))
console.log(anger.charAt())
console.log("character".charAt(6))
console.log("character".charAt())

// get character by index without charAt:



// get a substring by index:
 console.log("------substring by index:------")

let getMe = 
"The second argument to *substring* and *slice* is the index to stop at (but not include), but the second argument to *substr* is the maximum length to return."
console.log(getMe.indexOf("sub")) //24
console.log(getMe.substring(23,35)) // leaves first
console.log(getMe.indexOf("sub", 25)) //118 
console.log(getMe.substr(117,8)) // leaves first
console.log("*slice*".length) // 7
console.log(getMe.slice(39,47)) //takes out 1st

// find the index of the first occurence of a given character or substring (prints -1 if not found): 
console.log("-----FIRST occurence-------")

console.log(anger.indexOf("fu"))
console.log(anger.indexOf("repl"))
console.log(anger.indexOf("."))
console.log(anger.indexOf("i"))
console.log(anger.indexOf("t"))


// find the index of the LAST occurence of a given character or substring:
 console.log("-----LAST occurence-------")


console.log("boycott!!".lastIndexOf("t"))
console.log("boycott!!".lastIndexOf("tt"))
console.log("boycott!!".lastIndexOf("o"))
console.log("boycott!!".lastIndexOf("!"))

// repeat: .repeat(2)
console.log("-----repeat:-------")

let repLit = "🖕💩\n😤🤬"
//repLit = "🖕"
 console.log(repLit.repeat(2))
 console.log("------------")
 console.log(repLit.repeat(2 + 2)) // repeat 4x
 console.log("------------")
 console.log(repLit.repeat(2 + "2")) // repeat 22x
 console.log("------------")
 console.log(repLit.repeat(2)+ 2)
 console.log("------------")
 console.log(repLit.repeat(2)+ " 2") //space clears 
console.log(repLit.repeat(2) + devil)
console.log("------------")
console.log(repLit.repeat(2 * 3)) // repeat 6x
 console.log("------------")
 console.log(repLit.repeat(2 * "3")) // repeat 6x
 console.log("----emptys-----")
 console.log(repLit.repeat()) 
 console.log("------------")
 console.log(repLit.repeat(0)) 
 console.log("------------")
 console.log(repLit.repeat(2 - 2)) 
 console.log("------------")
 console.log(repLit.repeat(2+ devil - 2660)) // 2,666
 console.log("------------")
 console.log("what will this do?\n".repeat(2))
 console.log("------------")
console.log("what will this do?\n".repeat(2).repeat(6))
console.log("------------")
console.log("what will this do?\n".repeat(2).repeat(6).repeat(3))
console.log("------------")



//console.log("------------")








































// console.log(`--------go over substrings-----------`)
// console.log(`--------let stringExample = 'blahblehblih'-----------`)
// let stringExample = 'blahblehblih'
// // get a substring (part of the string) by index:
// console.log(`Print the first 3 characters (0,3): ${stringExample.substring(0,3) }`)
// console.log(`Print the first 3 characters using slice (0,3): ${stringExample.slice(0,3)}`)
// console.log(`Print the last 3 characters using slice (-3): ${stringExample.slice(-3)}`)
//  console.log(`-----slice : ${stringExample.slice(3)}`)
// // console.log(`-----substr: ${stringExample.substr(3)}`)
// // console.log(`-----substring: ${stringExample.substring(3)}`)
// console.log(`Minus the last h (-3,-1): ${stringExample.slice(-3,-1)}`)
// console.log(`Print the 3 characters after the first (1,4): ${stringExample.substring(1,4) }`)
// console.log(`Print the 3 characters after the first using substr (1,3): ${stringExample.substr(1,3) }`)
// // The second argument to SUBSTRING and SLICE is the index to stop at (but not include), but the second argument to SUBSTR is the maximum length to return.
// // Slice can go backwards.




