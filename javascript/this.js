//this keyword


// const obj={
//     name:"Namratha",
//     age:22,
//     city:"cbp",
//     info : function(){
//           console.log(`${this.name}'s age is ${this.age} and she is from ${this.city}`);
//     }
// }
// obj.info(); //remember how you are going to call the fumction inside the object



//try and catch 


// console.log("Hello!");
// console.log("Hello!");
// console.log("Hello!");
// try{
// console.log(a);
// }
// catch(err){
//     console.log("caugth an error...a is not defined");
//     console.log(err);
// }
// console.log("happy");
// console.log("happy");
// console.log("happy");

//arrow  function

// const sum=(a,b) => {
//     console.log(a+b);
// }
// sum(1,2);



// const cube=(n) => {
//     return n**3;
    
// }

// let c=cube(2);
// console.log(c);



//setTimeout function (calling setTimeout)



// console.log("hello");

// setTimeout( () => {
//      console.log("Apna college");   
// },4000);

// console.log("Welcome to");
// console.log("Welcome to");

// console.log("Welcome to");

// console.log("Welcome to");



//setInterval (calling setInterval)


// console.log("hello");

// setInterval( () => {
//      console.log("Apna college");   
// },4000);

//understanding "this"  inside the object , inside the normal function , inside the arrow function

const student={
    name:"Namratha",
    age:22,
    city:"cbp",
    prop:this,
    normal_fun:function(){
        console.log(this);
        console.log(this.name);
    },
    arrow_fun:()=>{
        console.log(this);
        console.log(this.marks);

    }
}
// console.log(student);
// console.log(student.name);
console.log(student.normal_fun());
console.log(student.arrow_fun());









