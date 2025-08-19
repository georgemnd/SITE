const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) => {
  const header = item.querySelector(".collapsible__header"); // target only the header
  header.addEventListener("click", function () {
    item.classList.toggle("collapsible--expanded");
  });
});