console.log("Running");

let contentContainer = null;
let galleryLink = null;

window.onload = function () {
    console.log("Window loaded")

    galleryLink = document.getElementById("galleryLink");
    contentContainer = document.getElementById("content");
    //contentContainer.innerHTML='<object type="text/html" data="root/Public/Content/home.html"></object>';

    galleryLink.addEventListener('click', () => {
        contentContainer.innerHTML='<object type="text/html" data="root/Public/Content/gallery.html"></object>';
    });
}