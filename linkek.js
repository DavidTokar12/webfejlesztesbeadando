function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

function setHeights() {
  if (Object.keys(heights).length == 0) {
    var el = document.getElementById("tart1");
    var ind = 1;
    while (el) {
      heights[ind] = 0;
      ind++;
      try {
        el = document.getElementById(`tart${ind}`);
      } catch (error) {
        el = False;
      }
    }
  }
  for (let index = 1; index <= Object.keys(heights).length; index++) {
    heights[index] = getOffset(document.getElementById(`tart${index}`)).top;
  }
}

function scrollHandling() {
  var scroll = window.scrollY + 120;
  var element = 1;

  if (scroll < heights[1]) {
    element = 1;
  } else {
    for (let index = 1; index < Object.keys(heights).length; index++) {
      if (scroll > heights[index] && scroll < heights[index + 1]) {
        element = index;
      }
    }
  }
  if (scroll > heights[Object.keys(heights).length]) {
    element = Object.keys(heights).length;
  }

  var els = document.getElementsByClassName("tartalom-link");
  for (var i = 0; i < els.length; i++) {
    els[i].classList.remove("current");
  }
  document.getElementById(`tlink${element}`).classList.add("current");
}

function goTo(event, num) {
  event.preventDefault();
  console.log(heights[num]);
  window.scroll(0, heights[num] - 75);
}

var heights = {};

window.addEventListener("load", () => {
  setHeights();
  scrollHandling();
});

window.addEventListener("resize", setHeights);
window.addEventListener("scroll", scrollHandling);
