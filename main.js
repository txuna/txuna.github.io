const MenuBarBtn = document.querySelector(".navbar__bar")
const NavbarMenu = document.querySelector(".navbar__menu")

function open_menu(event) {
    if (NavbarMenu.style.display == "inherit") {
        NavbarMenu.style.display = "none"
        console.log("asd")
    } else {
        NavbarMenu.style.display = "inherit"
    }
}

function init() {
    MenuBarBtn.addEventListener("click", open_menu);
}

init()