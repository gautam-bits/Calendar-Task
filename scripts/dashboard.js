var toggler = document.querySelector(".navbar-toggler");
var display = false;
var sidebar = document.querySelector(".sidebar-container");
var count = 0;


setInterval(() => {
  if (window.innerWidth < "820") {
    if (count === 0) {
      sidebar.style.display = "none";
      count++;
    }
    toggler.addEventListener("click", displaySwitcher)
  } else displayInitial();
}, 1);



function displaySwitcher() {
  if (!display) {
    sidebar.style.position = "absolute";
    sidebar.style.marginTop = "50px";
    sidebar.style.zIndex = "200";
    sidebar.style.display = "block";
    display = true;
  } else {
    sidebar.style.display = "none";
    display = false;
  }
}

function displayInitial() {
  sidebar.style.position = "relative";
  sidebar.style.marginTop = "0";
  sidebar.style.display = "block";
  sidebar.style.zIndex = "2";
  count = 0;
}