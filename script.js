console.log("Cześć!");

let przycisk = document.querySelector(".przycisk");
let header = document.querySelector(".header");
przycisk.addEventListener("click", () => {
    header.remove();
} );

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let theme = document.querySelector(".mainpage");
button.addEventListener("click", ()=>{
    body.classList.toggle("dark");
    theme.innerText = body.classList.contains("dark") ? "Bright":"Dark";
})