"use strict";

// let dayOfWeek
// dayOfWeek= "Monday"


// function whatIsTheDay(dayOfWeek){
//     if (dayOfWeek = "Friday"){
        
//         return true; 
//     } 
//     if (dayOfWeek = "Monday"){
//         return false;   
//     }
// }


// if (dayOfWeek = true){
//     dayOfWeek = "Im so happy Its friday!!";
//     console.log(dayOfWeek);
//     } 
// if (dayOfWeek= false){
//     dayOfWeek = "Monday";
//     console.log(dayOfWeek)
// } 
// */



// 2. User Input //

let animalInput
animalInput = prompt(
    "What Is your favorite Animal?"
)
console.log(animalInput)

let colorInput
colorInput = prompt(
    "What is your Favorite Color?"
)
console.log(colorInput)


// console.log(`I've never seen a ${colorInput + '' + animalInput} before!` )
let favAnimal = colorInput + " " + animalInput
console.log(`Ive never seen a ${favAnimal} before!`)

