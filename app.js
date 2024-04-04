  let gameSeq=[];
  let userSeq=[];

  let btns = ["yellow","red","green","purple"];
  
  let start=false;
  let level= 0;

  let h2=document.querySelector("h2");
 
  document.addEventListener("keypress",function(){
    if(start==false)
    console.log("game started");
    start=true;

    levelup();

  });
 
  //button flash karne ke liye button me pehle flash class
  //add hogi fir timeout function call hoga oor 1 seconf ke bad remove ho jayga 
  //oor fir se original color aa jayga
  function btnFlash(btn)
  {
   btn.classList.add("flash"); 
   setTimeout(function()
   {
    btn.classList.remove("flash");

   },1000);
  }

  function levelup(){
    userSeq=[];
    level++;
    
    h2.innerText=`Level ${level}`;
   
    //choosing random button
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randColor);
    // console.log(randIdx);
    btnFlash(randBtn);
  }

  function checkAns(idx){
if(userSeq[idx]===gameSeq[idx])
{
if(userSeq.length == gameSeq.length){
    setTimeout(levelup,2000);
    
}
}
else{
    
    h2.innerHTML=`Game Over ! Your Score was <b>${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";

    },150);
    reset();
}


  }

  function btnPress(){
    let btn =this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);

   
  }

  let allBtns=document.querySelectorAll(".btn");
 
  for(btn of allBtns)
  {
    btn.addEventListener("click",btnPress);
  }

  //functionreset

  function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;

  }