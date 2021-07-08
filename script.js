const menu = document.querySelector("#menu");
const show = document.querySelector(".sidebar_skills");

menu.addEventListener("click", (e) => {
  if (show.style.display === "block") {
    show.style.display = "none";
  } else {
    show.style.display = "block";
  }
});
