const links = document.querySelectorAll(".links a")

links.forEach(link => {

link.addEventListener("click", () => {

console.log("Clicked:", link.textContent)

})

})
