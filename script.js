const weeks = document.querySelectorAll(".week-header")

weeks.forEach(header => {

header.addEventListener("click", () => {

const content = header.nextElementSibling

content.style.display =
content.style.display === "grid" ? "none" : "grid"

})

})
