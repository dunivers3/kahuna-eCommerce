const menu = document.getElementById("bars");
const navigation = document.getElementById("navbar");
const closeBtn = document.getElementById("close");
const goToShop = document.getElementById("shopNow");

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

goToShop.addEventListener("click", () => {
    window.location.href = "shop.html";
    console.log("shop.html")
})