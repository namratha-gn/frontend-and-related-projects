let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h2=document.querySelector("h2");
    let mycolor=randomcolor();
    h2.innerHTML=randomcolor();

    let divi=document.querySelector("div");
    divi.style.backgroundColor=mycolor;

})

function randomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=(`rgb(${red},${green},${blue})`);
    return color;
}