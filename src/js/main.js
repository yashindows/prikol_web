const btn = document.querySelector(".btn")
const hamster = document.querySelector(".content-image")
const title = document.querySelector(".title")
const loader = document.querySelector(".loader")

let counter = 1

window.addEventListener("load", (e) => {
  loader.style.display = "none"
  btn.style.display = "inline-block"
})

btn.addEventListener("click", () => {
  hamster.style.display = "block"
  btn.style.display = "none"
  title.innerText = `Счет: ${counter}`
})

hamster.addEventListener("click", () => {
  ++counter
  hamster.style.scale = 0.9
  title.innerText = `Счет: ${counter}`
  setTimeout(() => {
    hamster.style.scale = 1
  }, 50)
})
