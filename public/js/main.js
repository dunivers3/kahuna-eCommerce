const menu = document.getElementById("bars");
const navigation = document.getElementById("navbar");
const closeBtn = document.getElementById("close");

if (menu) {
    menu.addEventListener("click", () => {
        navigation.classList.add("active");
    });
}
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
}