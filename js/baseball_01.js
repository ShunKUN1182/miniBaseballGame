// console.log("foo");
const highBtn = document.querySelector("#highBtn");
const middleBtn = document.querySelector("#middleBtn");
const lowBtn = document.querySelector("#lowBtn");
const mySelect = document.querySelector("#mySelect");
const opponentSelect = document.querySelector("#opponentSelect");
const strike1 = document.querySelector("#strike1");


// 0を高め、1を真ん中、2を低めとする


highBtn.addEventListener("click",()=>{

    let opponentRandom = Math.floor(Math.random()*3);
    let randomA = Math.floor(Math.random()*11);
    let opponentCourse = [];

    mySelect.value = "高め";

    if (opponentRandom === 0) {
        opponentCourse = "高め";
        opponentSelect.value = "高め";

    }else if (opponentRandom === 1) {
        opponentCourse = "真ん中";
        opponentSelect.value = "真ん中";

    }else if (opponentRandom === 2) {
        opponentCourse = "低め";
        opponentSelect.value = "低め";

    }else{
        alert("error");
    }
    
    if (opponentCourse === "高め") {
        if (randomA <= 3) {
            console.log("ボール");
        }else if (randomA <= 6) {
            console.log("ボール");
        }else if (randomA <=7) {
            console.log("ホームラン");
        }else if (randomA <= 9) {
            console.log("ヒット");
        }else if (randomA <=10) {
            console.log("アウト");
        }
        }else{
            if(randomA <= 3) {
            console.log("ストライク");
        }else if (randomA <= 6) {
            console.log("アウト");
        }else if (randomA <=9) {
            console.log("ストライク");
        }else{
            console.log("ボール");
        }
    }
})


middleBtn.addEventListener("click",()=>{

    let opponentRandom = Math.floor(Math.random()*3);
    let randomA = Math.floor(Math.random()*11);
    let opponentCourse = [];

    mySelect.value = "真ん中";

    if (opponentRandom === 0) {
        opponentCourse = "高め";
        opponentSelect.value = "高め";
    }else if (opponentRandom === 1) {
        opponentCourse = "真ん中";
        opponentSelect.value = "真ん中";
    }else if (opponentRandom === 2) {
        opponentCourse = "低め";
        opponentSelect.value = "低め";
    }else{
        alert("error");
    }
    
    if (opponentCourse === "真ん中") {
        if (randomA <= 3) {
            console.log("ボール");
        }else if (randomA <= 6) {
            console.log("アウト");
        }else if (randomA <=7) {
            console.log("ホームラン");
        }else if (randomA <= 9) {
            console.log("ヒット");
        }else if (randomA <=10) {
            console.log("ツーベース");
        }
        }else{
            if(randomA <= 3) {
            console.log("ストライク");
        }else if (randomA <= 6) {
            console.log("ボール");
        }else if (randomA <=9) {
            console.log("ストライク");
        }else{
            console.log("アウト");
        }
    }
})



lowBtn.addEventListener("click",()=>{

    let opponentRandom = Math.floor(Math.random()*3);
    let randomA = Math.floor(Math.random()*11);
    let opponentCourse = [];

    mySelect.value = "低め";

    if (opponentRandom === 0) {
        opponentCourse = "高め";
        opponentSelect.value = "高め";

    }else if (opponentRandom === 1) {
        opponentCourse = "真ん中";
        opponentSelect.value = "真ん中";
    }else if (opponentRandom === 2) {
        opponentCourse = "低め";
        opponentSelect.value = "低め";
    }else{
        alert("error");
    }
    
    if (opponentCourse === "低め") {
        if (randomA <= 3) {
            console.log("ボール");
        }else if (randomA <= 6) {
            console.log("ボール");
        }else if (randomA <=7) {
            console.log("ホームラン");
        }else if (randomA <= 9) {
            console.log("ヒット");
        }else if (randomA <=10) {
            console.log("アウト");
        }
        }else{
            if(randomA <= 3) {
            console.log("ストライク");
        }else if (randomA <= 6) {
            console.log("アウト");
        }else if (randomA <=9) {
            console.log("ストライク");
        }else{
            console.log("ボール");
        }
    }
})