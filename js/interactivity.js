var refToggle = document.getElementById('t-ref')
var ref = document.getElementById('ref')

var descToggle = document.getElementById('t-desc')
var desc = document.getElementById('desc')

var specToggle = document.getElementById('t-spec')
var spec = document.getElementById('spec')

refToggle.addEventListener('click', (e) => {
    toggle(ref)
});
descToggle.addEventListener('click', (e) => {
    toggle(desc)
});
specToggle.addEventListener('click', (e) => {
  toggle(spec)
});

const toggle = (x) => {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }