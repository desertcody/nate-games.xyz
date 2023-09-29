let xp = parseInt(localStorage.getItem("xp")) || 0;
let level = parseInt(localStorage.getItem("level")) || 1;
let xpPerMinute = 50;
let xpPerLevel = 150;

function updateXPAndLevel() {
  xp += xpPerMinute;

  if (xp >= xpPerLevel) {
    level++;
    xp -= xpPerLevel;
    xpPerLevel += 0; // how many xp is added every level earned
    console.log(`Congratulations! You reached level ${level}!`);

    document.getElementById("progress-bar").style.width = "100%";

    setTimeout(() => {
      document.getElementById("progress-bar").style.width = "0%";
    }, 2500);
  } else {
    const progressBar = document.getElementById("progress-bar");
    const progress = (xp / xpPerLevel) * 100;
    progressBar.style.width = `${progress}%`;
  }

  try {
    localStorage.setItem("xp", xp);
    localStorage.setItem("level", level);
  } catch (e) {
    console.error("LocalStorage error:", e);
  }

  document.getElementById("level").textContent = level;
  document.getElementById("xp").textContent = xp;
}

document.getElementById("level").textContent = level;
document.getElementById("xp").textContent = xp;

function startXPGeneration() {
  setInterval(updateXPAndLevel, 10000); // user gets 50xp every 10 seconds
}

startXPGeneration();
