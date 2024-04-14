const choose = ['rock', 'paper', 'scissors']

const input = document.querySelector('input')
const startButton = document.querySelector('#startButton')

let playerPoint = 0
let compPoint = 0

startButton.addEventListener('click', () => {
  if (input.value.trim()) {
    document.querySelector('.playerName').textContent = `${input.value}`
    document.querySelector('.inputContainer').classList.add('d-none')
    document.querySelector('.gameContainer').classList.remove('d-none')
  }

  else {
    document.querySelector('input').classList.add('absolute')
    document.querySelector('.nameP').style.color = "red"
  }
})

function compChooseItem() {
  let item = Math.floor(Math.random() * choose.length)
  return choose[item]
}

function checkWin(playerChoose, compChoose) {
    if (playerChoose == "rock" && compChoose == "scissors" ||
        playerChoose == "paper" && compChoose == "rock" ||
        playerChoose == "scissors" && compChoose == "paper") {

      playerPoint++
      document.querySelector(".playerPoint").innerText = playerPoint
      document.querySelector(".result").textContent = "Win"
      document.querySelector(".result").style.color = "green"
    }

    else if (playerChoose == compChoose) {
      // document.querySelectorAll('.point').style.color = "blue"
      document.querySelector(".result").textContent = "Draw"
      document.querySelector(".result").style.color = "blue"
    }

    else {
      compPoint++
      document.querySelector(".compPoint").textContent = compPoint
      document.querySelector(".result").textContent = "Lose"
      document.querySelector(".result").style.color = "red"
    }
}

function checkIcon(playerChoose, compChoose) {
  document.getElementById("playerSelect").src = `./img/${playerChoose}.png`
  document.getElementById("compSelect").src = `./img/${compChoose}.png`

}

function firstLetterUpper(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

document.querySelector('.buttons').addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    const playerChoose = e.target.id;
    const compChoose = compChooseItem();

    document.querySelector('.playerSelectText').textContent = firstLetterUpper(playerChoose)
    document.querySelector('.compSelectText').textContent = firstLetterUpper(compChoose)

    checkIcon(playerChoose, compChoose)
    checkWin(playerChoose, compChoose);
  }
});