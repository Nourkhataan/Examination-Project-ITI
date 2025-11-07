var questions = [
  {
    text: ' Which SQL statement is used to retrieve data from a database?',
    options: ['GET','SELECT','EXTRACT','READ'],
    correct: 'SELECT'
  },
  {
    text: ' Which SQL clause is used to filter records?',
    options: ['ORDER BY','GROUP BY','WHERE','HAVING'],
    correct: 'WHERE'
  },
  {
    text: ' What does the JOIN keyword do in SQL?',
    options: ['Combines rows from different tables','Deletes duplicate rows','Sorts the data','Changes column names'],
    correct: 'Combines rows from different tables'
  },
  {
    text: ' Which command is used to remove all records but keep the structure?',
    options: ['DROP','DELETE','REMOVE','TRUNCATE'],
    correct: 'TRUNCATE'
  },
  {
    text: ' What is the correct syntax to select all columns from Employees?',
    options: ['SELECT * FROM Employees;','SELECT all FROM Employees;','GET * FROM Employees;','SHOW * Employees;'],
    correct: 'SELECT * FROM Employees;'
  },
  {
    text: ' Which SQL function counts rows?',
    options: ['SUM','COUNT','NUMBER','TOTAL'],
    correct: 'COUNT'
  },
  {
    text: ' Which statement changes data in an existing row?',
    options: ['MODIFY','CHANGE','UPDATE','ALTER'],
    correct: 'UPDATE'
  },
  {
    text: ' Which keyword sorts the result ascending?',
    options: ['ORDER BY','SORT ASC','ARRANGE','ASCENDING'],
    correct: 'ORDER BY'
  },
  {
    text: ' What does PRIMARY KEY do?',
    options: ['Allows duplicate values','Uniquely identifies each record in a table','Creates a backup','Makes the table read-only'],
    correct: 'Uniquely identifies each record in a table'
  },
  {
    text: ' Which command permanently deletes a table?',
    options: ['DELETE','REMOVE','DROP','ERASE'],
    correct: 'DROP'
  }
];

function shuffleQuestions(arr)
{
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
  }
  return arr;
}
questions = shuffleQuestions(questions);

var current = 0;
var marked = new Set();
var answers = {};

function loadQuestion(index) 
{
  var q = questions[index];
  document.getElementById('questionNumber').textContent = `Question ${index + 1}`;
  document.getElementById('questionText').textContent = q.text;

  var container = document.getElementById('optionsContainer');
  container.innerHTML = '';
  
  q.options.forEach((opt, i) => {
    var inputId = `q${index}_opt${i}`;
    var div = document.createElement('div');
    div.className = 'option';
    div.innerHTML = `
      <input type="radio" name="q${index}" id="${inputId}" value="${opt}">
      <label for="${inputId}">${opt}</label>
    `;

    if (answers[index] === opt) 
      {
      div.querySelector('input').checked = true;
      }

    div.querySelector('input').addEventListener('change', (e) => {
      answers[index] = e.target.value;
    });

    container.appendChild(div);
  });

var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");

if (current === 0) 
 {
  prevBtn.style.display = "none";  
 } 
else 
 {
  prevBtn.style.display = "inline-block";
 }

if (current === questions.length - 1) 
 {
  nextBtn.style.display = "none"; 
 } 
else 
 {
  nextBtn.style.display = "inline-block";
 }

}

function nextQ() 
 {
  if (current < questions.length - 1) 
   {
    current++;
    loadQuestion(current);
   }
 }

function prevQ() 
{
  if (current > 0 ) 
    {
    current--;
    loadQuestion(current);
    }
}

function markQ() 
{
 
  if (marked.has(current)) 
    {
    marked.delete(current); 
    } 
    else 
    {
    marked.add(current); 
    }
  updateMarkedSidebar(); 
}

function updateMarkedSidebar() {
  var list = document.getElementById('markedList');
  list.innerHTML = '';
  marked.forEach(idx => {
    var item = document.createElement('div');
    item.className = 'marked-item';
    item.textContent = `Q${idx + 1}: ${questions[idx].text.slice(0, 20)}...`;
    item.onclick = () => {
      current = idx;
      loadQuestion(current);
    };
    list.appendChild(item);
  });
}

function showScore() {
  var total = questions.length;
  var correct = 0;

  for (var i = 0; i < total; i++) 
    {
    if (answers[i] === questions[i].correct) 
    {
      correct++;
    }
    }

  var score = Math.round((correct / total) * 100);
  localStorage.setItem("examScore", score);

  
  window.location.href = "Score.html";
}

var timeLeft = 5 * 60;
var timerDisplay = document.getElementById("timer");

function updateTimer() {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timerDisplay.textContent = `Time Left: ${minutes}:${seconds}`;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    localStorage.setItem("timeUp", "true");
    showScore();
  }
  timeLeft--;
}

var timerInterval = setInterval(updateTimer, 1000);

loadQuestion(current);
