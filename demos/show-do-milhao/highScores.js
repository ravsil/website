const highScoresList = document.getElementById("highScoresList");

function renderScores(scores) {
  if (!highScoresList) return;
  highScoresList.innerHTML = (scores || [])
    .map(score => `<li class="high-score">${score.name} - ${score.score}</li>`)
    .join("");
}

let stored = null;
try {
  const raw = localStorage.getItem('show_do_milhao_highscores');
  if (raw) stored = JSON.parse(raw);
} catch (e) {}

if (stored && stored.length > 0) {
  renderScores(stored);
} else {
  $.getJSON("highScores.json", function (data) {
    renderScores(data);
  }).fail(function () {
    renderScores([]);
  });
}