let spanOre = document.getElementById("ore")
let spanMin = document.getElementById("minuti")
let spanSec = document.getElementById("secondi")

let sec = 0
let min = 0
let ore = 0
if(sessionStorage.getItem("min") != null && sessionStorage.getItem("ore") != null && sessionStorage.getItem("sec") != null) {
    sec = sessionStorage.getItem("sec")
    min = sessionStorage.getItem("min")
    ore = sessionStorage.getItem("ore")
}

setInterval(()=>{
    sec++
    if(sec == 60) {
        min++
        sec = 0
    }
    if(min == 60) {
        ore++
        min = 0
    }
    spanOre.innerText = ore
    spanMin.innerText = min
    spanSec.innerText = sec
    sessionStorage.setItem("sec", sec)
    sessionStorage.setItem("min", min)
    sessionStorage.setItem("ore", ore)
}, 1000)


///FORM
let input = document.getElementById("input")

input.value = sessionStorage.getItem("input")

input.addEventListener("keydown", (e)=>{
    console.log(e);
    sessionStorage.setItem("input", e.target.value)
})

//VIDEO
let video = document.getElementById("video")

let msVisti = localStorage.getItem("msVisti")
if(msVisti != null) {
    video.addEventListener("play", ()=>{
        video.currentTime = parseFloat(msVisti)
    })
}

setInterval(()=>{
    console.log(video.currentTime);
    localStorage.setItem("msVisti", video.currentTime)
}, 2000)


//
// function trigger(f){
//     console.log(f);
//     f(5)
// }

// function ciao(x) {
//     console.log("CIAO", x);
// }

// ciao
// ()=>{}
// function(){}

// ciao()
// (()=>{})()
// (function(){})()