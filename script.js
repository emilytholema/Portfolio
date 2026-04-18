const menuButton = document.getElementById("menuButton");
const menuDropdown = document.getElementById("menuDropdown");

menuButton.addEventListener("click", () => {
    menuDropdown.classList.toggle("open");
});

document.addEventListener("click", (event) => {
    const isClickInside = document.querySelector(".menu-container").contains(event.target);

    if (!isClickInside) {
        menuDropdown.classList.remove("open");
    }
});
