//functions

//create a function that print a poem

// function poem(){
//     console.log("Twinkkle twinkkel little star","how I wonder what you are ", "like a diamond in the sky");
// }
// poem();

//create a function to roll a dice and always display the value of the dice(1 to 6)

// function dice(){
//     const my_dice=Math.floor(Math.random()*6)+1;
//     console.log(my_dice);
// }
// dice();

//create a function that sum's the two numbers

// function sum(a,b){
//     let my_sum=a+b;
//     console.log(my_sum);
// }

// sum(1,2);   
// sum(45,5);

//create a function that gives us the average of 3 numbers

// function avg(a,b,c){
//     let average=(a+b+c)/3;
//     console.log(average);
// }
// avg(3,3,3);

//create a function that prints the multiplication atble of a nmber

// function multiplication(a){
//     for(let i=a;i<=a*10;i=i+a){
//        console.log(i);
//     }
// }
// multiplication(1);
//create a function that returns the sum of numbers from one number  to another

// function sum(a,b){
//     let total=0;
//     for(let i=a;i<=b;i++){
//         total=total+i;
//     }
//     return total;

// }

// let s=sum(1,5);
// console.log(s);


//create a function that returns the sum of numbers from 1 to n

// function sum(n){
//     let total=0;
//     for(let i=1;i<=n;i++){
//         total=total+i;
//     }
//     return total;

// }

// let s=sum(5);
// console.log(s);

//create a function that returns the concatenation of all strings in an array

// function concatination(arr){
//     let do_concat=arr.join("");
//     return do_concat;
// }

// let arr=["Namratha","Nagaraj"," ","from"," ","Gowdagere"];
// let c=concatination(arr);
// console.log(c);

//funcxtion scope

// let sum;                                //possible , global scope 

// function calsum(a,b){
//     let sum=a+b;                         //possible , function scope
//     return sum;
// }

// let c=calsum(5,5);
// console.log(c);


//lexical scope

// function outer(){
//     let x=6;
//     let y=5;
//     function inner(){
//         let small=x+y;
//         return small;
//     }
//     let s=inner();
//     console.log(s);
// }
// outer();



//Another way of writing a function

// let name=function(naam1,naam2){
//     return (`${naam1} and ${naam2} are best friends`);
// }

// let my_name=name("Motu","Patlu")
// console.log(my_name);

//HIGHER ORDER FUNCTIONS

let greet=function(){
    console.log("hello!");
}

function mulitipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}

mulitipleGreet(greet,2);


