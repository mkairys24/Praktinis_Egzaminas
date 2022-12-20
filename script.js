const burger = document.getElementById("burger")
const links = document.querySelector(".links")

burger.addEventListener("click", function() {
    this.classList.toggle("rotate")
    links.classList.toggle("open")
})

