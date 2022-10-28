const colors = ["#1abc9c", "#3498db", "#9b59b6"];

function windowResize() {
  const intFrameWidth = window.innerWidth;
  if (intFrameWidth > 800) {
    document.body.style.backgroundColor = colors[0];
  } else if (intFrameWidth > 400 && intFrameWidth <= 800) {
    document.body.style.backgroundColor = colors[1];
  } else {
    document.body.style.backgroundColor = colors[2];
  }
}

window.addEventListener("resize", windowResize);