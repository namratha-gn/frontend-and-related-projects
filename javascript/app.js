// console.log("Hello World");
// console.log("NamrathaNagaraj!!!")
// let a=10;
// let b=5;
// console.log("sum is:",a+b);

// let pencilPrice=10;
// let penPrice=5;
// console.log(`Total price: ${pencilPrice+penPrice}rupees.`)

// let age=18;
// console.log(age>18);

//conditional statements

// let name="Bhuvan";
// if(name=="NamrathaNagaraj"){
//     console.log(`welcome ${name}`);
// }
// console.log("its an end bhaiiii");

//trafic light question using if else statement

// let color="green";
// if (color=="green"){
//     console.log("Please MOVE");
// }
// else if(color=="red"){
//    console.log("Please STOP");
// }
// else if(color=="yellow") {
//      console.log("Please wait");
// }

// let marks=99;
// if(marks>=80){
//     console.log("A+");
// }
// else if(marks>=60){
//     console.log("A")
// }
// else if(marks>=50){
//     console.log("B+")
// }
// else{
//     console.log("B")
// }

// let month="jan";

// if(month=="jan"){
//     console.log("Winter is here....chill karo bhaiiii")
// }
// else if (month=="april"){
//     console.log("Summer is here.......")
// }

//popcorn

// let popcorn="S";

// if(popcorn=="XL"){
//     console.log(`pay Rs.250 for ${popcorn} size poorpcorn`);
// }
// else if(popcorn=="L"){
//     console.log(`pay Rs.200 for ${popcorn} size poorpcn`);
// }
// else if(popcorn=="M"){
//     console.log(`pay Rs.100 for ${popcorn} size poorpcn`);
// }
// else if(popcorn=="S"){
//     console.log(`pay Rs.50 for ${popcorn} size poorpcn`);
// }
// else{
//     console.log(`Sorry , popcorn is not there`);
// }

//Example for nexted if else 

// let marks=100;

// if(marks>=33){
//     console.log(`You are passed with ${marks} marks`);
//     if(marks>=80){
//         console.log(`and You are in the rank list...Congratulations!!`);
//     }
//     else{
//         console.log(`and You are not  in the rank list`);
//     }

// }
// else{
//    console.log(`Better luch next time`);
// }

// //good string , bad string program

// let string="axe";
// let strlen=string.length;

// if(string[0]=="a" && strlen>3){
//     console.log("Good string");
// }
// else if(string[0]=="a" && strlen<3){
//     console.log("bad string");
// }
// else if(string[0]!="a" && strlen>3){
//     console.log("bad string");
// }
// else{
//     console.log("bad string");
// }

// //truey and falsy

// if(true){
//     console.log("It has true value");
// }
// else{
//     console.log("It has false value");
// }


// if(false){
//     console.log("It has true value");
// }
// else{
//     console.log("It has false value");
// }

// if(1){           //bec 1 means true only so if part got executed
//     console.log("It has true value");
// }
// else{
//     console.log("It has false value");
// }

// if(0){       //bec 0 means false only so else part got executed
//     console.log("It has true value");
// }
// else{
//     console.log("It has false value");
// }

// if(""){    //string without space will give you false value , string with space(has soemthing inside it ) will give you the true value
//     console.log("It has true value");
// }
// else{
//     console.log("It has false value");
// }

// if("namratha"){    //you are getting true value , bec you ahve soemthing insid the string , it is not null
//     console.log("It has true value");
// }
// else{
//     console.log("It has false value");
// }

// if(null){      //null avlue leads to false 
//     console.log("It has true value");
// }
// else{
//     console.log("It has false value");
// }

// if(undefined){   //undefined leads to false
//     console.log("It has true value");
// }
// else{
//     console.log("It has false value");
// }

//observe this code

// let str=" ";
// if(str){
//     console.log(" string is not empty");
// }
// else{
//     console.log("string is empty");
// }

// let num=0;
// if(num){
//     console.log("It has true value");
// }
// else{
//     console.log("It has false value");
// }
//switvh statement

// let song="vinaayaka";

