let homeCount = 0
let guestCount = 0

const home = document.getElementById("home-score")
const guest = document.getElementById("guest-score")

function addScore(team, points) {
  if (team === "home") {
    homeCount += points
    home.textContent = homeCount
  } else {
    guestCount += points
    guest.textContent = guestCount
  }
}

function newGame() {
  homeCount = 0
  guestCount = 0
  home.textContent = 0
  guest.textContent = 0
}

document.querySelectorAll(".score-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    addScore(btn.dataset.team, Number(btn.dataset.points))
  })
})
