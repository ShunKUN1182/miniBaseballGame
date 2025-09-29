// console.log("foo");
const highBtn = document.querySelector("#highBtn");
const middleBtn = document.querySelector("#middleBtn");
const lowBtn = document.querySelector("#lowBtn");
const mySelect = document.querySelector("#mySelect");
const opponentSelect = document.querySelector("#opponentSelect");
const strikeCounter = document.querySelectorAll("#counter>tbody>tr>th");
const outCounter = document.querySelectorAll("#counter>tfoot>tr>th");
const result = document.querySelector("#result");
let strikeCount = 0;
let ballCount = 0;
let outCount = 0;
let opponentCourse = [];

// console.log(outCounter);


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
        // console.log("hit!!");
        result.value = "ヒット！！";
        strikeCount = 0;
        for(let k = 0; k => strikeCounter.length; k++){
            strikeCounter[k].classList.remove("strike");
        }

    }else{
        // console.log("strike!!");
        result.value = "空振り！！";
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
            strikeCounter[i].classList.remove("strike");
            if (outCount === 1) {
                outCounter[0].classList.add("out");
            }else if (outCount === 2) {
                outCounter[1].classList.add("out");
            }else if (outCount => 3){
                for(let j = 0; j<=outCounter.length; j++){
                    outCounter[j].classList.remove("out");
                }
            }
        }
    }


}



highBtn.addEventListener("click",()=>{
    mySelect.value = "高め";
    playBall("high");
});

middleBtn.addEventListener("click",()=>{
    mySelect.value = "真ん中";
    playBall("middle");
});
    
lowBtn.addEventListener("click",()=>{
    mySelect.value = "低め";
    playBall("low");
});


