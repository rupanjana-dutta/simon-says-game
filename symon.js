let gameSeq=[];
let userSeq=[];

let btns=["red", "yellow", "green", "purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

let body=document.querySelector("body");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game has been started");
        started=true;

        levelUp();
    }
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //first choose any random btn
    let ranIdx = Math.floor(Math.random() * 3);
    let randColor=btns[ranIdx];
    gameSeq.push(randColor);
    // console.log(gameSeq);
    let ranBtn=document.querySelector(`.${randColor}`);

    btnFlash(ranBtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function btnPress(){
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkColor(userSeq.length - 1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function checkColor(idx){
     if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            console.log("correct color");
            setTimeout(levelUp,1000);
        }
        
    }else{
         body.classList.add("bgRed");
         setTimeout(function(){
            body.classList.remove("bgRed");
        },250);
         h2.innerHTML=`Game Over! Your Score is <b> ${level} </b> <br> Press any key to start again`;
        
         reset();
    } 
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}