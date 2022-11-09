let spanOre = document.getElementById("ore")
let spanMin = document.getElementById("minuti")
let spanSec = document.getElementById("secondi")

let time = {
    ore: 0,
    min: 0,
    sec: 0
}
if(sessionStorage.getItem("time") != null) {
    time = JSON.parse(sessionStorage.getItem("time"))
    timer()
}

setInterval(timer, 1000)

function timer(){
    time.sec++
    if(time.sec == 60) {
        time.min++
        time.sec = 0
    }
    if(time.min == 60) {
        time.ore++
        time.min = 0
    }
    spanOre.innerText = time.ore
    spanMin.innerText = time.min
    spanSec.innerText = time.sec
    sessionStorage.setItem("time", JSON.stringify(time))
}