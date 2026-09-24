const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

const detailButtons = document.querySelectorAll(".detail-btn");
const toast = document.getElementById("toast");

detailButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const projectName = button.getAttribute("data-project");

        toast.textContent = projectName + " sedang dalam pengembangan.";
        toast.classList.add("show");

        setTimeout(function () {
            toast.classList.remove("show");
        }, 2500);
    });
});
