document.getElementById("wins").innerHTML = "Wins: " + localStorage.wincount
document.getElementById("lose").innerHTML = "Loses: " + localStorage.losecount
document.getElementById("draw").innerHTML = "Draws: " + localStorage.drawcount
console.log(localStorage.wincount, localStorage.losecount, localStorage.drawcount)

if (localStorage.choise == "papier") {
    document.getElementById("keuze").className += "fa-solid fa-hand"
} else if (localStorage.choise == "steen") {
    document.getElementById("keuze").className += "fa-solid fa-hand-back-fist"
} else if (localStorage.choise == "schaar") {
    document.getElementById("keuze").className += "fa-solid fa-hand-scissors"
}

if (localStorage.randomchoise == "papier") {
    document.getElementById("randomkeuze").className += "fa-solid fa-hand"
} else if (localStorage.randomchoise == "steen") {
    document.getElementById("randomkeuze").className += "fa-solid fa-hand-back-fist"
} else if (localStorage.randomchoise == "schaar") {
    document.getElementById("randomkeuze").className += "fa-solid fa-hand-scissors"
}

if (localStorage.randomchoise == localStorage.choise) {
    document.getElementById("result").innerHTML = "DRAW";
} else if (localStorage.choise == "papier" && localStorage.randomchoise == "steen" || localStorage.choise == "schaar" && localStorage.randomchoise == "papier" || localStorage.choise == "steen" && localStorage.randomchoise == "schaar") {
    document.getElementById("result").innerHTML = "YOU WIN";
} else {
    document.getElementById("result").innerHTML = "YOU LOSE";
}

localStorage.choise = null
localStorage.randomchoise = null

function resetCounters() {
    localStorage.wincount = 0;
    localStorage.losecount = 0;
    localStorage.drawcount = 0;
    document.getElementById("wins").innerHTML = "Wins: " + localStorage.wincount
    document.getElementById("lose").innerHTML = "Loses: " + localStorage.losecount
    document.getElementById("draw").innerHTML = "Draws: " + localStorage.drawcount
}