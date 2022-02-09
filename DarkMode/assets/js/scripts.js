function changeMode() {
    mudarClases();
    mudarTextos();
}

function mudarClases() {
    bodyContainer.classList.toggle(darkModeClass);
    footerContainer.classList.toggle(darkModeClass);
    h2Container.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);
}
function mudarTextos() {
    textoDarkMode = "Dark mode";
    textoLightMode = "Light mode"
    
    if (bodyContainer.classList.contains(darkModeClass)) {
        button.innerHTML = textoLightMode;
        h2Container.innerHTML = textoDarkMode + " ON";
    } else {
        button.innerHTML = textoDarkMode;
        h2Container.innerHTML = textoLightMode + " ON";
    }
}

const button = document.querySelector("button#mode-selector");
button.addEventListener("click", changeMode);

const darkModeClass = "dark-mode";

const bodyContainer = document.querySelector("body");
const footerContainer = document.querySelector("footer");
const textoContainer = document.querySelector("div","text");
const h2Container = document.querySelector("h2", "text-mode");

console.log(bodyContainer);