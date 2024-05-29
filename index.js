let winEl = document.getElementById("win-el")
let lossEl = document.getElementById("loss-el")
let recEl = document.getElementById("record-el")
let wins = 0
let losses = 0

function win() {
    wins += 1
    winEl.textContent = wins
    recEl.textContent += " win"
}

function loss() {
    losses += 1
    lossEl.textContent = losses
    recEl.textContent += " loss"
}


