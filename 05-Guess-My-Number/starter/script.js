'use strict';


const check=document.querySelector(".check");
const score=document.querySelector(".score");
const highscore=document.querySelector(".highscore");
const number=document.querySelector(".number");
const message=document.querySelector(".message");
const again=document.querySelector(".again");
const style=document.querySelector("body");
// const scretNumber=Number(document.querySelector(".scretNum").innerHTML);
var count=0;
var scretNumber;

function setNum(){
    scretNumber=Math.floor(Math.random()*20);
}

check.addEventListener("click",()=>{
    const guess=Number(document.querySelector(".guess").value);
    count++;
    if(count>=20){
        message.textContent="You lost!"
        
    }
    if(guess==scretNumber){
        number.textContent=scretNumber;
        message.textContent="Correct!"
        style.style.backgroundColor='#222';
    }else{
        score.textContent=20-count;
    }
})
again.addEventListener("click", ()=>{
    message.textContent="Start guessing..."

    setNum();
})