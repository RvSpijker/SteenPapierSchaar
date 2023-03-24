if (localStorage.wincount == undefined) {
localStorage.wincount = 0;
localStorage.losecount = 0;
localStorage.drawcount = 0;
}

//de win lose en draw count laten zien
document.getElementById("wins").innerHTML = "Wins: " + localStorage.wincount
document.getElementById("lose").innerHTML = "Loses: " + localStorage.losecount
document.getElementById("draw").innerHTML = "Draws: " + localStorage.drawcount
console.log(localStorage.wincount, localStorage.losecount, localStorage.drawcount)

//er voor zorgen dat je steen papier of schaar kan droppen
function allowDrop(ev) {
ev.preventDefault();
}

//wanner je steen sleept:
function dragr(ev) {
ev.dataTransfer.setData("text", ev.target.id); //er voor zorgen dat je steen kan slepen
//in de console laten zien wat er gekozen is
localStorage.choise = "steen" 
console.log(localStorag.choise)
}

//wanner je papier sleept:
function dragp(ev) {
ev.dataTransfer.setData("text", ev.target.id); //er voor zorgen dat je papier kan slepen
//in de console laten zien wat er gekozen is
localStorage.choise = "papier" 
console.log(localStorage.choise)
}

//wanner je schaar sleept:
function drags(ev) {
ev.dataTransfer.setData("text", ev.target.id); //er voor zorgen dat je schaar kan slepen
//in de console laten zien wat er gekozen is
localStorage.choise = "schaar" 
console.log(localStorage.choise)
}

// wanner je steen papier of schaar los laat op het vakje:
function drop(ev) {
ev.preventDefault();
var data = ev.dataTransfer.getData("text");
ev.target.appendChild(document.getElementById(data));
var i = Math.floor(Math.random()*(3));
if (i == 0) {
    localStorage.randomchoise = "steen"
}
if (i == 1) {
    localStorage.randomchoise = "papier"
}
if (i == 2) {
    localStorage.randomchoise = "schaar"
}
if (localStorage.randomchoise == localStorage.choise) {
    drawCounter()
} else if (localStorage.choise == "papier" && localStorage.randomchoise == "steen" || localStorage.choise == "schaar" && localStorage.randomchoise == "papier" || localStorage.choise == "steen" && localStorage.randomchoise == "schaar") {
    winCounter()
} else {
    loseCounter()
}
window.location.href = "./wld.html";
return false;
}

function winCounter() {
    localStorage.wincount++;
    console.log(localStorage.wincount)
    document.getElementById("wins").innerHTML = "Wins: " + localStorage.wincount
}

function loseCounter() {
    localStorage.losecount++;
    console.log(localStorage.losecount)
    document.getElementById("lose").innerHTML = "Loses: " + localStorage.losecount
}

function drawCounter() {
    localStorage.drawcount++;
    console.log(localStorage.drawcount)
    document.getElementById("draw").innerHTML = "Draws: " + localStorage.drawcount
}

function resetCounters() {
    localStorage.wincount = 0
    localStorage.losecount = 0;
    localStorage.drawcount = 0;
    document.getElementById("wins").innerHTML = "Wins: " + localStorage.wincount
    document.getElementById("lose").innerHTML = "Loses: " + localStorage.losecount
    document.getElementById("draw").innerHTML = "Draws: " + localStorage.drawcount
}