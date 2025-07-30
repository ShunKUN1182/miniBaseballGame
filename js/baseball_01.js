// console.log("foo");
const highBtn = document.querySelector("#highBtn");
const middleBtn = document.querySelector("#middleBtn");
const lowBtn = document.querySelector("#lowBtn");
const mySelect = document.querySelector("#mySelect");
const opponentSelect = document.querySelector("#opponentSelect");
let strikeCount = 0;
let ballCount = 0;
let outCount = 0;
let opponentCourse = [];


// 0を高め、1を真ん中、2を低めとする

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
        opponentCourse = "bottom";
        opponentSelect.value = "低め";
    
    }else{
        alert("error");
    }

    if (select === opponentCourse) {
        console.log("hit!!");
    }else{
        console.log("strike!!");
        strikeCount + 1;
    }
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
    playBall("low")
    mySelect.value = "低め";
})


