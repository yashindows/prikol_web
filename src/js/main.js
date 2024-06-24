const btn = document.querySelector(".btn")
const hamster = document.querySelector(".content-image")
const title = document.querySelector(".title")

let counter = 1

btn.addEventListener("click", () => {
  hamster.style.display = "block"
  btn.style.display = "none"
  title.innerText = `Счет: ${counter}`
})

hamster.addEventListener("click", () => {
  ++counter
  title.innerText = `Счет: ${counter}`
})
