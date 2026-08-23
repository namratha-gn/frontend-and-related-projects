//THE  CODE YOU HAVE WRITTEN 


// let arr=[];
// while(true){
//     let req=prompt("Enter your request")

//     if(req.toLowerCase()=="quit" ||  req==null){
//          console.log("You quit");
//          break;
//     }

//     else if(req.toLowerCase()=="add"){
//         let value=prompt("Enter the avlue to add");
//         arr.push(value);
//     }

//     else if(req.toLowerCase()=="delete"){
//         let ind=prompt("enter the index to be deleted");
//         arr.splice(ind,1);
//         }
    
//     else if (req.toLowerCase()=="list"){
//         for(let i=0;i<arr.length;i++){
//             console.log(arr[i]);
//         }
//     }
    
//     else{
//         console.log("Enter the valid request");
//     }

    
// }



// MISTAKE NO.1


// if (req.toLowerCase() === "quit" || req === null)
// ❌ This can crash if user clicks Cancel
// Because req === null → req.toLowerCase() will throw an error.

// ✅ FIX (always check null first)
// js
// Copy code
// if (req === null || req.toLowerCase() === "quit") {
// Rule to remember forever:

// Always check null / undefined before calling methods


// MISTAKE NO.2


// let command = req.toLowerCase();
// Then use command everywhere.


// MISTAKE NO.3


// let ind = prompt("enter the index to be deleted");
// arr.splice(ind, 1);
// prompt() returns string, not number.

// ✅ Convert to number
// js
// Copy code
// // let ind = Number(prompt("Enter the index to be deleted"));





// WHY YOU SHOULD CHECK NULL FIRST ALWAYS




// Consider this condition:

// if (req.toLowerCase() === "quit" || req === null)

// JavaScript evaluates left → right

// So JS does this:

// Evaluate req.toLowerCase()

// THEN compare to "quit"

// THEN check req === null

// Now imagine user clicks Cancel
// req === null


// JS tries:

// null.toLowerCase() // ❌ CRASH





//OPTIMIZED SOLUTION



// let arr = [];

// while (true) {
//     let req = prompt("Enter your request");

//     if (req === null) {
//         console.log("You quit");
//         break;
//     }

//     let command = req.toLowerCase();      //see you can do this inbw if and if statement , but cannot do bw if and else if statement

//     if (command === "quit") {
//         console.log("You quit");
//         break;
//     }
//     else if (command === "add") {
//         let value = prompt("Enter the value to add");
//         arr.push(value);
//     }
//     else if (command === "delete") {
//         let ind = Number(prompt("Enter the index to be deleted"));
//         arr.splice(ind, 1);
//     }
//     else if (command === "list") {
//         for (let i = 0; i < arr.length; i++) {
//             console.log(arr[i]);
//         }
//     }
//     else {
//         console.log("Enter a valid request");
//     }
// }


