const toggleBtn = document.getElementById("darkModeToggle");
const prefersDark = localStorage.getItem("dark") === "true";

if (prefersDark) {
  document.body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark", document.body.classList.contains("dark"));
});

const nama = "Miftakhul Fal'ah";
const animatedName = document.getElementById("animatedName");
let index = 0;
let typing = true;

function loopTyping() {
  if (typing) {
    if (index < nama.length) {
      animatedName.innerHTML += nama.charAt(index);
      index++;
      setTimeout(loopTyping, 150);
    } else {
      typing = false;
      setTimeout(loopTyping, 1000);
    }
  } else {
    if (index > 0) {
      animatedName.innerHTML = nama.substring(0, index - 1);
      index--;
      setTimeout(loopTyping, 80);
    } else {
      typing = true;
      setTimeout(loopTyping, 400);
    }
  }
}

loopTyping();
