function changeColorTheme(event) {
  let mode;
  if (event.target.checked) {
    dark();
    mode = "dark";
  } else {
    light();
    mode = "light";
  }
  localStorage.setItem("mode", mode);
}

function dark() {
  document.documentElement.className = "dark";
  document.getElementById("logo").src = "./media/logo_transparent_dark.png";
  document.getElementById("aside").style.backgroundImage ="url(./media/darkBackground.png)"
}
function light() {
  document.documentElement.className = "light";
  document.getElementById("logo").src = "./media/logo_transparent_l.png";
  document.getElementById("aside").style.backgroundImage = "url(./media/lightBackground.png)"
}

window.addEventListener("load", () => {
  let mode = localStorage.getItem("mode");
  if (mode) {
    let btn = document.getElementById("flexSwitchCheckChecked");
    if (mode === "dark") {
      dark();
      btn.checked = true;
    } else if (mode === "light") {
      light();
      btn.checked = false;
    }
  }
});
