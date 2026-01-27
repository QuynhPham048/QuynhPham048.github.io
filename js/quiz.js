let currentIndex = 0;
let score = 0;
let questions = [];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function startTest(vocabData) {
  questions = shuffle([...vocabData]);
  currentIndex = 0;
  score = 0;
  loadQuestion();
}

function uniqueByHanzi(arr) {
  const map = new Map();
  arr.forEach(item => {
    if (!map.has(item.hanzi)) {
      map.set(item.hanzi, item);
    }
  });
  return [...map.values()];
}

function loadQuestion() {
  const q = questions[currentIndex];

  document.getElementById("progress").innerText =
    `Câu ${currentIndex + 1}/${questions.length}`;

  document.getElementById("question").innerHTML =
    '<span class="hint">Tìm chữ Hán của từ:</span> ' + q.vi;

  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";

  document.getElementById("explain").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";

  const pool = uniqueByHanzi(
    questions.filter(v => v.hanzi !== q.hanzi)
  );

  const wrongOptions = shuffle(pool).slice(0, 2);
  const options = shuffle([q, ...wrongOptions]);

  options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt.hanzi;
    div.onclick = () =>
      checkAnswer(div, opt.hanzi === q.hanzi, q);
    optionsBox.appendChild(div);
  });
}

function checkAnswer(el, isCorrect, q) {
  document.querySelectorAll(".option").forEach(o => o.onclick = null);

  if (isCorrect) {
    el.classList.add("correct");
    score++;
  } else {
    el.classList.add("wrong");
    document.querySelectorAll(".option").forEach(o => {
      if (o.innerText === q.hanzi) {
        o.classList.add("correct");
      }
    });
  }

  const hanVietLine =
    q.hanviet && q.hanviet.trim() !== ""
      ? `<br>Hán Việt: ${q.hanviet}`
      : "";

  document.getElementById("explain").innerHTML = `
    <b>${q.hanzi}</b> (${q.pinyin})
    ${hanVietLine}
    <br>Nghĩa: ${q.vi}
  `;

  document.getElementById("explain").style.display = "block";
  document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("app").innerHTML = `
      <h2>Hoàn thành 🎉</h2>
      <p>Đúng: <b>${score}</b></p>
      <p>Sai: <b>${questions.length - score}</b></p>
      <a class="btn backBtn" href="hsk1-vocab.html">⬅ Quay lại</a>
    `;
  }
}