// switch(song){
//     case "govinda":
//         console.log("narayanma bajhe narayanam lakshmi narayanam bajhe narayanam");
//         break;
//     case "krishna":
//         console.log("shree krishna govinda hareee muraari heyy naatha naarayana vaasu deva");
//         break;
//     case "shiva":
//         console.log("nagendra haraaya thrilochanaya basmangaragaaya maheshwaraya nithyaya shuddaya dhigambaraaya thasmaina karaaya namah shivaaya");
//         break;
//     case "anjaneya":
//         console.log("ohm sri konenahalliya anjaneya swami prasanna, hari sarvottama vaayu jeevottama hari sarvottama vaayu jeevottama");
//         break;
//     case "hayagreeva":
//         console.log("jnananadamayam devam nirmala spatika kruthim aadaaram sarva vishyanam hayagreevam upasmahe");
//         break;
//     default:
//         console.log("mudhaakaraatha modhakam sadaavimukthi saadakam kalaadaraava thamsakam vilaasiloka rakshakam , anaayakaika naayakam vilaasi theba daithaykam nathaashu bhaasu naashakam namaamitham vinaayakam , jaya ganesha jaya ganesha jaya ganesha paahimam jaya ganesha jaya ganesha jaya ganesha  rakshamam");

// }

//example of switch

// let day=5;
// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("Error");
// }

//alert

// alert("Something is wrong!!");
// alert("be carefull!!");

//.log
// console.log("this is a simple msg");

//.error
// console.error("this is a simple error msg");

//.warning
// console.warn("this is the warning msg");

//prompt
// prompt("enter you name");

// let name=prompt("enter your name");
// console.log(name);

//prompt

// let firstname=prompt("enter your first name");
// let sirname=prompt("enter your sir name");
// let name=firstname+sirname;
// console.log(name);

//alert and prompt combination

// let firstname=prompt("enter your firstname");
// let lastname=prompt("enter your lastname");
// let msg=firstname+lastname;
// alert(msg);

//trim() method ir function[it is astring method]

// let msg="   he      llo   ";
// console.log(msg.trim());

// let password =prompt("Enter your password");
// console.log(password.trim());

// let name="      apana         college";
// console.log(name.trim());
// console.log(name);

// let name="namrtha";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

//indexOf

// let str="ILoveCoding";
// console.log(str.indexOf("Love"));
// console.log(str.indexOf("j"));

 //slice()

//  let msg="Ilovecoding";
//  console.log(msg.slice(-10,5));

 //replace()

//  let msg="Ilovecoding";
//  console.log(msg.replace("love","do"));

 //repeat()

//  let msg="happy ";
//  console.log(msg.repeat(5));

//array

// let marks=[22,56,9,24];
// console.log(marks);
// console.log(marks[0]);                //accessing fisrt value
// console.log(marks[marks.length-1]);   //accessing last value
// console.log(marks[marks.length]);     //gets undefined

//mixed array
// let info=["namrtha",25,4.25] ;
// console.log(info);

//empty array
// let arr=[];


//

// let fruits=["apple","mango","Pineapple"];
// console.log(fruits[1]);
// fruits[1]="orange";
// console.log(fruits);
// fruits[25]="guava";
// console.log(fruits);

//array methods

let cars=["maruthi800","venue","BMW","Fortuner"];
// cars.push="benz";   //this is teh wrong method 

cars.push("benz");   //thsi is the correct method
console.log(cars);
cars.pop();
console.log(cars);

//eaxmple for shift (I want to block someone and I wnat to see whom i have blocked tehn we use shift )

let followers=['a','b','c'];
let blocked=followers.shift();
console.log(followers);
console.log(blocked);

//indexof method

// let start=['january','july','march','august'];
// console.log(start.indexOf("augusT"));

//includes method

// let start=['january','july','march','august'];
// console.log(start.includes("march"));

//concat method
// let primary=['red','blue','violet'];
// let secondary=['green','pink','yellow'];
// console.log(primary.concat(secondary));

//reverse method

// console.log(primary.reverse());

//slice method

// let primary=['red','blue','violet'];
// console.log(primary.slice());
// console.log(primary.slice(-2));
// console.log(primary.slice(1,3))

//splice method

// let start=['january','july','march','august'];

// console.log(start.splice(2,2,"april","may"));
// console.log(start)
// console.log(start.splice(1,1,"monday"));
// console.log(start)

//array reference

// let arr=['a','b','c'];
// let arrcopy=arr;
// console.log(arr==arrcopy);

// console.log(arr,arrcopy);
// console.log(arr.push("d"));
// console.log(arr,arrcopy);
// arrcopy=['a','b','c','d']
// console.log(arr,arrcopy);
// console.log(arr==arrcopy);

//nested array

let nums=[[2,4],[3,6],[4,8]];
console.log(nums)

