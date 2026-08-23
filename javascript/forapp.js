// for(let i=1;i<=5;i++){
//     console.log(i);
// }

//assignment print all the odd numbers bw 1 to 15

// for(let i=1;i<=15;i=i+2){
//     console.log(i);
// }
//assignment , print the multiplication table of 5

// for (let i=5;i<=50;i=i+5){
//     console.log(i);
// }

//asking the user which number table you want to print

// let table=Number(prompt("Enter the number for which you want its atbel"));
// for(let i=table;i<=table*10;i=i+table){
//     console.log(i);
// }


//while loop

// let i=5;
// while(i>=1){
//     console.log(i);
//     i--;
// }
// console.log("printing competed");
// console.log(i);

//printing numbers from 0 to 20 using while loop

// let i=0;
// while(i<=20){
//     console.log(i);
//     i++;
// }

//movie guessing game 

// const movie1="pathuthala";
// let guess=prompt("guess the movie");
// while((guess.toLowerCase()!==movie1)&&(guess!==null)&&(guess!=="quit")){

//     guess=prompt(" Sorry ...Wrong..... guess again");
// }
// if(guess.toLowerCase()==movie1){
//    console.log("Congrats!! you guessed right");
// }
// else{
//     console.log("Thank you!! for trying.have a good day.")
// }

//break keyword usage

// let i=1;
// while(i<=5){
//     if(i==5){
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("we have used braek at 5");



//changing the coding game using break keyword

// const movie1="pathuthala";
// let guess=prompt("guess the movie");


// while((guess.toLowerCase()!==movie1)&&(guess!==null)){
//     if(guess=="quit"){
//         console.log("you quit");      //i have taken out the else part and used quit part by the usage of the braek statement;
//         break;
//     }
//     guess=prompt(" Sorry ...Wrong..... guess again");
// }
// if(guess.toLowerCase()==movie1){
//    console.log("Congrats!! you guessed right");
// }

//this code is written by you

// const book_my_show="pathuthala";
// let user_guess=prompt("guess the movie");
// if(user_guess.toLowerCase()===book_my_show){  //your mistake is ...you should keep the if block inside the while block , bec once it checks if then it goe sto while ...and the while will keep running running running if condn is true , if fale the loop breaks and the control comes out the loop , the if block  checks only only once....soo dont keep it before , but keep it insid eteh while ....soo each time user enters guess...each time loop runs and  each time the if condition will get checked.
//     console.log("Congrats!!,you guessed right");
// }
// while(user_guess.toLowerCase()!==book_my_show){
//     if(user_guess=="quit" || user_guess==null){
//         console.log("you quit");
//         break;
//     }
//     console.log("you guessed wrong!!");
//     user_guess=prompt("guess again");



// 🧠 One-line rule (remember this forever)

// If something depends on user input that changes repeatedly,
// the logic must be inside the loop.

//explaination of movie guessing game

// 🧠 First: forget code. Think like a HUMAN.

// Imagine this real-life game 👇

// I’m thinking of a movie name.
// You keep guessing until

// you guess correctly ✅

// OR you give up ❌

// Now answer honestly:

// ❓ Do you know how many guesses the user will take?
// ➡️ NO

// ❓ So should we use for loop?
// ➡️ NO (because for needs a fixed count)

// ❓ What do we need?
// ➡️ “Keep asking UNTIL something happens”

// 🎯 That sentence is the KEY word → UNTIL

// That means → while loop

// 🧩 Step 1: Infinite loop (this is not scary)
// while (true) {
// }


// This means:

// “I don’t know when to stop. I’ll stop manually.”

// 👉 We will stop using break.

// Thinking rule #1

// When exit conditions are dynamic → use while(true) + break

// 🧩 Step 2: Take input EVERY time (inside loop)
// user_guess = prompt("guess the movie");


// Why inside loop?

// Because:

// user guesses again

// and again

// and again

// Thinking rule #2

// If a value changes repeatedly → it belongs inside the loop

// 🧩 Step 3: Handle EXIT cases FIRST (VERY IMPORTANT)
// if (user_guess === null || user_guess === "quit") {
//     console.log("you quit");
//     break;
// }


// Why FIRST?

// Because:

// null = Cancel button

// "quit" = user wants to exit

// we must stop immediately

// also prevents crashes (toLowerCase on null)

// Thinking rule #3

// Always handle EXIT / ERROR cases before NORMAL logic

// This is how senior developers think.

// 🧩 Step 4: Normalize input (case-insensitive)
// user_guess = user_guess.toLowerCase();


// Why?

// Because:

// Pathuthala

// PATHUTHALA

// pathuthala

// All should be treated the same.

// Thinking rule #4

// Clean the data before comparing

// 🧩 Step 5: Success condition
// if (user_guess === book_my_show) {
//     console.log("Congrats!! you guessed right");
//     break;
// }


// Why break here?

// Because:

// game is over

// no more guessing needed

// Thinking rule #5

// When goal is achieved → exit immediately

// 🧩 Step 6: Default case (nothing matched)
// console.log("you guessed wrong!!");


// This runs only if:

// user didn’t quit

// didn’t cancel

// didn’t guess correctly

// Thinking rule #6

// Handle the “everything else” case last

// 🧠 FULL THINKING FLOW (THIS IS GOLD)

// When you face any problem, think in this order:

// 🔁 Do I know how many times it repeats?

// No → while(true)

// 🧾 What are the EXIT conditions?

// quit / cancel → handle FIRST

// 🎯 What is the SUCCESS condition?

// correct guess → handle NEXT

// ❌ What if nothing matches?

// default behavior




//Accessing the entire array using the for loop

// let fruits=["orange", "apple", "banana" , "lichi"];
// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }

//Accessing only odd index array elements using the for loop

// let fruits=["orange", "apple", "banana" , "lichi"];
// for(let i=1;i<fruits.length;i=i+2){
//     console.log(i,fruits[i]);
// }

//accessing the array elements in the reverse order

// let fruits=["orange", "apple", "banana" , "lichi"];
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }

//NESTED LOOP FOR NESTED ARRAYS

// let heros = [
//     ["ironman","spiderman","thor"],
//     ["superman","wonder women","flash"]
// ];
// for(let i=0;i<heros.length;i++){
//     console.log(i);
//     for(let j=0;j<heros[0].length;j++){
//         console.log(heros[i][j]);
//     }
// }

//another example for nested loop and nested arrays 

let students=[["Namratha",100,"f"],["Bhuvan",95,"M"],["Nagaraj",100,"M"],["padma",95,"F"]];

for(let i=0;i<students.length;i++){
    console.log(students[i]);
    for(let j=0;j<students[i].length;j++){
        console.log(students[i][j]);
    }
}

// for  of loop

// let family=["Puttamma", "Nagaraj","Padmavathi" , "Namratha" , "Bhuvan"];
// for( members_family of family){
//     console.log(members_family);
// }

for(letters of "Namratha_Nagaraj"){
    console.log(letters);
}

//NESTED FOR OF LOOP FOR NESTED ARRAY 

let heros = [ ["ironman","spiderman","thor"], ["superman","wonder women","flash"]];

for( list of heros){
    for( heroin of list){
        console.log(heroin);
    }
}


