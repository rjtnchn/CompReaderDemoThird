const finalScore1 = document.getElementById("finalScore1");
const mostRecentScore1 = localStorage.getItem("mostRecentScore1");
finalScore1.innerText = "Score: " + mostRecentScore1 + "/" + "5";
