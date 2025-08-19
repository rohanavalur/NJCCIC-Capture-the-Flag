function loadChallenge(data) {
  // Populate dynamic content
  document.getElementById("challenge").textContent = data.challenge;
  document.getElementById("challenge-title").textContent = data.challengeTitle;
  document.getElementById("description").innerHTML = data.description;

  const form = document.getElementById("form");
  const submitBtn = document.getElementById("submit-btn");

  submitBtn.onclick = () => {
    const answer = document.getElementById("flag").value;
    if (answer === data.flag) {
      form.style.borderColor = "green";
      alert("Correct!");
    } else {
      form.style.borderColor = "red";
      alert("Try again! Make sure the flag follows the format ctf{FLAG}");
    }
  };
}
