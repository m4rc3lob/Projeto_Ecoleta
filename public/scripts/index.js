const openModal = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const closeModal = document.querySelector("#modal .header a")

openModal.addEventListener("click", () => {
    modal.classList.remove("hide")
})

closeModal.addEventListener("click", () => {
    modal.classList.add("hide")
})