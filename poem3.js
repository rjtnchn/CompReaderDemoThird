document.addEventListener("DOMContentLoaded", function () {
  const timerElement = document.getElementById("timer");
  const doneBtn = document.getElementById("doneBtn");

  let timeLeft = 600; // 10 minutes in seconds

  function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  }

  updateTimer(); // Update timer initially

  const countdown = setInterval(function () {
    timeLeft--;
    updateTimer();

    if (timeLeft === 0) {
      clearInterval(countdown);
      window.location.href = "game3.html"; // Redirect to questions page after timer expires
    }
  }, 1000);

  doneBtn.addEventListener("click", function () {
    clearInterval(countdown);
    const confirmProceed = confirm(
      "Are you sure you want to proceed? You cannot turn back to the poem once you proceed."
    );
    if (confirmProceed) {
      window.location.href = "game3.html"; // Redirect to questions page
    } else {
      // Continue timer if user cancels
      countdown = setInterval(function () {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
          clearInterval(countdown);
          window.location.href = "game3.html"; // Redirect to questions page after timer expires
        }
      }, 1000);
    }
  });
});
