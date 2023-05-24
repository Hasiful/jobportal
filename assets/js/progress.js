// progress bar

const progress = document.getElementById("resume_progress")
const progressValue = document.getElementById("resume_progressvalue")

let startValue = 0
let endValue = 90
let Speed = 20

let progressBar = setInterval(() => {
    startValue++;
    progressValue.innerText = `${startValue}%`
    progress.style.cssText = `background: conic-gradient(var(--mainColor) ${startValue * 3.6}deg, var(--bgColor) 0deg)`
    if(startValue == endValue){
        clearInterval(progressBar)
    }
}, Speed);