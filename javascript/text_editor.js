let h1=document.querySelector("h1");
h1.classList.add("heading");

let input=document.querySelector("input");
input.addEventListener("input",function(){
    console.log(this.value);
    let para=document.querySelector("p");
    para.innerText=input.value;
})