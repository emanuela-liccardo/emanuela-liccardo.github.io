// cookies
document.addEventListener("DOMContentLoaded", function () {
  const cookieBox = document.getElementById("cookieBox");

  if (!localStorage.getItem("cookieConsent")) {
    cookieBox.style.display = "block";
  }

  document.getElementById("acceptCookies").addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "accepted");
    cookieBox.style.display = "none";
  });

  document.getElementById("rejectCookies").addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "rejected");
    cookieBox.style.display = "none";
  });
});

// login popup
document.addEventListener("DOMContentLoaded", function () {
  const loginSection = document.getElementById("log-in");
  const openLogin = document.getElementById("open-login");
  const closeLogin = document.getElementById("close-login");

  if (!openLogin || !closeLogin || !loginSection) return; // safety check

  openLogin.addEventListener("click", () => {
    loginSection.style.display = "flex";
  });

  closeLogin.addEventListener("click", () => {
    loginSection.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === loginSection) {
      loginSection.style.display = "none";
    }
  });
});

//carousel
const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function update() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length; // loop forward
  update();
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length; // loop backward
  update();
});


