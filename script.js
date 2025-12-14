// AUTO LOGIN
if (localStorage.getItem("auth") === "true") {
  showContent();
}

function login() {
  if (username.value === "Roronoa" && password.value === "Debeste") {
    localStorage.setItem("auth", "true");
    showContent();
  } else {
    error.innerText = "Access denied";
  }
}

function showContent() {
  document.getElementById("login-box").style.display = "none";
  document.getElementById("content").style.display = "block";
}

// CATEGORY FILTER
function filterVideos(category, btn) {
  document.querySelectorAll("#categories button")
    .forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  document.querySelectorAll(".video").forEach(v => {
    v.style.display =
      category === "all" || v.classList.contains(category)
        ? "block"
        : "none";
  });
}

// SEARCH
function searchVideos() {
  const term = search.value.toLowerCase();
  document.querySelectorAll(".video").forEach(v => {
    v.style.display =
      v.dataset.title.toLowerCase().includes(term)
        ? "block"
        : "none";
  });
}

// VIDEO PLAYER
function openVideo(id) {
  modal.style.display = "flex";
  player.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
}

function closeVideo() {
  modal.style.display = "none";
  player.src = "";
}
