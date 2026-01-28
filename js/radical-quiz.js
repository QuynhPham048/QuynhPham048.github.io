let index = 0;
let score = 0;
let questions = [];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function startTest() {
  questions = shuffle(RADICALS);
  index = 0;
  score = 0;
  loadQuestion();
}

function loadQuestion() {
  const q = questions[index];

  document.getElementById("progress").innerText =
    `Câu ${index + 1}/${questions.length}`;

  // 👉 Hiện chữ Hán của bộ
  document.getElementById("question").innerText = q.hanzi;

  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";

  document.getElementById("explain").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";

  // 🔒 lấy 2 đáp án sai KHÔNG TRÙNG
  const wrongs = shuffle(
    questions.filter(r => r.name !== q.name)
  ).slice(0, 2);

  const options = shuffle([q, ...wrongs]);

  options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt.name;
    div.onclick = () => checkAnswer(div, opt.name === q.name, q);
    optionsBox.appendChild(div);
  });
}

function checkAnswer(el, correct, q) {
  document.querySelectorAll(".option").forEach(o => o.onclick = null);

  if (correct) {
    el.classList.add("correct");
    score++;
  } else {
    el.classList.add("wrong");
    document.querySelectorAll(".option").forEach(o => {
      if (o.innerText === q.name) o.classList.add("correct");
    });
  }

  document.getElementById("explain").innerHTML = `
  <b style="font-size:22px">${q.hanzi}</b>
<span style="color:#666">(${q.pinyin})</span>
– Bộ <b>${q.name}</b><br>
Ý nghĩa: ${q.meaning}<br>
<small style="color:#555">${q.note}</small>

`;

  document.getElementById("explain").style.display = "block";
  document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
  index++;

  if (index < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("app").innerHTML = `
      <h2>Hoàn thành 🎉</h2>
      <p>Đúng: <b>${score}</b></p>
      <p>Sai: <b>${questions.length - score}</b></p>
      <a class="btn backBtn" href="index.html">⬅ Quay lại</a>
    `;
  }
}

/* 🚀 BẮT BUỘC GỌI */
startTest();
