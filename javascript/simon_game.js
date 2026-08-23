let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","purple","green"];

let start=false;
let level=0;
let h2=document.querySelector("h2")



    document.addEventListener("keypress",function(){  //this says ,type any key in the keyboard keeping cursor on the white screen then start the game
    // console.log("game started");   //if you write this line, it is mistake , bec if anyone keep pressing any key then it will keep printing "game started" mutiple times...taht should never happen , one time keypress one time one time print then stop
    if(start==false){                //I want it to execute only only once
        console.log("Game started");
        start=true;

        levelUp();

   }
});

  function gameFlash(btn){
     btn.classList.add("gameflash");    //this btn is different (ahve its own  function scope , no merging with btn of other function)
    setTimeout(function(){
        btn.classList.remove("gameflash");
     },500);
  }

   function userFlash(btn){
     btn.classList.add("userflash");    //this btn is different (ahve its own  function scope , no merging with btn of other function)
    setTimeout(function(){
        btn.classList.remove("userflash");
     },250);
  }

function levelUp(){
    userSeq=[];
    level++;       //assume that level only number
    h2.innerText=`Level ${level}`;

    //generating random buttons
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`); //you can access through the class also like .btns[randIdx]
    console.log(randIdx);
    gameSeq.push(randColor);
    console.log("Game Sequence=",gameSeq); //if you use `game seq=${gameSeq}....then it will not work` 
    gameFlash(randBtn);

};
 function checkAns(idx){
    
    if(userSeq[idx]===gameSeq[idx]){     //check both the colors are same??
        if(userSeq.length===gameSeq.length){    //checks if both teh lengths are same..if lengths are same go to next level 
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
              document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
        
    }

 }

function btnPress(){
    // console.log(this);
    let btn=this;       //this btn is different (ahve its own  function scope , no merging with btn of other function)
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log("User Sequence =",userSeq);
    checkAns(userSeq.length-1);
}  

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}