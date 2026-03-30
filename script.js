// 1. Collapse semua week saat pertama load
document.querySelectorAll(".week").forEach(week => {
  week.classList.add("collapsed")
})


// 2. Toggle buka/tutup saat klik header
const headers = document.querySelectorAll(".week-header")

headers.forEach(header => {
  header.addEventListener("click", () => {
    const parent = header.parentElement
    parent.classList.toggle("collapsed")
  })
})


// 3. Semua link buka di tab baru (aman)
document.querySelectorAll("a").forEach(link => {
  link.setAttribute("target", "_blank")
  link.setAttribute("rel", "noopener noreferrer")
})
