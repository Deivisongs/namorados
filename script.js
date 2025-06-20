
document.getElementById("enterButton").addEventListener("click", function () {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
});

// Contador de tempo juntos - ajuste a data de início do relacionamento
const startDate = new Date("2021-02-14T00:00:00");

function updateTimeTogether() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  document.getElementById("timeTogether").textContent =
    `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
}

setInterval(updateTimeTogether, 1000);
updateTimeTogether();

// Player de Música
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
let isPlaying = false;

playBtn.addEventListener("click", function () {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶️ Play";
  } else {
    audio.play();
    playBtn.textContent = "⏸️ Pause";
  }
  isPlaying = !isPlaying;
});
