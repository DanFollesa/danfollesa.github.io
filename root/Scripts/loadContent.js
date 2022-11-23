console.log("Running");

let contentContainer = null;
let galleryLink = null;

window.onload = () => {
    console.log("Window loaded")

    galleryLink = document.getElementById("galleryLink");
    contentContainer = document.getElementById("content");
    //contentContainer.innerHTML='<object type="text/html" data="root/Public/Content/home.html"></object>';

    galleryLink.addEventListener('click', () => {
        console.log("Click successful");
        test();
    });
}

function test() {
    //contentContainer.innerHTML='<object type="text/html" data="root/Public/Content/gallery.html"></object>';

    const xmlhttp = new XMLHttpRequest();

    contentContainer.innerHTML = xmlhttp.responseText;

    const gallery = "https://danfollesa.github.io/root/Public/Content/gallery.html";
    console.log("Getting https://danfollesa.github.io/root/Public/Content/gallery.html")

    xmlhttp.open("GET", gallery, true);
    xmlhttp.send(null);
}