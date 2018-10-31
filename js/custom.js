//splash

var splash = document.querySelector(".splash");
var pages = document.querySelector(".pages");
document.querySelector(".pages").style.display = "none";

setTimeout(function() {
  document.querySelector(".splash").style.display = "none";
  document.querySelector(".pages").style.display = "block";
}, 2000);

//DOM load event
window.addEventListener("DOMContentLoaded", () => {
  const spotlight = document.querySelector(".spotlight");
  let spotlightSize = "transparent 60px, rgba(0, 0, 0, 1) 100px)";
  window.addEventListener("mousemove", e => updateSpotlight(e));
  window.addEventListener("mousedown", e => {
    spotlightSize = "transparent 60px, rgba(0, 0, 0, 1) 80px)";
    updateSpotlight(e);
  });
  window.addEventListener("mouseup", e => {
    spotlightSize = "transparent 60px, rgba(0, 0, 0, 1) 100px)";
    updateSpotlight(e);
  });

  function updateSpotlight(e) {
    spotlight.style.backgroundImage = `radial-gradient(circle at ${(e.pageX /
      window.innerWidth) *
      100}% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
  }
});

//Focus
window.addEventListener("DOMContentLoaded", () => {
  const spotlight = document.querySelector(".focus");
  let spotlightSize = "transparent 60px, rgba(0, 0, 0, 1) 100px)";
  window.addEventListener("mousemove", e => updateSpotlight(e));
  window.addEventListener("mousedown", e => {
    spotlightSize = "transparent 60px, rgba(0, 0, 0, 1) 80px)";
    updateSpotlight(e);
  });
  window.addEventListener("mouseup", e => {
    spotlightSize = "transparent 60px, rgba(0, 0, 0, 1) 100px)";
    updateSpotlight(e);
  });

  function updateSpotlight(e) {
    spotlight.style.backgroundImage = `radial-gradient(circle at ${(e.pageX /
      window.innerWidth) *
      100}% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
  }
});

//Snipe
window.addEventListener("DOMContentLoaded", () => {
  const spotlight = document.querySelector(".snipe");
  let spotlightSize = "transparent 60px, rgba(0, 0, 0, 1) 100px)";
  window.addEventListener("mousemove", e => updateSpotlight(e));
  window.addEventListener("mousedown", e => {
    spotlightSize = "transparent 60px, rgba(0, 0, 0, 1) 80px)";
    updateSpotlight(e);
  });
  window.addEventListener("mouseup", e => {
    spotlightSize = "transparent 60px, rgba(0, 0, 0, 1) 100px)";
    updateSpotlight(e);
  });

  function updateSpotlight(e) {
    spotlight.style.backgroundImage = `radial-gradient(circle at ${(e.pageX /
      window.innerWidth) *
      100}% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
  }
});

var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");

function goToSecond() {
  first.style.display = "none";
  second.style.display = "block";
}

function goToThird() {
  second.style.display = "none";
  third.style.display = "block";
}

function goBack() {
  second.style.display = "none";
  first.style.display = "block";
}

function goBackSecond() {
  third.style.display = "none";
  second.style.display = "block";
}
