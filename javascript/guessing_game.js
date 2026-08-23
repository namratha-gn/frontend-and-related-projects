//your code



let max=Number(prompt("Enter the max number to guess from 1 to max"));
console.log(max);

let random=Math.floor(Math.random()*max)+1;
console.log(random);

while(true){

    let guess=prompt("guess the  random number generated");

    if(guess===null || guess==="quit"){
        console.log("you quit");
        break;
    }

     guess=Number(guess);

    if(guess===random){
        console.log("Congratulations!!, You guessed right");
        break;
    }
    else{
         if(guess>random){
            console.log("you have entered larger number,enter smaller than",guess);
        }
        else{
              console.log("you have entered smaller number,enter larger than",guess);
        }
        console.log("guess again");
    }

}



//optimized code



// let max = Number(prompt("Enter the max number to guess from 1 to max"));

// let random = Math.floor(Math.random() * max) + 1;

// while (true) {
//     let input = prompt("Guess the random number OR type 'quit'");

//     if (input === null || input === "quit") {
//         console.log("You quit");
//         break;
//     }

//     let guess = Number(input);

//     if (guess === random) {
//         console.log("Congratulations!! You guessed right");
//         break;
//     } else {
//        sole.log("Guess again");
//     }
// }


