const questions = [
  ['Ile księżyców ma Ziemia?', 1],
  ['Ile księżyców ma Saturn?', 62],
  ['Ile księżyców ma Wenus?', 0]
];

let current = 0;
let score = 0;

const quizDiv = document.getElementById('quiz');

function renderQuestion() {
  quizDiv.innerHTML = '';

  if (current >= questions.length) {
    const p = document.createElement('p');
    p.innerHTML = `Koniec quizu. Twój wynik: <strong>${score}</strong> / ${questions.length}`;
    quizDiv.appendChild(p);
    return;
  }

  const [text] = questions[current];

  const p = document.createElement('p');
  p.textContent = text;

  const input = document.createElement('input');
  input.type = 'number';
  input.id = 'answer';

  const btn = document.createElement('button');
  btn.textContent = 'Sprawdź';
  btn.addEventListener('click', checkAnswer);

  quizDiv.appendChild(p);
  quizDiv.appendChild(input);
  quizDiv.appendChild(btn);
}

function checkAnswer() {
  const [_, correct] = questions[current];
  const answer = Number(document.getElementById('answer').value);

  if (answer === correct) {
    alert('Prawidłowa odpowiedź!');
    score++;
  } else {
    alert('Błąd. Prawidłowa odpowiedź to ' + correct);
  }

  current++;
  renderQuestion();
}

renderQuestion();
