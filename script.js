let clock = document.querySelector(".clock")
let set = document.querySelector(".btn")
let stop = document.querySelector(".stop")
let span = document.querySelector("span")

let alarm = ""
set.addEventListener("click", function(){
    let hh = document.querySelector(".hh").value
    let mm = document.querySelector(".mm").value
    let ss = document.querySelector(".ss").value

    if (hh != "" && mm != "" && ss != "") {
        alarm = `${hh}:${mm}:${ss}`
        span.innerHTML = `BUDILNIK ${alarm} DA O'RNATILDI`
        span.style.transform = "translateX(0)"
        setTimeout(function() {
            span.style.transform = "translateX(-300px)"
        }, 3000)
    }

})

let audio = new Audio("./music.mp3")

setInterval(function(){
    let date = new Date().toLocaleTimeString()
    clock.innerHTML = date
    if (date == alarm) {
        audio.play()
        span.style.backgroundColor = "red"
        span.innerHTML = "UYG'ONING. VAQT BO'LDI"
        span.style.transform = "translateX(0px)"
    }
}, 1000)

stop.addEventListener("click", function(){
    audio.pause()
    audio.currentTime = 0
    alarm = ''
    span.style.transform = "translateX(-300px)"
    span.style.backgroundColor = "black"
})






