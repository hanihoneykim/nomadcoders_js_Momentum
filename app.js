const h1 = document.querySelector("div.hello:first-child h1");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];


const superEventHandler = {
    handleEnter: function() {
      h1.innerText = "The mouse is here!";
      h1.style.color = colors[0];
    },
    handleLeave: function() {
      h1.innerText = "The mouse is gone!";
      h1.style.color = colors[1];
    },
    handleResize: function() {
      h1.innerText = "You just resized!";
      h1.style.color = colors[2];
    },
    handleSelect: function() {
      h1.innerText = "You're selecting me!";
      h1.style.color = colors[3];
    },
    handleContext: function() {
      h1.innerHTML = "That was a right click!";
      h1.style.color = colors[4];
    }
  };
  

h1.addEventListener("mouseenter", superEventHandler.handleEnter);
h1.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContext);