// console.log("foo");
const highBtn = document.querySelector("#highBtn");
const middleBtn = document.querySelector("#middleBtn");
const lowBtn = document.querySelector("#lowBtn");
const mySelect = document.querySelector("#mySelect");
const opponentSelect = document.querySelector("#opponentSelect");
const strikeCounter = document.querySelectorAll("#counter>tbody>tr>th")
let strikeCount = 0;
let ballCount = 0;
let outCount = 0;
let opponentCourse = [];



function playBall(select) {
    
    let opponentRandom = Math.floor(Math.random()*3);
    let randomA = Math.floor(Math.random()*11);


    if (opponentRandom === 0) {
        opponentCourse = "high";
        opponentSelect.value = "高め";
    
    }else if (opponentRandom === 1) {
        opponentCourse = "middle";
        opponentSelect.value = "真ん中";
    
    }else if (opponentRandom === 2) {
        opponentCourse = "low";
        opponentSelect.value = "低め";
    
    }else{
        alert("error");
    }

    if (select === opponentCourse) {
        console.log("hit!!");
    }else{
        console.log("strike!!");
        strikeCount++;
    }
    
    if (strikeCount === 1) {
        strikeCounter[0].classList.add("strike");
    }else if (strikeCount === 2) {
        strikeCounter[1].classList.add("strike");
    }else if (strikeCount >= 3) {
        strikeCount = 0;
        outCount++;
        for(let i = 0; i <= strikeCounter.length; i++){
            strikeCounter[i].classList.remove("strike")
        }
    }

    console.log(strikeCount);
    
}

highBtn.addEventListener("click",()=>{
    playBall("high");
    mySelect.value = "高め";
})

middleBtn.addEventListener("click",()=>{
    playBall("middle");
    mySelect.value = "真ん中";
})
    
lowBtn.addEventListener("click",()=>{
    playBall("low");
    mySelect.value = "低め";
})


