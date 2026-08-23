
//assignment no.1 

// let num=50;
// if(num%10==0){
//     console.log("Good");
// }
// else{
//     console.log("Bad");
// }

//assignment 2

// let name=prompt("Enter your name");
// let age=prompt("Enter your age");
// // alert(`${name} is ${age} years old`);
// alert(name+" is "+age+" years"+" old");

//assignment 3

// let quarter=Number(prompt("enter the num"));    //see it is very very very imp , your prompt always returns the string , not a number , if you want a number then type like this
// switch(quarter){
//     case 1:
//         console.log("january,February,March");
//         break;
//     case 2:
//         console.log("april,amy,june");
//         break;
//     case 3:
//         console.log("July,august,september");
//         break;
//     case 4:
//         console.log("October,November,December");
//         break;
//     default:
//         console.log("invalid number");    

// }
//assignment 4

// let string=prompt("Enter your string");
// if((string[0]=='A'||string[0]=='a') && (string.length>5)){
//     console.log("Golden string");
// }
// else{
//     console.log("Not a golden string");
// }

//assignmenet 5

// let num1=Number(prompt("Enter the first number"));   //this is the wrong program taht you ahve written, see when there is two such conditions to check simply go with && not do nesting.
// let num2=Number(prompt("Enter the second number"));
// let num3=Number(prompt("Enter the third number"));
// if(num1>num2){
//     console.log(num1);
//     if(num1>num3){
//            console.log(num1);
//     }
//     else{
//          console.log(num3);
//     }
// }
// else if(num2>num1){
//      if(num2>num3){
//         console.log(num2)
//      }
//      else{
//         console.log(num3)
//      }



//Correct code


// let num1=Number(prompt("Enter the first number"));   
// let num2=Number(prompt("Enter the second number"));
// let num3=Number(prompt("Enter the third number"));

// if(num1>num2 && num1>num3){
//     console.log(`${num1} is greater`);
// }
// else if(num2>num1 && num2>num3){
//     console.log(`${num2} is greater`);
// }
// else{
//     console.log(`${num3} is greater`);
// }

//assignment 6

// let num1=prompt("Enter the first number");   //soo here they are telling to acces the last digit of a number and  compare, we cannot accses the digits in the number using the indexing method, soo take that number as a string and access each digit using index method 
// let num2=prompt("Enter the second number");

// if(num1[num1.length-1]==num2[num2.length-1]){
//    console.log("both the numbers have same last digit");
// }
// else{
//     console.log("both the numbers donot have same last digit");
// }

//assignment 7

// let msg="help!";
// console.log(msg.trim().toUpperCase());

//assignment 8

// let name="ApnaCollege";
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna","Our" ));
// console.log(name.slice(4).replace("l","t"));

//See this is very important when you wnat to replace both the 'l's then you should go with the multiple steps like this

// newstring=name.slice(4).replace("l","t");
// console.log(newstring);
// console.log(newstring.replace("l","t"));

//or you can do this in one line also

// console.log(name.slice(4).replace("l","t").replace('l','t'));

//arrays in js

// let num=["namratha" , "Nagraj" , "BHuvan" , "Padmavathi" ,"Puttamma"]  //this is how we write array , num is array name

//assignment 9

// let start=['january','july','march','august'];
// start.shift();
// start.shift();
// console.log(start);
// start.unshift("june");
// start.unshift("july");
// console.log(start);


//assignment 10

// let start=['january','july','march','august'];
// console.log(start.splice(0,2,"july","june"));
// console.log(start)

//assignment 11

//  let prog=['c','c++','html','javascript','python','java','c#','sql'];
//  console.log(prog.reverse());
//  console.log(prog.indexOf("javascript"));

//assignemnt of tic-toc-toe game

// let tic=[['X',null,'O'],[null,'X',null],['O',null,'X']];
// console.log(tic);
//     tic[0][1]='O';
//     console.log(tic);

//assignment 
//wAP to delete all occurances of element 'num' in a given array
//Example if
// arr=[1,2,3,4,5,6,2,3] & num=2
// Result  should be arr=[1,3,4,5,6,3]


//YOUR CODE



// let arr=[1,2,3,4,5,6,2,3];
// const num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===num){
//         arr.splice(arr[i],1);
//     }
// }
// console.log(arr);



//MISTAKES YOU DID


// ❌ Your code (problematic line)
// arr.splice(arr[i], 1);

// What you think this means

// “Delete the element whose value is num”

// What JavaScript actually does

// splice(index, count)
// So JS reads this as:

// splice( VALUE , 1 )


