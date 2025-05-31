document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const playerNameInput = document.getElementById('playerName');
  const startGameBtn = document.getElementById('startGame');
  const gameSection = document.querySelector('.game');
  const choices = document.querySelectorAll('.choice');
  const resultText = document.getElementById('resultText');
  const playerScoreDisplay = document.getElementById('playerScore');
  const computerScoreDisplay = document.getElementById('computerScore');

  let playerName = 'Player';
  let playerScore = 0;
  let computerScore = 0;

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  startGameBtn.addEventListener('click', () => {
    playerName = playerNameInput.value.trim() || 'Player';
    playerScore = 0;
    computerScore = 0;
    updateScores();
    gameSection.style.display = 'block';
    resultText.textContent = `Let's gooo, ${playerName}! 🚀`;
  });

  choices.forEach(choice => {
    choice.addEventListener('click', () => {
      const playerChoice = choice.dataset.choice;
      const computerChoice = getComputerChoice();
      const winner = determineWinner(playerChoice, computerChoice);
      displayResult(playerChoice, computerChoice, winner);
      updateScores();
    });
  });

  function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
  }

  function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      playerScore++;
      return 'player';
    } else {
      computerScore++;
      return 'computer';
    }
  }

  function displayResult(player, computer, winner) {
    let message = `${playerName} chose ${player} | Computer chose ${computer}. `;
    if (winner === 'draw') {
      message += "It's a tie! 🤝";
    } else if (winner === 'player') {
      message += `${playerName} wins! 🎉`;
    } else {
      message += 'Computer wins! 💻';
    }
    resultText.textContent = message;
  }

  function updateScores() {
    playerScoreDisplay.textContent = `👤 ${playerName}: ${playerScore}`;
    computerScoreDisplay.textContent = `🤖 Computer: ${computerScore}`;
  }
});
