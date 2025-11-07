var scoreValue = document.getElementById("score-value");
var message = document.getElementById("message");
var score = localStorage.getItem("examScore");
var timeUp = localStorage.getItem("timeUp");

if (!score) {
  score = 0; 
}

scoreValue.textContent = `${score}%`;
if (timeUp === "true") {
  message.textContent = `Time’s up! Your score is ${score}%.`;
  message.style.color = "#ff4c4c";
  localStorage.removeItem("timeUp");
}
else if (score < 60) {
  message.textContent = "You failed, Hamada! You need to pull yourself together!";
  message.style.color = "#ff4c4c";
} else if (score >= 60 && score < 80) {
  message.textContent = "Good job, Hamada! But you still need to work harder!";
  message.style.color = "#00b36b";
} else {
  message.textContent = "Excellent, Hamada! You’re the best!";
  message.style.color = "#00b36b";
}

function retry() {
  window.location.href = "Exam.html";
}

function goHome() {
  window.location.href = "LP.html";
}