// ❌ arr[i] is a value, not an index.

// 🔴 First mistake: VALUE vs INDEX confusion

// Example when i = 1:

// arr[i] === 2


// So your code becomes:

// arr.splice(2, 1); // deletes element at index 2


// That removes 3, not 2.

// 👉 This is why your output is wrong.

// 🔴 Second mistake (VERY IMPORTANT): forward loop + splice

// Even if you fix the index, this still breaks:

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//         arr.splice(i, 1);
//     }
// }

// Why?

// When you splice, the array shrinks and elements shift left.

// Example:

// [1, 2, 3, 4]
//    ↑
//    i = 1 (2 removed)

// Array becomes:
// [1, 3, 4]


// Now i increments → skips 3

// This is why occurrences get missed.


//OPTIMIZED CODE

// let arr=[1,2,3,4,5,6,2,3];
// const num=2;
//  for(let i=arr.length-1; i>=0 ;i--){
//     if(arr[i]===num){
//         arr.splice(i,1);
//     }
//  }
// console.log(arr);

//ASSIGNEMNT WAP TO FIND THE NUMBER OF DIGITS IN A NUMEBR 
// EXAMPLE

// if number=287152 , count=6

// let  num=235248622559963
// num=String(num);
// let count=num.length;
// console.log(count);

//method no.2  .....simple and easy

// let number=Number(prompt("Enter the number"));
// let count =0;
// while(number>0){
//     number=Math.floor(number/10); ////very very very biggest mistake you did here is not assigning ....infinite loop happening here 
//     count++;
// }
// console.log(count);


// Correct Handling (Professional Way)

// You MUST special-case 0.

// Best pattern:
// let number = Math.abs(Number(prompt("Enter the number")));
// let count = 0;

// if (number === 0) {
//     count = 1;   // ✅ special case
// } else {
//     while (number > 0) {
//         number = Math.floor(number / 10);
//         count++;
//     }
// }

// console.log("Digits count:", count);

// Why we don’t use while(number >= 0)

// If you do:

// while (number >= 0)


// Then when number becomes 0:

// number = Math.floor(0/10) = 0


// So:

// 0 >= 0 → true forever


// ➡️ INFINITE LOOP 😈
// ➡️ Browser hangs again


//ASSIGNMENT

//WAP TO FIND THE SUM OF DIGITS IN A NUMBER
//EXAMPLE : IF NUMBER=287152 , SUM=25


// let num = 287152;
// let sum = 0;

// while (num > 0) {
//     let digit = num % 10;          // get last digit
//     sum = sum + digit;            // add digit to sum
//     num = Math.floor(num / 10);   // remove last digit
// }

// console.log("Sum of digits =", sum); // Output: 25




// remember this pattern



// Super Important Pattern (Remember this 🔑)
// digit = num % 10        // extract
// num = Math.floor(num/10) // remove


// This exact pattern comes in:

// Reverse a number

// Count digits

// Palindrome number

// Armstrong number

// Sum of even/odd digits


//ASSIGNMET

//PRINT A FACTORIAL OF A NUMBER

// let num = 6;   // number to find factorial
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//     fact = fact * i;
// }

// console.log("Factorial =", fact); // Output: 720




//ASSIGNMENT 
//WAP TO FIND THE LARGEST NUMBER IN AN ARRAY WITH ONLY POSITIVE NUMBERS





// let arr = [10, 25, 3, 99, 45, 67];
// let max = arr[0];   // assume first element is largest

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log("Largest number =", max); // Output: 99





// Why this is correct (Important DSA logic 🧠)
// Start by assuming first element is max

// Compare every element with current max

// Update max when you find bigger




// Super Important Pattern (Memorize 🔑)

// max = arr[0];

// if (arr[i] > max) {
//     max = arr[i];
// }



// Dry Run (Quick)




// max = 10
// 25 > 10 → max = 25
// 3 > 25 → no
// 99 > 25 → max = 99
// 45 > 99 → no
// 67 > 99 → no
// Final Answer = 99



// This same logic is used for:

// Smallest element

// Second largest

// Max subarray problems

// Min/Max in DSA & CP


//GENERATE THE RANDOM NUMBERS B/W 1 TO 100

// let random=Math.floor(Math.random()*100)+1;
// console.log(random);


//GENERATE THE RANDOM NUMBERS B/W 1 TO 5


// let random=Math.floor(Math.random()*5)+1;
// console.log(random);

//create a program that generates a random number representing a dice roll
//[the number should be between 1 to 6]

// let random=Math.floor(Math.random()*6)+1;
// console.log(random);

