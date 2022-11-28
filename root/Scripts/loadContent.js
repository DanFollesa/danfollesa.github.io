console.log("Running");

window.onload = () => {
    console.log("Window loaded")
}

const buttonGallery = document.getElementById("buttonGallery");

buttonGallery.addEventListener("click", () => {
    console.log("Gallery loading");
});
