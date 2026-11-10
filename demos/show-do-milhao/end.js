const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore') || 0;

let highScores = [];

try {
    const stored = localStorage.getItem('show_do_milhao_highscores');
    if (stored) highScores = JSON.parse(stored);
} catch (e) {}

function setupEndPage() {
    finalScore.innerText = mostRecentScore;

    if (username) {
        username.addEventListener('keyup', () => {
            saveScoreBtn.disabled = !username.value.trim();
        });
    }

    saveHighScore = (e) => {
        e.preventDefault();
        const scorename = username.value.trim();
        if (!scorename) return;

        const score = {
            score: parseInt(mostRecentScore, 10) || 0,
            name: scorename,
        };

        highScores.push(score);
        highScores.sort((a, b) => b.score - a.score);
        try {
            localStorage.setItem('show_do_milhao_highscores', JSON.stringify(highScores));
        } catch (e) {}

        saveScoreBtn.disabled = true;
        document.getElementById("isSaved").innerText = "Salvo com sucesso!";
    };
}

if (!highScores || highScores.length === 0) {
    $.getJSON("highScores.json", function (data) {
        highScores = data || [];
        try {
            localStorage.setItem('show_do_milhao_highscores', JSON.stringify(highScores));
        } catch (e) {}
        setupEndPage();
    }).fail(function () {
        setupEndPage();
    });
} else {
    setupEndPage();
}