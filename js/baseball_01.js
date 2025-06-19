// console.log("foo");
const highBtn = document.querySelector("#highBtn");
const middleBtn = document.querySelector("#middleBtn");
const lowBtn = document.querySelector("#lowBtn");

let opponentRandom = Math.floor(Math.random()*3);
let randomA = Math.floor(Math.random()*11);
let opponentCourse = [];



// 0を高め、1を真ん中、2を低めとする

if (opponentRandom === 0) {
    opponentCourse = "高め"
}else if (opponentRandom === 1) {
    opponentCourse = "真ん中"
}else if (opponentRandom === 2) {
    opponentCourse = "低め"
}else{
    alert("error");
}

highBtn.addEventListener("click",()=>{
    if (opponentCourse === "高め") {
        console.log("hit");
    }else{
        if (randomA <= 3) {
            
        }
    }
})
