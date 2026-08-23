// let btns=document.querySelectorAll("button");
// for(but of btns){
//     // but.onclick=sayexecute;
//     // but.onclick=saybye;

//     // but.addEventListener("click", sayexecute);
//     // but.addEventListener("click", saybye);
//     but.addEventListener("dblclick",function(){
//         alert("you clicked twice");
//     })

// }

// function sayexecute(){
//     alert("you clicked ");
// }
// function saybye(){
//     alert("you hovered on me!");
// }


//"this" concept

// let h1=document.querySelector("h1");
// let para=document.querySelector("p");
// let h2=document.querySelector("h2");
// let button=document.querySelector("button");

// h1.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor="blue";
// })
// para.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor="blue";
// })
// h2.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor="blue";
// })
// button.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor="blue";
// });


//Or


// function selectColor(){
//     this.style.backgroundColor="blue";
// }


// h1.addEventListener('click',selectColor);
// para.addEventListener('click',selectColor);
// h2.addEventListener('click',selectColor);
// button.addEventListener('click',selectColor);

// h1.addEventListener("click",function(){
//     console.log(event);
//     this.style.backgroundColor="blue";
// })

//keyboard events concept

// let input=document.querySelector("input");
// input.addEventListener("keydown",function(event){
//         console.log(event.key);
//         console.log("key pressed");
// })
  

//MOVING UP,DOWN,LEFT,RIGHT game


// let input=document.querySelector("input")

// input.addEventListener("keydown",function(event){
//    if(event.key=="ArrowUp"){
//     console.log(event.key);
//     console.log("you moved forward");
//    }
//    else if(event.key=="ArrowDown"){
//     console.log(event.key);
//      console.log("you moved backward");
//    }
//    else if(event.key=="ArrowLeft"){
//     console.log(event.key);
//     console.log("you moved left")
//    }
//    else if(event.key=="ArrowRight"){
//     console.log(event.key);
//     console.log("you moved right");
//    }
// })

//events on form

// let form=document.querySelector("form")

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log(alert("data submitted"));

// })

//extracting the  data from the form

// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//        event.preventDefault();
//        let input=document.querySelector("input");
//        console.log(input.value);
// });

//instead of using document.querySelector......use form.element

// let input=document.querySelector("input");
// input.addEventListener("change",function(event){
//     event.preventDefault();
//     let input=form.element[0];
//     console.log(input.value);
// })


//mouseout event
// let para=document.querySelector("p");
// para.addEventListener("mouseout",function(){
//     console.log("mouseout event");
//     this.style.backgroundColor="blue";  
// })

//keypress

// let input=document.querySelector("input");
// input.addEventListener("keypress",function(event){
//         console.log("key pressed");
//         console.log(event.key);
// })

//scroll
// let divi=document.querySelector("div");
// let para=document.querySelector("p");
// para.addEventListener("scroll",function(){
//     console.log("scroll");
//     divi.style.backgroundColor="blue";  
// })

//craeting teh buton using  js

// let btn=document.createElement("button");
// let body=document.querySelector("body   ")
// body.appendChild(btn);

// btn.addEventListener("click",function(){
//     btn.classList.add("click");

// })

let h1=document.querySelector("h1");
let input=document.querySelector("input");

input.addEventListener("input",function(){
    h1.innerText=input.value;
    console.log(input.value)
})