//create an object representing a car thta stores the following properties for the car : name,model,color.Print the car's name.

// const car={
//     name:"venue",
//     model:2025,
//     color:"grey"
// }
// console.log(car.name);



// const person={
//     name:"Namratha",
//     age:22,
//     city:"Chikkaballapur"
// }
// console.log(person);
// console.log(person.city="New York");
// console.log(person);
// console.log(person.country="United states");
// console.log(person);

//assignment , what is teh output of the following code

// let greet="Hello!";   //global scope

// function changeGreet(){
//     let greet = "namasthe";
//     console.log(greet);    //function scope


// function innerGreet(){
//     console.log(greet);   //lexical scope
// }
                
// }

// console.log(greet);       
// changeGreet();

// here the actch is the inner function ois not called , so it will not execute at all


//write a javascript function that returns array elements larger than a number

// function my_number(array,n){
//     let new_array=[];
//     for(let i=0;i<array.length;i++){
//         if(array[i]>n){
//             new_array.push(array[i]);
        
//         }
       
//     }
//     return new_array;
// }

// let array=[1,2,3,4,5,6,7,8,9];
// let num=5;
// let greater=my_number(array,num);
// console.log(greater);

//wrie a Js function to extract unique characters from astring
//Example : str="abcdabcdefgggh";
 //         ans="abcdefgh";

 

//this is wrong method and the logic is also wrong


// function extraction(string_here){
//     let array=[];
//         for(let i=0;i<string_here.length;i++){
//             for(let j=0;j<string_here;j++){
//                 if(string_here[i]==string_here[j]){
//                     array.push(string_here[i]);
//                 }
//             }
//         }
// }


//wrie a Js function to extract unique characters from astring
//Example : str="abcdabcdefgggh";
 //         ans="abcdefgh";



 //this is the optimized code




//  function uniqueChars(str) {
//     return [...new Set(str)].join('');
// }

// // Example
// let str = "abcdabcdefgggh";
// console.log(uniqueChars(str));  // abcdefgh




//Write a Js function that accepts a list of country names as input and returns the longest country namee as output
//Example: country=["Australia","Germany","United States of America"]
//output:"United States of America";



// function longestCountryName(countries) {
//     let longest = "";

//     for (let i = 0; i < countries.length; i++) {   //here you can use fopr of loop also
//         if (countries[i].length > longest.length) {  //this is how you compare the things ...learn it
//             longest = countries[i];
//         }
//     }

//     return longest;
// }




//write aJs function to count the number of vowels in a string argument



// function countVowels(str) {
//     let count = 0;
//     str = str.toLowerCase();

//     for (let i = 0; i < str.length; i++) {
//         if ("aeiou".includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

//write a Js function to generate a random number within a range (start,end)


//this is also right

// function generaterandom(start,end){

//     let random=Math.floor(Math.random()*end)+start;
//     return random;
// }

// console.log(generaterandom(1,10));



//but chatgpt gave this



// function generaterandom(start,end){

//     let random=Math.floor(Math.random()*end)+start;
//     return random;
// }

// console.log(generaterandom(1,10));



//assignment write arrow function that returns the square of a number 'n';

// let square=(n)=>{
//     return n**2;
// }

// console.log(square(8));

  //or


//   const square=(n)=>(n*n);


//write a function that prints "Hello Worls" 5 times at intervals of 2s each

// let id=setInterval(function(){
//     console.log("Hello World");
//     if("hello World"*5){
//         clearInterval(id);      //wrong code
//     }
// },2000

// )


// correct code

// let id=setInterval(()=>{    //this is already called function , no need to call it agagin
//     console.log("Hello World");
// },2000); //2s

// setInterval(()=>{
//     clearInterval(id);
//     console.log("clearInterval Ran");
// },10000); //10s

//write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers



// const arrayAverage=(arr)=>{
//     if(arr.length===0){
//         return 0;     //edge case
//     }
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//          sum=sum+arr[i];
         
//     }
//     return (sum/arr.length);
// }

// let arr=[5,5,5,5];
// console.log(arrayAverage(arr));



//write a arrow function named isEven() taht atkes a single number as argument and returns if it is even or not


// const isEven=(n)=>{
//     if(n%2==0){
//         return "event";
//     }
//     else{
//         return "odd";
//     }
// }

// console.log(isEven(5));

//or

// let n=4;
// const isEven=(num)=>n%2==0;

//assignment what is the output of the following code

// const object={
//     message:"Hello,World",

//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000);

