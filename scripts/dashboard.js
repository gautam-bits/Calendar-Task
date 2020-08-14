let toggler = document.querySelector(".navbar-toggler");
let display = false;
let sidebar = document.querySelector(".sidebar-container");


let count = 0;


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
  sidebar.style.zIndex = "10";
  count = 0;
}