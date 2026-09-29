let scoreHome = 0
let scoreGuest = 0
let undoHome = 0
let undoGuest = 0
let displayHome = document.getElementById("score-home")
let displayGuest = document.getElementById("score-guest")

function add1home() {
  undoHome = scoreHome
  scoreHome += 1
  displayHome.textContent = scoreHome  
}
function add2home() {
  undoHome = scoreHome
  scoreHome += 2
  displayHome.textContent = scoreHome  
}
function add3home() {
  undoHome = scoreHome
  scoreHome += 3
  displayHome.textContent = scoreHome  
}
function undohome() {
  scoreHome = undoHome
  displayHome.textContent = scoreHome
}

function add1guest() {
  undoGuest = scoreGuest
  scoreGuest += 1
  displayGuest.textContent = scoreGuest 
}
function add2guest() {
  undoGuest = scoreGuest
  scoreGuest += 2
  displayGuest.textContent = scoreGuest 
}
function add3guest() {
  undoGuest = scoreGuest
  scoreGuest += 3
  displayGuest.textContent = scoreGuest 
}
function undoguest() {
  scoreGuest = undoGuest
  displayGuest.textContent = scoreGuest
}

function newgame() {
  scoreHome = 0
  scoreGuest = 0
  displayHome.textContent = scoreHome
  displayGuest.textContent = scoreGuest
}