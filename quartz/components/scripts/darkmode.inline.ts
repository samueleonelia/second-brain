document.documentElement.setAttribute("saved-theme", "dark")
localStorage.setItem("theme", "dark")

document.addEventListener("nav", () => {
  document.documentElement.setAttribute("saved-theme", "dark")
})
