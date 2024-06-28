const hamster = document.querySelector(".content-image")
const title = document.querySelector(".title")
const loader = document.querySelector(".loader")

if (!localStorage.counter) {
  localStorage.setItem("counter", 0)
}

window.addEventListener("load", (e) => {
  loader.style.display = "none"
  hamster.style.display = "block"
})

title.innerText = `Счет: ${localStorage.counter}`

hamster.addEventListener("click", () => {
  ++localStorage.counter
  hamster.style.scale = 0.9
  if (+localStorage.counter >= 500) {
    document.body.classList.add("flag-bg")
  }
  title.innerText = `Счет: ${localStorage.counter}`
  setTimeout(() => {
    hamster.style.scale = 1
  }, 50)
})

if (+localStorage.counter >= 500) {
  document.body.classList.add("flag-bg")
}
