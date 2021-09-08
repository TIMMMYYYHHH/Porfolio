// Switch theme
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");

    document.getElementById("light").style.display = "none";
    document.getElementById("dark").style.display = "block";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    console.log("TINDNF");
    document.getElementById("dark").style.display = "none";
    document.getElementById("light").style.display = "block";
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// Mobile nav
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".nav-body");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("nav-active");
  console.log("TINDNF");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("nav-active");
});

// Desktop navbar

window.addEventListener("scroll", function () {
  const desktopNav = document.querySelector(".desktop");

  desktopNav.classList.toggle("sticky", window.scrollY > 0);
  desktopNav.classList.toggle("width", window.scrollY > 0);
  // desktopNav.style.width = "70%";
});
