const textE1 = document.getElementById('text')
const speedE1 = document.getElementById('speed')
const text = 'Welcome!'
let idx = 1
let speed = 100

writeText()

function writeText() {
    textE1.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length){
        idx = 1
    }

    setTimeout(writeText, speed)
}

