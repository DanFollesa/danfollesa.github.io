console.log("Running");

window.onload = () => {
    console.log("Window loaded")
}

const buttonGallery = document.getElementById("buttonGallery");

buttonGallery.addEventListener("click", () => {
    console.log("Gallery loading");
});

console.log("Starting to fetch gallery")

fetch('..\Public\Content\gallery.json')
    .then( response => {
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })

    .catch(err => console.error(`Fetch problem: ${err.message}`));