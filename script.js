const weeks = document.querySelectorAll(".week-header")

weeks.forEach(header => {

header.addEventListener("click", () => {

header.parentElement.classList.toggle("collapsed")

})

})
