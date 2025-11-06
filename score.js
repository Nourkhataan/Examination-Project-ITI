
let userScore = 4; 

const scoreValue = document.getElementById("score-value");
const resultMessage = document.getElementById("result-message");
const tryAgainBtn = document.getElementById("try-again");


scoreValue.textContent = `${userScore} / 10`;

if (userScore >= 5) {
  resultMessage.textContent = " Congratulations! You Passed!";
  resultMessage.style.color = "#00ffb3";
} else {
  resultMessage.textContent = " You Failed. Please try again!";
  resultMessage.style.color = "#ff5c5c";
}


tryAgainBtn.addEventListener("click", () => {
  alert("Redirecting to the quiz page...");
 
  window.location.href = "quiz.html";
});

