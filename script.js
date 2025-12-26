const thought = document.getElementById("thought");

thought.addEventListener("keydown", e => {
  if (e.key === "Enter") next();
});

function next() {
  if (!thought.value.trim()) return;
  swap("s1", "s2");
}

function yes() {
  document.getElementById("msg").innerText =
    "STOP THINKING.\nDO IT.\nACTIONS SPEAK LOUDER THAN WORDS.";
  swap("s2", "s3");
}

function no() {
  document.getElementById("msg").innerText = "LET IT GO.";
  swap("s2", "s3");
}

function swap(a, b) {
  document.getElementById(a).classList.remove("active");
  document.getElementById(b).classList.add("active");
}