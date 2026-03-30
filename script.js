// 1. Collapse semua week saat load
const weeks = document.querySelectorAll(".week")

weeks.forEach(week => {
  week.classList.add("collapsed")
})


// 2. Accordion behavior (hanya 1 terbuka)
weeks.forEach(week => {
  const header = week.querySelector(".week-header")

  header.addEventListener("click", () => {

    const isCollapsed = week.classList.contains("collapsed")

    // Tutup semua dulu
    weeks.forEach(w => w.classList.add("collapsed"))

    // Kalau tadi tertutup → buka
    if (isCollapsed) {
      week.classList.remove("collapsed")
    }

  })
})


// 3. Semua link buka di tab baru
document.querySelectorAll("a").forEach(link => {
  link.setAttribute("target", "_blank")
  link.setAttribute("rel", "noopener noreferrer")
})