//explaination : after a delay of 1sec , undefined is logged to the console.
//while the setTimeout() function uses the object.logMessage as a callback, still,it invokes obejct.logMeaasge as a regular function , rather jthan a method
//And during a rugular function invocation this equals the global object, which is a window in the case of the browser environment
//Thats's why console.log(this.message)inside logMessage method logs window.mesage, which is undefined

//assignment what is the output of the following code:

// let length=4;
// function callback(){
//     console.log(this.length);
// }
// const object={
//     length:5,
//     method(callback){
//         callback();
//     },
// };
// object.method(callback,1,2);

// Explaination:const object = {
//   length: 5,
//   method(callback){
//     callback();   // 👈 called as a normal function
//   },
// };
// Here’s the MOST IMPORTANT part:

// js
// Copy code
// callback();
// It is called as a plain function

// ❌ NOT as object.callback()

// So this is:

// window (in browser, non-strict)

// undefined (in strict mode / Node.js)



//assignemnet check if all the numbers in our array are multiples of 10 or not


// let arr=[10,15,30,40,50];

// let multi=arr.every((ele)=> ele%10==0)
// console.log(multi);


//assignment create a function to find the min number in an array

// let arr=[25,45,86,5,33,47];

// let min= arr.reduce((acc,ele)=>{
//     if(acc<ele){
//       return acc;
//      }
//     else{
//       return ele;
//      }
// })

// console.log(min);

//you can do in this form also, putting everything inside the another function;
//this is the combination of function nad array methods

// function getMin(arr){
//     min= arr.reduce((acc,ele)=>{
//     if(acc<ele){
//       return acc;
//      }
//     else{
//       return ele;
//      }
// });
// return min;
// }
// let min;
// let arr=[25,45,86,33,47];


// console.log(getMin(arr));  //output:25

// console.log(getMin([5,25,60,0,8]));  //output:0;



// assignmnet Square and sum the array elements using the arrow function and then find the average of the array

//wrong code bec you kept squaring teh acc , again and again

// let array=[1,2,3,4,5];

// let res=array.reduce((acc,ele)=>{
//     return (acc**2)+(ele**2);

// })


// console.log(res);



//correct code


// let array = [1,2,3,4,5];

// let sumOfSquares = array.reduce((acc, ele) => {
//   return acc + (ele ** 2);
// }, 0);   // IMPORTANT: initial value = 0

// console.log(sumOfSquares);  // 55

// let average = sumOfSquares / array.length;

// console.log(average);  // 11


//mam's code (first square then sum then average)


// let nums = [1, 2, 3, 4, 5];

// const square = nums.map((num) => num * num);
// console.log(square);

// let sum = square.reduce((acc, cur) => acc + cur, 0);

// let avg = sum / nums.length;
// console.log(avg);


//assignment craete anew array using the map function whose each element is equal to the original element plus 5

// let arr=[1,2,3,4,5];

// let res=arr.map((ele)=>{
//   return ele+5;
// })
// console.log(res);

//assignment create a new array whose elements are in uppercase of words present in the original arary


// let array =["good","kind","care","pure"];

// let new_array=array.map((ele)=>{
//   return ele.toUpperCase();
// });    //this semicolon is very important , or else you find error
// console.log(new_array); 


//you acn write like this also


// let new_array = array.map(ele => ele.toUpperCase());
// console.log(new_array);

//Write a function doubleAndReturnArgs which accepts an array and a variable number of argumnets. The function should return a new array with the original array values and all of the additional argumnets doubled

let  doubleAndReturnArgs=(arr,...args)=>[
  ...arr,
  ...args.map((v)=>v*2),
];

console.log(doubleAndReturnArgs([1,2,3],4,4)); 
console.log(doubleAndReturnArgs([2],10,4));


//explaination



// 3️⃣ Why not just write return?

// You absolutely CAN. Both are correct.

// Version 1 (Implicit return — using [])
// let fn = () => [
//   1, 2, 3
// ];

// Version 2 (Explicit return)
// let fn = () => {
//   return [1, 2, 3];
// };

// So this:

// (arr, ...args) => [
//   ...arr,
//   ...args.map(v => v * 2)
// ]


// means EXACTLY SAME as:

// (arr, ...args) => {
//   return [
//     ...arr,
//     ...args.map(v => v * 2)
//   ];
// }

//assignmnet write afunction called mergeObjects tahat accepts two objects and returns a new object which contains all the keys and values of the first object and second  object



// const mergeObjects=(obj1,obj2)=>({...obj1, ...obj2});

// console.log(mergeObjects({a:1,b:2},{c:3,d:4}));















































