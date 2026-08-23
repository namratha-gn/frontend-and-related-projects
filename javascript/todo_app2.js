//This code adds what you have  written in the input to all the list item


// let input=document.querySelector("input");
// let button=document.querySelector("button")


// button.addEventListener("click",function(){
//     let li=document.querySelectorAll("ul li")
//     for(items of li){
//         items.innerText=input.value;    
//     }
// })


//thsi will add the inout value to the first list item only


// let input=document.querySelector("input");
// let button=document.querySelector("button");
// let li=document.querySelector("li");

// button.addEventListener("click",function(){
//     li.innerText=input.value;
//     input.value="";

// })

//thsi will create ul nad li each tiem you type and  click the button
//but i wnat only li to craete each tiem and add whta i have written inside the input


// let input=document.querySelector("input");
// let button=document.querySelector("button");
// button.addEventListener("click",function(){
//     let ul=document.createElement("ul");
//     let body=document.querySelector("body");
//     body.appendChild(ul);
//     let li=document.createElement("li");
//     ul.appendChild(li);
//     li.innerText=input.value;
//     input.value="";
// });



let ul=document.querySelector("ul");
let input=document.querySelector("input");
let button=document.querySelector("button");

button.addEventListener("click",function(){
       let item=document.createElement("li");
       ul.appendChild(item);
       item.innerText=input.value;

      
       let del=document.createElement("button");
       del.classList.add("delete")
       item.appendChild(del);
       del.innerText="delete";
       input.value="";



});

//👉 Event listeners work for BOTH:

// ✅ HTML buttons
// ✅ JS-created buttons

// BUT ONLY IF:

// 👉 The element exists when you attach the event listener.

//see here you are attaching the event listener to del, but del is not existing here ...it was created in another listener , ehen younvlick taht listerner works there del is craeted ...but now i am clicking this  ...this but del doesnot exist here 


//this below code will not work because  you are attaching the evenListener to new button(or element) that you have created

// let dels=document.querySelectorAll(".delete");
// for( del of dels){
//     del.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
       
//     });
// }

//using event deligation(with the help of concept element bubbling)

ul.addEventListener("click",function(event){
    console.log(event.target);


    // console.log(event.target);  //event.target tells that which button you specifically pressed among many buttons...which button you are targetting to
    // console.dir(event.target.nodeName);  //thsi nodeNmae tells which element go triggered , whether it is h1, button, para...etc...
    // //if you click on li , then as output you will get li for nodename

    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
          listItem.remove();
          console.log("deleted");

    }
    
    
})

